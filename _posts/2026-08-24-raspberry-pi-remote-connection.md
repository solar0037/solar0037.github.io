---
layout: post
title: "How to Remotely Connect to a Raspberry Pi: A Few Different Ways"
---

## Remote Connection

While studying Linux with Raspberry Pi, I had to connect remotely to the Pi in some way. Otherwise I would have to use a monitor, a keyboard and a mouse, which would have been cumbersome. So I wanted to share the ways I know so far. Details are not included, so do your own research, please.

### 1. Connect via Local Network

When installing Raspberry Pi OS, type in Wi-Fi credentials (or, connect to an Ethernet port of your router via cable). Now you can access the pi inside your network. Go to the router admin page to figure out your pi's local IP address.

#### 1.1 SSH (CUI)

Learning how to use ssh is a must. The ssh package is included in the OS, so type in the following command in your terminal (Windows: CMD/Powershell, MacOS/Linux: Terminal).

```bash
$ ssh [username]@[ip address]
Password: [type in your password, invisible]
```

#### 1.2 XRDP (GUI)

You can connect to the pi via an XRDP client such as Windows Remote Desktop. To do this, install the `xrdp` package on the pi. Now open Remote Desktop and connect to your pi's IP address. Type in your username and password, and voila!

#### 1.3 VNC (GUI)

Perhaps this method is more popular than RDP, for some reason. First Enable VNC on your pi by using `raspi-config`. Then install a VNC Client of your choice (e.g. RealVNC Viewer). Enter your pi's IP address, username and password to connect. Note: I am trying to find a VNC Client that does not require an account.

### 2. Connect via ICS (Internet Connection Sharing)

You can connect your pi via a LAN cable to your PC, setup ICS, and do all the same as above.

### 3. Connect Outside Your Local Network

To access your pi outside your local network, go to your router admin page and add a DDNS address. This static address will be used instead of your router's IP address, which is dynamic. Install PiVPN, set up WireGuard/OpenVPN both on the pi and your PC. On your router admin page, forward the VPN's port to the same port of your pi's IP address (e.g. WireGuard: forward 51820 to 51820, 192.168.0.xx). After that, you can access via ssh from anywhere, I guess?
