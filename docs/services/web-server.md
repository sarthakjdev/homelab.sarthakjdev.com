# Nginx Web Server Setup for Home Server

## Introduction

In my journey of setting up a versatile and robust home server, configuring Nginx as a reverse proxy played a crucial role. This documentation outlines the steps I followed to set up Nginx, enabling it to serve multiple applications securely and efficiently.

## Objectives

- **Configure Nginx as a reverse proxy:** Route incoming internet traffic to appropriate services hosted on the server.
- **Implement SSL/TLS:** Ensure encrypted connections for secure data transfer.
- **Optimize for performance and security:** Apply best practices for a fast and secure web server.

## Prerequisites

- A home server running Docker Swarm for service orchestration.
- Domain names pointing to the server's public IP address.
- Cloudflare account for DNS management and additional security features.

## Step-by-Step Guide

### 1. Installing Nginx

Nginx was set up within a Docker container to ensure isolation and ease of management. Here’s how I did it:

1. **Create a Docker Compose file:** Defined an Nginx service in a `docker-compose.yml` file, ensuring it's part of the same network as other services.

```yaml
version: "3.8"

services:
  nginx:
    image: nginx:stable
    ports:
      - 80:80
    volumes:
      - ./conf.d:/etc/nginx/conf.d
      - ./nginx.conf:/etc/nginx/nginx.conf
      - nextcloud_data:/var/www/html
      - ./ssl:/etc/nginx/ssl:ro
    networks:
      - home_server_internal_network

volumes:
  nextcloud_data:
    external: true

networks:
  home_server_internal_network:
    external: true
```

2. **Build and start the Nginx container:** Used Docker Compose to build and start the Nginx service.

   ```bash
   docker-compose up -d
   ```

### 2. Configuring Nginx as a Reverse Proxy

1. **Create a configuration file:** Defined server blocks for each service to route traffic based on the requested domain.

   ```nginx
   server {
     listen 80;
     server_name cloud.example.com;

     location / {
       proxy_pass http://cloud_service;
       proxy_set_header Host $host;
       ...
     }
   }
   ```

2. **Reload Nginx:** Applied the new configuration without downtime.

   ```bash
   docker exec -it nginx_container nginx -s reload
   ```

### 3. Setting Up SSL with Cloudflare

1. **Generate SSL certificates:** Used Cloudflare to create SSL certificates for each domain.

2. **Configure SSL in Nginx:** Modified the Nginx configuration to include SSL settings.

   ```nginx
   server {
     listen 443 ssl;
     server_name cloud.example.com;

     ssl_certificate /path/to/certificate.pem;
     ssl_certificate_key /path/to/private/key.pem;

     ...
   }
   ```

NOTE: I skipped this step as I decided to go ahead with tls termination at cloudflare edge only, I took this decision because the service were running on the same host as cloudflared is hosted on, and in the same docker overlay network. You should not skip this step if you do not have secured and trusted environment for the data transfer.

### 4. Performance and Security Optimization

1. **Caching:** Enabled caching in Nginx for static assets.
2. **Security headers:** Added security headers like `X-Frame-Options`, `X-XSS-Protection`, etc.
3. **Rate limiting:** Implemented rate limiting to prevent abuse.

### 5. Monitoring and Maintenance

- Regularly checked Nginx logs for any unusual activity.
- Updated Nginx and Docker images to their latest versions for security patches and new features.

## Conclusion

Setting up Nginx as a reverse proxy on my home server was a fundamental step in ensuring efficient traffic management and security. It not only facilitated smooth access to various services hosted on the server but also provided a robust layer of security with SSL/TLS encryption.
