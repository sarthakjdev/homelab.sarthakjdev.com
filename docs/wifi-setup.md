
# Ubuntu Server Setup and Troubleshooting

## Table of Contents
1. [Introduction](#introduction)
2. [Choosing the Right Ubuntu Distribution](#choosing-the-right-ubuntu-distribution)
3. [Creating a Bootable USB with Ubuntu Server](#creating-a-bootable-usb-with-ubuntu-server)
4. [Installation of Ubuntu Server](#installation-of-ubuntu-server)
5. [Troubleshooting WiFi Connection](#troubleshooting-wifi-connection)
6. [Conclusion](#conclusion)

## Introduction
This document outlines the steps and challenges faced during the setup of an Ubuntu server on a laptop and how we overcame those challenges.

## Choosing the Right Ubuntu Distribution
For the purposes of setting up a home server, we opted for the Ubuntu Server LTS edition. LTS stands for Long Term Support, ensuring that this version will receive updates for a more extended period.

## Creating a Bootable USB with Ubuntu Server
We used Rufus, a free, open-source tool, to burn the Ubuntu Server ISO onto a USB drive. This turned the USB drive into a bootable medium from which we could install Ubuntu Server.

## Installation of Ubuntu Server
The installation process for Ubuntu Server is straightforward:
1. Insert the bootable USB drive into the laptop.
2. Boot the laptop from the USB drive.
3. Follow the on-screen prompts to install Ubuntu Server.

## Troubleshooting WiFi Connection
Post-installation, connecting the server to WiFi posed a challenge. Here's a detailed breakdown of the steps and solutions:

1. **Checking Network Interfaces**: The command `ip a` was used to list all network interfaces. The WiFi interface was identified as `wlp0s20f3`.

2. **Configuring Netplan**: We tried to set up WiFi using Netplan. Despite having a correct configuration, the server didn't connect to the WiFi.

3. **Identifying the Problem**: On running `rfkill list`, we found out that the WiFi interface was blocked.

4. **Resolving RF-KILL issue**: The command `rfkill unblock wifi` was used to unblock the WiFi interfaces. This step resolved the issue, and the server successfully connected to the WiFi network.

## Conclusion
Setting up an Ubuntu server requires a mix of preparation, understanding the right tools, and sometimes a bit of troubleshooting. This journey taught us the intricacies of connecting an Ubuntu server to a WiFi network and served as a reminder of the importance of thorough documentation.

---
