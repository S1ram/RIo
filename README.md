# RIo — Rio Coffee

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

**Domain Setup (riocoffee.in)**

Follow these steps to make `riocoffee.in` point to this site (assumes you have a server with a public IP and control of the domain DNS):

- **DNS**: In your domain registrar/DNS provider, create one of the following records:
  - If you are serving from a single server: create an `A` record for `@` (root) and `www` pointing to your server's public IP.
  - If using a platform (Vercel/Cloudflare Pages/etc): add the required `CNAME` or provider-specific records per their docs.

- **Reverse proxy (recommended)**: Run your Next.js app with `npm run build` + `npx next start -p 3000`, and put Nginx in front to proxy HTTP/HTTPS traffic to `localhost:3000`.

- **Example Nginx**: place the example config below under `/etc/nginx/sites-available/riocoffee` and symlink to `sites-enabled` (or use your distro's layout). Then reload Nginx.

```nginx
# scripts/nginx-rio-coffee.conf (example)
server {
	listen 80;
	server_name riocoffee.in www.riocoffee.in;

	# Redirect HTTP to HTTPS (certbot will create HTTPS block)
	location / {
		return 301 https://$host$request_uri;
	}
}

server {
	listen 443 ssl;
	server_name riocoffee.in www.riocoffee.in;

	# change these to your cert paths or use certbot
	ssl_certificate /etc/letsencrypt/live/riocoffee.in/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/riocoffee.in/privkey.pem;

	# Recommended security headers (adjust as needed)
	add_header X-Frame-Options SAMEORIGIN;
	add_header X-Content-Type-Options nosniff;
	add_header Referrer-Policy no-referrer-when-downgrade;

	location / {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_pass http://127.0.0.1:3000;
		proxy_http_version 1.1;
		proxy_set_header Connection "";
		proxy_buffering off;
	}
}
```

- **TLS (Let's Encrypt)**: on the server install `certbot` and run the following once Nginx is listening on port 80 to obtain certificates:

```bash
# Example (Ubuntu):
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d riocoffee.in -d www.riocoffee.in
```

Certbot will edit your Nginx config to use the certs and configure automatic renewal.

- **Firewall**: allow ports 80 and 443 (example for UFW):

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

- **Automate start**: ensure your Next.js `systemd` service (`scripts/rio-coffee.service`) is configured and enabled so the app is running after reboot. The proxy will route traffic to it on port 3000.

If you'd rather host on Vercel, Cloudflare, or another hosting provider, follow their docs to connect the `riocoffee.in` domain (they typically ask you to add an `A` or `CNAME` record and verify ownership). Vercel also gives built-in HTTPS.

## Quick-start automated server setup (Ubuntu/Debian)

To set up the entire server (Nginx, certbot, HTTPS, firewall) in one command:

1. **On your server**: clone the repo or download the script:
   ```bash
   # If you cloned the repo:
   cd /path/to/rio-coffee
   # Otherwise, copy scripts/setup-server.sh to your server
   ```

2. **Ensure the Next.js app is running on port 3000** (via systemd or `npx next start -p 3000`).

3. **Run the setup script** (requires sudo):
   ```bash
   sudo chmod +x scripts/setup-server.sh
   sudo ./scripts/setup-server.sh
   ```

   This script will:
   - Verify the app is running on port 3000
   - Update system packages
   - Install Nginx and certbot
   - Configure Nginx as a reverse proxy for `riocoffee.in` and `www.riocoffee.in`
   - Obtain a free Let's Encrypt TLS certificate
   - Open firewall ports 80 and 443 (UFW)
   - Enable auto-renewal of certificates
   - Start/reload Nginx

4. **Verify DNS**: ensure your DNS A records for `riocoffee.in` and `www.riocoffee.in` point to your server's public IP.

5. **Test**:
   ```bash
   curl https://riocoffee.in
   ```

That's it! Your site is now publicly accessible over HTTPS at `https://riocoffee.in` and `https://www.riocoffee.in`.

## Troubleshooting domain setup

- **"Port 3000 is not listening"**: Start the Next.js app. Example:
  ```bash
  cd /path/to/rio-coffee
  npm run build
  npx next start -p 3000 &
  # or use systemd: sudo systemctl start rio-coffee
  ```

- **Nginx config test fails**: Check `/etc/nginx/sites-available/riocoffee` for syntax errors.

- **Certificate not obtained**: Check that port 80 is open and DNS is propagated. Run manually:
  ```bash
  sudo certbot certonly --nginx -d riocoffee.in -d www.riocoffee.in
  ```

- **HTTPS not working**: 
  - Verify firewall allows 443: `sudo ufw status`
  - Check Nginx is running: `sudo systemctl status nginx`
  - Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
  - Verify certs exist: `sudo certbot certificates`

- **Certificate renewal issues**: Certbot auto-renewal is configured. To manually renew:
  ```bash
  sudo certbot renew
  ```
