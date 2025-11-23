# AWS EC2 Deployment Guide for Rio Coffee

This guide walks you through deploying the Rio Coffee Next.js app to an AWS EC2 instance and accessing it via `riocoffee.in`.

## Prerequisites

- AWS account with EC2 access
- Domain `riocoffee.in` with DNS control (Route 53 or external registrar)
- SSH client (or use AWS Systems Manager Session Manager)

## Step 1: Launch an EC2 Instance

1. Go to [AWS EC2 Console](https://console.aws.amazon.com/ec2/)
2. Click **Launch Instances**
3. Choose **Ubuntu 24.04 LTS** (or Ubuntu 22.04 LTS) - Free Tier eligible
4. Instance type: **t2.micro** (Free Tier) or **t3.small** (for production)
5. **Security Group** rules:
   - SSH (port 22): Allow from your IP or 0.0.0.0/0
   - HTTP (port 80): Allow from 0.0.0.0/0
   - HTTPS (port 443): Allow from 0.0.0.0/0
6. **Storage**: 20 GB (default is fine)
7. **Key Pair**: Create or use an existing key pair (download `.pem` file)
8. Click **Launch**

## Step 2: Connect to EC2 Instance

### Option A: SSH from terminal (Linux/Mac/Git Bash)
```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

### Option B: SSH from Windows PowerShell
```powershell
# Using PuTTY or OpenSSH
ssh -i "C:\path\to\your-key.pem" ubuntu@YOUR_EC2_PUBLIC_IP
```

### Option C: AWS Systems Manager Session Manager (no SSH key needed)
In AWS Console, go to EC2 → Instances → right-click instance → Connect → Session Manager

## Step 3: Update System and Install Node.js

Once connected to the instance:

```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v
```

## Step 4: Clone the Rio Coffee Repository

```bash
# Navigate to home directory
cd ~

# Clone the repo
git clone https://github.com/S1ram/RIo.git rio-coffee
cd rio-coffee

# Install dependencies
npm install
```

## Step 5: Build and Test Locally

```bash
# Build the Next.js app
npm run build

# Start the app on port 3000 (test)
npx next start -p 3000 &

# Wait a few seconds, then test it
curl http://localhost:3000

# Stop the test
kill %1
```

## Step 6: Set Up Systemd Service (Auto-start on reboot)

Create a systemd service file so the app starts automatically:

```bash
sudo nano /etc/systemd/system/rio-coffee.service
```

Paste the following:

```ini
[Unit]
Description=Rio Coffee Next.js Application
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/rio-coffee
ExecStart=/usr/bin/npx next start -p 3000
Restart=always
RestartSec=10
StandardOutput=append:/home/ubuntu/rio-coffee/next.log
StandardError=append:/home/ubuntu/rio-coffee/next.err

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable rio-coffee
sudo systemctl start rio-coffee

# Check status
sudo systemctl status rio-coffee

# View logs
tail -f ~/rio-coffee/next.log
```

## Step 7: Configure AWS Security Group for HTTPS

1. In AWS EC2 Console, go to **Security Groups**
2. Find the security group for your instance
3. Edit **Inbound Rules**:
   - Port 22 (SSH)
   - Port 80 (HTTP)
   - Port 443 (HTTPS)

All should allow traffic from 0.0.0.0/0 for the domain to work.

## Step 8: Update DNS Records (Route 53 or external registrar)

### If using AWS Route 53:
1. Go to [Route 53 Console](https://console.aws.amazon.com/route53/)
2. Find your hosted zone for `riocoffee.in`
3. Create/Update these A records:
   - **Name**: `riocoffee.in` → **Value**: your EC2 instance's **Elastic IP** or **Public IP**
   - **Name**: `www.riocoffee.in` → **Value**: same IP

### If using external registrar (GoDaddy, Namecheap, etc.):
1. Log in to your registrar's DNS panel
2. Create A records pointing to your EC2 **Elastic IP**:
   - `riocoffee.in` → `YOUR_EC2_IP`
   - `www.riocoffee.in` → `YOUR_EC2_IP`

**Important**: Assign an **Elastic IP** to your EC2 instance so the IP doesn't change:
1. EC2 Console → Elastic IPs → Allocate new address
2. Associate it with your instance

## Step 9: Run the Automated Setup Script

Once DNS is updated (may take a few minutes to propagate), run the setup script:

```bash
cd ~/rio-coffee
chmod +x scripts/setup-server.sh
sudo ./scripts/setup-server.sh
```

This will:
- Install and configure Nginx as a reverse proxy
- Obtain a free Let's Encrypt TLS certificate
- Set up HTTPS with auto-renewal
- Open firewall ports 80 and 443

## Step 10: Verify Your Deployment

```bash
# Check if Nginx is running
sudo systemctl status nginx

# Check if the app is running
sudo systemctl status rio-coffee

# Verify port 3000 is listening
netstat -tln | grep 3000

# Test HTTPS
curl -I https://riocoffee.in
```

Open your browser and visit:
- **http://riocoffee.in** (redirects to HTTPS)
- **https://riocoffee.in** (your live site!)
- **https://www.riocoffee.in**

## Step 11: Monitor and Maintain

### View application logs:
```bash
tail -f ~/rio-coffee/next.log
```

### View Nginx logs:
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Check certificate expiration:
```bash
sudo certbot certificates
```

### Renew certificates (auto-renewal runs daily):
```bash
sudo certbot renew
```

### Restart the app:
```bash
sudo systemctl restart rio-coffee
```

### Update the app (pull latest from GitHub):
```bash
cd ~/rio-coffee
git pull origin main
npm install
npm run build
sudo systemctl restart rio-coffee
```

## Estimated Costs (AWS Free Tier)

- **t2.micro EC2 instance**: Free for 12 months (750 hours/month)
- **Elastic IP**: Free if associated with a running instance
- **Data transfer**: 1 GB/month free (outbound)
- **Route 53**: $0.50/month for hosted zone
- **Let's Encrypt TLS**: FREE

**Total for Free Tier first year**: ~$0.50/month (just Route 53)

## Troubleshooting

### "Connection refused" on https://riocoffee.in
- Check DNS propagation: `nslookup riocoffee.in`
- Check security group allows ports 80 and 443
- Check Nginx is running: `sudo systemctl status nginx`
- Check app is running: `sudo systemctl status rio-coffee`

### Certificate not obtained
- Ensure port 80 is open and DNS is propagated
- Check Nginx is listening on port 80: `sudo lsof -i :80`
- Manually get cert: `sudo certbot certonly --nginx -d riocoffee.in -d www.riocoffee.in`

### App not starting
- Check logs: `tail -f ~/rio-coffee/next.log`
- Verify port 3000: `netstat -tln | grep 3000`
- Manually test: `cd ~/rio-coffee && npm run build && npx next start -p 3000`

### Out of disk space
- Check usage: `df -h`
- Clear npm cache: `npm cache clean --force`
- Remove `.next` build cache: `rm -rf ~/rio-coffee/.next`

## Advanced: CI/CD Pipeline (Optional)

To auto-deploy on GitHub push, add a workflow (see GitHub Actions guide in main README).

## Next Steps

1. ✅ Deploy to EC2 using this guide
2. ✅ Test at https://riocoffee.in
3. 📧 Set up email notifications (AWS SNS)
4. 📊 Monitor with CloudWatch
5. 🔄 Set up GitHub Actions for auto-deploy
6. 🛡️ Enable AWS WAF for additional security
