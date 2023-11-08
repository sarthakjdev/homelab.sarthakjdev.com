# SSH and Firewall Configuration on My Ubuntu Server

In this documentation, I outline the steps I took to enable SSH (Secure Shell) access and set up basic firewall rules on my Ubuntu server. This setup was crucial for ensuring secure and remote administration of the server.

## Enabling SSH

SSH is a protocol for securely accessing network services over an unsecured network. Here’s how I set it up:

### Installation

First, I ensured the `openssh-server` was installed:

```sh
sudo apt update
sudo apt install openssh-server
```

### Service Activation

Then, I started and enabled the SSH service:

```sh
sudo systemctl start ssh
sudo systemctl enable ssh
```

### Status Verification

I checked the SSH service status to confirm it was running properly:

```sh
sudo systemctl status ssh
```

## Configuring UFW Firewall

For managing the server's security, I used UFW (Uncomplicated Firewall) to handle the iptables firewall settings.

### Initial Setup

I enabled UFW using:

```sh
sudo ufw enable
```

### Setting Default Rules

To protect my server, I set the default policy to deny all incoming connections and allow all outgoing:

```sh
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

### SSH Access Rule

It was important to ensure my own remote access via SSH, so I allowed SSH connections:

```sh
sudo ufw allow ssh
```

Or specifically through port 22:

```sh
sudo ufw allow 22/tcp
```

### Additional Service Rules

As part of my project requirements, I needed to open ports for specific services like HTTP/HTTPS:

```sh
sudo ufw allow http
sudo ufw allow https
```

### Monitoring UFW Status

Regular checks were necessary to keep track of active rules and ensure no unauthorized changes occurred:

```sh
sudo ufw status verbose
```

## Reflection

Enabling SSH and configuring the firewall were critical steps in my server setup process. This provided a secure foundation for running additional services and administering the server remotely. I'm planning to refine these settings as I add more services and functionalities to my server.

---

Feel free to adjust this template to better match your specific steps, preferences, or additional configurations.

