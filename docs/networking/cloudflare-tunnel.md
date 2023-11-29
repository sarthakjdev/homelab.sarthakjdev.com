# Exposing My Home Server to the Outer Network Using Cloudflare Tunnel

## Introduction

I embarked on a project to expose my home server services, such as Nginx, Jellyfin, and Nextcloud, to the internet while maintaining security and control. To achieve this, I decided to use Cloudflare Tunnel, which offered a safer alternative to traditional port forwarding. This documentation outlines my journey, the challenges I faced, and how I overcame them.

## Setting Up Cloudflare Tunnel

### Step 1: Docker Swarm Stack for Cloudflare Tunnel

I started by setting up Cloudflare Tunnel within a Docker Swarm environment. This approach allowed me to manage the tunnel as part of my existing containerized infrastructure.

#### Docker Compose for Cloudflare Tunnel

```yaml
version: "3.8"

services:
  cloudflared:
    image: cloudflare/cloudflared
    secrets:
      - CF_TUNNEL_TOKEN
    command: tunnel --credentials-file /run/secrets/CF_TUNNEL_TOKEN run home-server-tunnel
    volumes:
      - /home/sarthakjdev/.cloudflared/cert.pem:/home/nonroot/.cloudflared/cert.pem:rw
      - ./config.yaml:/home/nonroot/.cloudflared/config.yaml:rw
      - /home/sarthakjdev/.cloudflared/home-server-tunnel.json:/home/nonroot/.cloudflared/home-server-tunnel.json:rw
    deploy:
      replicas: 2
    networks:
      - home_server_internal_network
    environment:
      - TUNNEL_ORIGIN_CERT=~/.cloudflared/cert.pem
    extra_hosts:
      - host.docker.internal:host-gateway

secrets:
  CF_TUNNEL_TOKEN:
    external: true

networks:
  home_server_internal_network:
    external: true
```

### Step 2: Acquiring Origin Certificate

For securing the tunnel, I needed an origin certificate from Cloudflare. Initially, I considered installing `cloudflared` on the host machine but opted for a completely containerized setup. This decision posed a challenge: generating and retrieving the origin certificate directly within the container.

### Step 3: Configuring the Tunnel

My primary goal was to expose the Nginx service, which proxies my Jellyfin and Nextcloud services, and to enable SSH access to the server. I configured the `cloudflared` tunnel to route traffic to these services.

#### Cloudflare Tunnel Configuration

I created a `config.yml` file within the `cloudflared` volume directory:

```yaml
tunnel: <TUNNEL_ID>
credentials-file: ~/.cloudflared/home-server-tunnel.json

ingress:
  - hostname: cloud.example.com
    service: http://home_web_server_stack_nginx:80
    originRequest:
      connectTimeout: 10s
      noTLSVerify: true

  - hostname: cinema.example.com
    service: http://home_web_server_stack_nginx:80
    originRequest:
      connectTimeout: 10s
      noTLSVerify: true

  - hostname: server.example.com
    service: ssh://host.docker.internal:22

  # Fallback rule
  - service: http_status:404
```

### Step 4: DNS Configuration

I set up DNS records in Cloudflare to point `cloud.example.com`, `cinema.sarthakjdev.com` and `server.example.com` to my tunnel endpoint.

## Challenges and Solutions

### SSL/TLS Termination Issue

#### Challenge

I encountered an issue with SSL/TLS termination. Initially, I tried to configure HTTPS between Cloudflare Tunnel and my Nginx server. However, the origin certificate generated wasn't valid for the internal Docker domain, leading to errors.

#### Solution

I opted to use HTTP for traffic between Cloudflare Tunnel and Nginx. While less secure than HTTPS, my setup was primarily within a trusted internal network, reducing the risk. For external traffic, Cloudflare's edge would still provide SSL/TLS encryption.

### Origin Certificate Generation

#### Challenge

Generating an origin certificate within a containerized environment without using the host machine's `cloudflared` installation was tricky.

#### Solution

I utilized a temporary container to execute the `cloudflared` login and generate the required certificates. This approach kept my setup entirely containerized.

## Conclusion

Setting up Cloudflare Tunnel for my home server was a challenging but rewarding experience. It involved configuring Docker Swarm, understanding Cloudflare's tunneling mechanism, and addressing SSL/TLS termination issues. This setup now securely exposes my home server services to the internet while maintaining control over the network traffic.

This documentation reflects my personal experience and solutions in setting up Cloudflare Tunnel for my home server. The process was insightful, enhancing my understanding of network security, containerization, and Cloudflare's services.

More in depth explanation of TLS [here](https://docs.sarthakjdev.com/networking/tls)
