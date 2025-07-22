#!/bin/bash

# 1. Update system and install Docker, NGINX, AWS CLI
apt update -y
apt install -y docker.io curl git nginx awscli

# 2. Enable and start Docker
systemctl enable docker
systemctl start docker

# 3. Install Docker Compose v2 (plugin style)
mkdir -p ~/.docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose

# 4. Add ubuntu user to docker group
usermod -aG docker ubuntu

# 5. Replace NGINX default config with your custom config using server_name _
cat <<EOF > /etc/nginx/sites-available/postinvest
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}

# HTTPS server (only used to redirect to HTTP)
server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

    return 301 http://\$host\$request_uri;
}
EOF

# Disable default and enable custom config
rm -f /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/postinvest /etc/nginx/sites-enabled/

# 6. Create self-signed cert for HTTPS redirection
mkdir -p /etc/ssl/certs /etc/ssl/private
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/nginx-selfsigned.key \
  -out /etc/ssl/certs/nginx-selfsigned.crt \
  -subj "/C=IN/ST=TN/L=Chennai/O=PostInvest/OU=App/CN=localhost"

# Restart NGINX with new config
nginx -t && systemctl restart nginx

# 7. App directory & download compose/env from S3
mkdir -p /home/ubuntu/app
cd /home/ubuntu/app

# Replace with your actual bucket
aws s3 cp s3://postinvest-deploy-assets/envs/.env .env
aws s3 cp s3://postinvest-deploy-assets/deployments/compose.yaml compose.yaml

# 8. Start Docker containers
docker compose pull
docker compose up -d
