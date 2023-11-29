# Home Server and Local DNS Configuration Guide

## Router Configuration for Local DNS Querying

<!-- ! TODO: explain the two ways of exposing traffic to internet here -->

To ensure that your local network queries your home server's DNS before any other external DNS services, you need to adjust your router's settings. This guide will walk you through the necessary steps.

### Exposing the Home Server to the Internet


There are two ways we can expose our home server to the internet:

1. **Via Port Forwarding**

2. **Cloudflare tunnel**

The more secure way is using a cloudflare tunnel service to expose the service running on the home server to the internet without actually exposing the exact ports. So I chose to go with it, you can visit [this](/networking/cloudflare-tunnel.md) section to check out how I configured cloud flare tunnel to expose the services to internet. Rest still there are few setting to be configured for your home network passing through your LAN router to register the home server machine to be the primary DNS resolver.

#### Assigning a Static IP Address to the Home Server

We do this step to because whenever you server goes on and off it should always gets the same local IP, otherwise it will create an overhead of changing hardcoded IP addresses in all the service or configuration files every time a new IP gets assigned to this server.

1. **Log into your router:** Access the router's admin panel by entering its IP address into a web browser. You'll need administrator credentials to log in.
2. **Navigate to LAN settings:** Look for the section labeled "LAN" or "Local Network."

3. **Reserve a static IP:** Find the option to reserve IP addresses and enter the MAC address of your home server along with the IP address you wish to assign to it. This ensures the server retains the same IP address within the local network.

### Changing Primary DNS for Local Network to Home Server

1. **Locate DNS settings:** Within your router's settings, find the section for "DNS" or "DHCP."

2. **Set primary DNS to your server's IP:** Enter the static IP address of your home server as the primary DNS. This will route all DNS requests to your home server first.

3. **Apply changes:** Save your settings and restart your router if necessary to ensure the changes take effect.

By following these steps, your local network devices will attempt to resolve domain names using your home server's DNS service first. If the home server's DNS does not know the address, it should forward the request to a secondary DNS, typically provided by your ISP or another public DNS service like Google's 8.8.8.8. Visit [this](./local-dns.md) section.

Ensure that your home server's DNS service is configured to handle local domain names and forward external queries to a public DNS resolver. This configuration enables devices on your network to access both local services and the internet seamlessly.
