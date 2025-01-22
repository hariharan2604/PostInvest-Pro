module.exports = {
  apps: [{
    name: 'postinvest-pro',
    script: './app.js',
    autorestart: true,
    // watch: '.',
    env: {
      "NODE_ENV": "development"
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }],
};
