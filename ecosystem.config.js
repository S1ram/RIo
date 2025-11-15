module.exports = {
  apps: [
    {
      name: 'rio-coffee',
      script: 'npx',
      args: 'next start -p 3000',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
