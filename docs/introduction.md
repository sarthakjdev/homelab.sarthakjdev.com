
---

# Status:

:warning: Work in progress

# Home Server Setup: An SRE/DevOps Journey



<p align="center">
  <img src="https://media.discordapp.net/attachments/1167763653970374696/1167763742587637770/DALLE_2023-10-28_15.24.24_-_Illustration_of_a_stylized_Linux_penguin_Tux_holding_a_wrench_and_wearing_a_hard_hat_standing_next_to_a_laptop_that_has_server_racks_and_network_ca.png?ex=654f4fbc&is=653cdabc&hm=04f19bfa9f571ee16f13845e427bc294bc3474519c9f8b0752abb57d2e7971d2&=&width=2150&height=1228" alt="Serve-Setup-Banner-Image">
</p>

This repository documents the steps I took to convert an old Windows laptop into a Linux home server, and the decisions behind every step. This endeavor showcases my skills in Linux server administration and is designed to highlight my capabilities for roles in SRE and DevOps.

:warning: **Note**: The following outlines our execution plan. Documentation will be updated concurrently as we complete each step.

## Table of Contents
- [Introduction](#introduction)
- [Hardware Specifications](#hardware-specifications)
- [OS Installation](#os-installation)
- [SSH Configuration](#ssh-configuration)
- [Firewall and VPN](#firewall-and-vpn)
- [File Server Setup](#file-server-setup)
- [Cloudflare for SSH](#cloudflare-for-ssh)
- [DNS Configuration](#dns-configuration)
- [Monitoring with Grafana and Prometheus](#monitoring-with-grafana-and-prometheus)
- [Backup Mechanisms](#backup-mechanisms)
- [Conclusion and Reflections](#conclusion-and-reflections)

## Introduction
Brief about why you started this project.

## Hardware Specifications
- **Laptop Model**: Lenovo Ideapad slim i5
- **Processor**: Intel i5 Iris
- **RAM**: 8GB DDR4
- **Storage**: 1TB HDD, 256GB SSD

## OS Installation
Details about why you chose Ubuntu LTS, how you installed it, and any initial configurations.

## SSH Configuration
Steps to enable SSH, security measures like key authentication, and disabling password authentication.

## Firewall and VPN
How you locked down the server for security using `ufw` and ensured it can only be accessed via your private VPN.

## File Server Setup
Explanation about why and how you set up a file server using tools (for example, `Samba` or `Nextcloud`). 

## Cloudflare for SSH
Discuss why you chose to use Cloudflare for an additional layer of SSH security.

## DNS Configuration
Details on how you mapped `server.sarthakjdev.com` to your laptop's IP.

## Monitoring with Grafana and Prometheus
Steps and reasons for setting up Grafana and Prometheus for monitoring cloud services.

## Backup Mechanisms
Details on your local and remote backup strategies and how they ensure data resilience.


---
