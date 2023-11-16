### Setting up a local dns server

# Setting Up a Local DNS Server on Your Home Server

This guide will walk you through the process of setting up a local DNS (Domain Name System) server on your home server to resolve domain names for devices on your local network. With a local DNS server, you can easily manage and resolve domain names within your home network.

## Step 1: Setup a docker-swarm template using docker compose file as follow:

DNSMasq is a lightweight DNS forwarder and DHCP server that is well-suited for setting up a local DNS server. We'll use a Docker container running DNSMasq to set up our local DNS server.

```bash
version: "3.8"

services:
  dns:
    image: andyshinn/dnsmasq:2.83
    volumes:
      - ./dnsmasq.conf:/etc/dnsmasq.conf
    ports:
      - 53:53/tcp
      - 53:53/udp
    networks:
      - home_server_internal_network

networks:
  home_server_internal_network:
    external: true
```

## Step 2: Configure DNSMasq

### 2.1. Create a Configuration File

Create a configuration file for DNSMasq in `/etc/dnsmasq.conf` or `/etc/dnsmasq.d/local-dns.conf`. Use your preferred text editor to create the file:

```bash
sudo nano dnsmasq.d
```

### 2.2. Configure DNSMasq

Edit the configuration file and add the following settings:

```plaintext
# Log queries
log-queries
log-dhcp

cache-size=0

# Don't forward short names
domain-needed
# Never forward addresses in the non-routed address spaces
bogus-priv

# fallback DNS server, extracted from router config
server=ROUTER_DNS_IP_ADDRESS

# Assign domains to local addresses
address=/example.com/192.168.1.100
```

- Replace `ROUTER_DNS_IP_ADDRESS` with the IP address of your router primary DNS.

- Add more `address` lines for each domain you want to resolve locally. Replace `example.com` with the domain name and `192.168.1.100` with the corresponding local IP address of the device.

### 2.3. Save and Exit

Save the configuration file and exit your text editor.

## Step 3: Configure Network Settings

### 3.1. Disable systemd-resolved (Optional)

If you encounter conflicts with `systemd-resolved`, you may want to disable it:

```bash
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved
```

### 3.2. Edit `/etc/resolv.conf`

Edit the `/etc/resolv.conf` file to point to your DNSMasq instance:

```bash
sudo nano /etc/resolv.conf
```

Replace any existing nameserver entries with the following line:

```plaintext
nameserver 127.0.0.1
```

### 3.3. Save and Exit

Save the changes and exit your text editor.

## Step 5: Test DNS Resolution

To test your local DNS server, try resolving a domain name from a client device on your local network. For example:

```bash
nslookup example.com
```

Replace `example.com` with one of the domains you configured in DNSMasq. If everything is set up correctly, the DNS resolution should return the corresponding local IP address.

## Conclusion

We've successfully set up a local DNS server on your home server, allowing you to resolve custom domain names within your local network. You can add more domains and IP mappings to the DNSMasq configuration file as needed.

Feel free to customize your local DNS server further to suit your specific requirements. Enjoy seamless domain name resolution within your home network!
