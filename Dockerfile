ARG NODE_VERSION=22.5.1
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Install PM2 and CLI tools
RUN yarn global add pm2 sequelize-cli

# Copy dependency files and install only production dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy the app source code
COPY . .

# Expose the app port
EXPOSE 3000

# Use non-root user
USER node

# Run DB migrations and then start the app
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && pm2-runtime app.js"]
