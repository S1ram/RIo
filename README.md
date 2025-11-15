This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Run as service / Production helpers

This repo includes helper scripts and examples to run the app in production mode.

Files added:
- `scripts/start-prod.sh` — Starts `next start` (builds when needed), writes `next.pid` and `next.log`.
- `scripts/stop-prod.sh` — Stops the process created by `start-prod.sh` (or attempts a pkill fallback).
- `ecosystem.config.js` — `pm2` ecosystem file for starting the app with PM2.
- `scripts/rio-coffee.service` — Example `systemd` unit (edit WorkingDirectory and ExecStart paths before use).

Usage (Linux / macOS / Git Bash):

Start (detached, builds if needed):
```bash
# make scripts executable
chmod +x scripts/start-prod.sh scripts/stop-prod.sh
./scripts/start-prod.sh
# check logs
tail -f next.log
```

Stop:
```bash
./scripts/stop-prod.sh
```

pm2 usage (recommended for production process management):
```bash
# install pm2 globally (one-time)
npm install -g pm2
# start using ecosystem file
pm2 start ecosystem.config.js
# stop
pm2 stop rio-coffee
pm2 delete rio-coffee
# persist across reboot
pm2 save
pm2 startup
```

Systemd (example):
- Copy `scripts/rio-coffee.service` to `/etc/systemd/system/rio-coffee.service`, update the `WorkingDirectory` and `ExecStart` paths, then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable rio-coffee
sudo systemctl start rio-coffee
sudo systemctl status rio-coffee
journalctl -u rio-coffee -f
```

Firewall / network:
- To expose port 3000, allow it in your firewall (example Ubuntu UFW):
```bash
sudo ufw allow 3000/tcp
```

Replace `/path/to/rio-coffee` in the service file with the correct path for your machine.
