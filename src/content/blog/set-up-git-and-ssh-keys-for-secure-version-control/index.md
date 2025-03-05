---
title: "Set Up Git and SSH Keys for Secure Version Control: A Step-by-Step Guide"
summary: "Learn to configure Git and generate SSH keys securely. Follow our step-by-step guide for efficient version control setup."
date: "Feb 23 2025"
draft: false
tags:
- Github
- SSH
---

Hey! So you need to set up Git and SSH keys? No worries - I've done this about a million times (okay, maybe not a million, but you get the idea). This guide is basically what I wish someone had shown me when I was banging my head against the wall trying to figure this stuff out at my first dev job.

## First Up: Git Basics

Before we dive into the fancy SSH stuff, let's get Git working. You'll need to tell Git who you are - trust me, this saves a ton of headaches later when you're trying to figure out who wrote what code at 2 AM before a deadline:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

Double-check it worked (because I always forget if I actually did it):

```bash
git config --list
```

Should spit out something like:

```
user.name=Your Name
user.email=you@email.com
```

### Quick Side Note:

1. Yeah, use your actual name - I made the mistake of using "CodingNinja" once and my team still makes fun of me
2. The email should match your GitHub/GitLab - learned this one the hard way when none of my commits were linking properly

> [How to Setup a Project and Send Email in Node.js Using Nodemailer & Gmail](https://exonoob.in/blog/setup-project-send-email-in-nodejs-using-nodemailer-and-gmail/)

## Now the SSH Key Part

Okay, this is where people usually get stuck. SSH keys are actually pretty simple - it's like having a super-secret handshake with your Git server. Here's what you type (I usually keep this command in a note somewhere because who can remember it?):

```bash
ssh-keygen -t rsa -b 4096 -C "you@email.com"
```

1. **Where to save it:** Just hit Enter - the default spot works fine. I tried being clever with a custom location once and completely lost track of my keys
2. **Passphrase:** Use something you'll remember! I once used a "super secure" random string and had to regenerate my keys two days later because I forgot it

After a few seconds (and maybe a cool ASCII art randomization pattern), you'll see:

```
Your identification has been saved in ~/.ssh/id_rsa
Your public key has been saved in ~/.ssh/id_rsa.pub
```

### What Just Happened:

1. `id_rsa`: This is your secret key - seriously, keep it secret. I had a colleague accidentally paste it into Slack once... that was a fun day of regenerating everything
2. `id_rsa.pub`: This is the one you can share - kind of like your public phone number

## The SSH Agent Thing

This part's actually pretty cool - the SSH agent remembers your keys so you don't have to type that passphrase every 5 minutes (which would drive anyone crazy). Here's what you do:

```bash
eval "$(ssh-agent -s)"  # Gets things running
ssh-add ~/.ssh/id_rsa    # Hands over your key
```

If it worked, you'll see something like:

```
Agent pid 12345
Identity added: /home/you/.ssh/id_rsa (you@email.com)
```

### Why Bother:

1. Because typing your passphrase 50 times a day is nobody's idea of fun
2. Makes life way easier when you're jumping between different repos all day

## Last Bit: Setting Up Your Public Key

Almost done! Now you need to grab that public key to paste into GitHub/GitLab. This command is easy to remember (finally!):

```bash
cat ~/.ssh/id_rsa.pub
```

You'll get a wall of text like:

```
ssh-rsa AAAAB3...there's going to be a lot of random stuff here...== you@email.com
```

> [How to Use SSH Safely in Bali’s Co-Working Spaces: A Digital Nomad’s Guide](https://exonoob.in/blog/use-ssh-safely-in-balis-coworking-spaces)

### What To Do:

1. Copy ALL of it - I've messed this up by accidentally missing the last few characters more times than I'd like to admit
2. Dump it into GitHub/GitLab's SSH key section in your settings. Can never remember where this is? Same - it's under **Settings** ➤ **SSH Keys** (I always have to click around to find it)

## Common Issues and Tips

### Stuff I Learned the Hard Way

1. **That Private Key:** Just don't share it. Ever. I know someone who did and ended up spending a whole weekend fixing the fallout
2. **Passphrase Tips:** Use something you'll actually remember - there's a sweet spot between "password123" and "quantum cryptography"
3. **New Keys:** I usually make new ones when switching jobs or if I get that paranoid feeling that I might have leaked something

### When Things Go Wrong (Because They Will)

1. **Permission Errors:** Run `chmod 700 ~/.ssh` and `chmod 600` on your keys. Had this issue on every single Linux install I've ever done
2. **Agent Being Weird:** The good old `eval $(ssh-agent -s)` usually fixes it. It's basically the "turn it off and on again" of SSH
3. **Key Not Working:** 99% of the time you either missed part of the key while copying or GitHub/GitLab is having a moment - give it a few minutes

## That's It!

You're all set! I've probably set this up hundreds of times now (across various jobs, broken laptops, and that one time I accidentally wiped my entire dev environment... don't ask). The whole process gets pretty smooth once you've done it a few times. If you're feeling ambitious, you might want to check out some SSH key management tools, but honestly? This basic setup has never let me down.

> **Pro Tip:** Bookmark this somewhere - trust me, in 6 months when you get a new laptop, you'll thank yourself. I keep all this stuff in a personal wiki along with other "things I always forget but really shouldn't."