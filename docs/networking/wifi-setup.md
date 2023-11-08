# Ubuntu Server WIFI Setup and Troubleshooting

## Troubleshooting WiFi Connection

Post-installation, connecting the server to WiFi posed a challenge. Here's a detailed breakdown of the steps and solutions:

1. **Checking Network Interfaces**: The command `ip a` was used to list all network interfaces. The WiFi interface was identified as `wlp0s20f3`.

2. **Configuring Netplan**: We tried to set up WiFi using Netplan. Despite having a correct configuration, the server didn't connect to the WiFi.

3. **Identifying the Problem**: On running `rfkill list`, we found out that the WiFi interface was blocked.

4. **Resolving RF-KILL issue**: The command `rfkill unblock wifi` was used to unblock the WiFi interfaces. This step resolved the issue, and the server successfully connected to the WiFi network.

## Conclusion

Setting up an Ubuntu server requires a mix of preparation, understanding the right tools, and sometimes a bit of troubleshooting. This journey taught us the intricacies of connecting an Ubuntu server to a WiFi network and served as a reminder of the importance of thorough documentation.

---
