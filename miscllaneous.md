
# Miscellaneous Configurations for Ubuntu Server

A collection of assorted configurations and settings to enhance the Ubuntu Server experience. These tricks cover a variety of use-cases to simplify and optimize the way you interact with the server.

:warning: **Note**: Always backup your configuration before making changes.

## Table of Contents

- [1. Preventing Suspension on Lid Close](#1-preventing-suspension-on-lid-close)
- [2. (More Configurations Here)](#2-more-configurations-here)
  
---

## 1. Preventing Suspension on Lid Close

Ensure that the server doesn't suspend or shut down when the laptop lid is closed.

### Using Terminal:

1. Open a terminal.

2. Edit the `logind.conf` file:

   ```bash
   sudo nano /etc/systemd/logind.conf
   ```

3. Locate the line `#HandleLidSwitch=suspend`. Change it to:

   ```
   HandleLidSwitch=ignore
   ```

   If the line doesn't exist, simply add `HandleLidSwitch=ignore` at the end of the file.

4. Save and exit. In nano, it's CTRL+O to save and CTRL+X to exit.

5. Restart the systemd-logind service to apply changes:

   ```bash
   sudo systemctl restart systemd-logind
   ```

## 2. (More Configurations Here)

Place additional configurations and settings in subsequent sections.

---

:pushpin: **Pro Tip**: Monitoring laptop temperatures is crucial, especially when the lid is closed, to prevent overheating.

---

Feel free to expand upon this README as you add more miscellaneous configurations and settings to your server.