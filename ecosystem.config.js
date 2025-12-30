/**
 * PM2 Ecosystem Configuration
 *
 * This file configures PM2 process manager for the portfolio application.
 *
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 restart portfolio-ada
 *   pm2 stop portfolio-ada
 *   pm2 logs portfolio-ada
 *   pm2 monit
 */

module.exports = {
  apps: [
    {
      // Application name
      name: 'portfolio-ada',

      // Entry point
      script: 'node_modules/.bin/next',
      args: 'start',

      // Working directory
      cwd: './',

      // Instances (use 1 for Next.js)
      instances: 1,
      exec_mode: 'cluster',

      // Auto restart
      autorestart: true,
      watch: false,

      // Max memory restart (1GB)
      max_memory_restart: '1G',

      // Environment variables
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },

      // Logging
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

      // Advanced options
      time: true,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,

      // Restart delays
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
    },
  ],

  // Deployment configuration (optional)
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOST',
      ref: 'origin/main',
      repo: 'GIT_REPOSITORY',
      path: '/path/to/deployment',
      'pre-deploy': 'git pull',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
