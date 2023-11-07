# Switching from Bash to Zsh with Plugins

Welcome to the guide on switching from the default `bash` shell to the feature-rich `zsh` shell, complemented with some fantastic plugins to supercharge your terminal experience!

<p align="center">
  <img src="https://ohmyz.sh/img/OMZLogo_BnW.png" alt="zsh-logo">
</p>

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Setting Up Oh My Zsh](#setting-up-oh-my-zsh)
4. [Adding Plugins](#adding-plugins)
5. [Conclusion](#conclusion)

## Introduction

`zsh`, also known as Z Shell, offers features like improved tab completion, shared command history, and powerful scripting capabilities. Combining `zsh` with the `Oh My Zsh` framework unlocks further enhancements, themes, and plugins to tailor your terminal exactly to your liking.

## Installation

First things first, let's get `zsh` installed.

```bash
sudo apt update
sudo apt install zsh
```

Make `zsh` your default shell:

```bash
chsh -s $(which zsh)
```

Re-open your terminal or restart your session for the changes to take effect.

## Setting Up Oh My Zsh

Time to spice things up with `Oh My Zsh`.

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Adding Plugins

One of the key features of `Oh My Zsh` is the extensive plugins available. Here, we'll guide you through installing the `zsh-autosuggestions` plugin.

### zsh-autosuggestions

This plugin suggests commands as you type based on your history.

Installation:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Enable it by opening your `.zshrc`:

```bash
nano ~/.zshrc
```

And adding `zsh-autosuggestions` to the `plugins` section:

```bash
plugins=(... zsh-autosuggestions)
```

Reload your `.zshrc`:

```bash
source ~/.zshrc
```

Voila! As you start typing in your terminal, you'll see autosuggestions pop up based on your history.

## Conclusion

You've successfully transitioned from `bash` to `zsh` and jazzed up your terminal with `Oh My Zsh` and plugins. Happy coding!
