---
title: "Fix ?m=1 Issue in Blogger URLs with Cloudflare - Best SEO-Friendly Solution"
summary: "A guide on fixing Blogger's mobile (m=1) redirects using Cloudflare Workers or URL rewrite rules, with step-by-step server-side implementation."
date: "Feb 23 2025"
draft: false
tags:
- Blogger
---

Are those mobile redirects on your Blogger site driving you crazy? Let me break down what's happening in simple terms.

![Fix ?m=1 Issue in Blogger URLs with Cloudflare](./fix-mobile-url-issues-in-blogger.jpg)

You know how your blog adds that pesky `m=1` to the end of URLs when someone visits from their phone? While Blogger says it's no big deal, it's actually causing some headaches in Google Search Console.

## Table of Contents
- [Fix Mobile URL Issues in Blogger: Complete Guide](#fix-mobile-url-issues-in-blogger-complete-guide)
  - [Understanding the Problem](#understanding-the-problem)
  - [Solutions Available](#solutions-available)
  - [Requirements](#requirements)
  - [Method 1: Using Workers](#method-1-using-workers)
    - [Create Worker in Cloudflare](#create-worker-in-cloudflare)
    - [Routes Setup](#routes-setup)
  - [Conclusion](#conclusion)

## Understanding the Problem

Here's the thing - when Google's mobile bot tries to check out one of your posts, it gets bounced around like a ping-pong ball. First, it hits your normal URL, then gets redirected to the mobile version with `m=1`. This triggers those annoying "Page with redirect" notices you're seeing.

But wait, there's more! That mobile URL then tells Google "**Hey, my real version is actually the regular URL**" through something called a canonical tag. And boom - you get hit with another notice for "**Alternative page with proper canonical tag**".

The good news? Your content still gets indexed just fine when Google's desktop crawler comes along. It skips all this mobile redirect drama and goes straight to your regular URLs.

## Solutions Available

Want to get rid of those pesky `m=1` redirects on your Blogger site? While Blogger doesn't have a built-in fix, I've got two server-side solutions that work better than the usual JavaScript hacks.

1. **Option 1: Cloudflare Workers**
   This is the smarter approach. Set up a Worker to check if your visitor is on mobile or tablet by looking at their User-Agent. If they are, the Worker quietly adds `m=1` to the URL behind the scenes before sending the page. Your visitors get the mobile version without seeing that redirect dance in their address bar.

2. **Option 2: Cloudflare URL Rewrite Rules**
   This works similar to Workers but is simpler to set up. The catch? Since the 'matches' feature isn't available on free Cloudflare plans, we have to use a rougher check - looking for "Mobi" in the **User-Agent**. When found, it automatically adds `m=1` to the URL.

Both methods handle the mobile detection on the server side, which is much cleaner than trying to fix it after the page loads. Just keep in mind you'll need Cloudflare set up on your blog first.

> **Note**: To enable Custom domain proxied to Cloudflare server you need your Custom Domain integrated with Cloudflare through this procedure. The process to do the same for .blogspot subdomain cannot be achieved.

> **Important**: Blogger states their platform does not support Cloudflare Integration as per their records. Performing this process without Custom domain proxied to Cloudflare server could result in unexpected system problems. Technological expertise is necessary for attempting this procedure. The following procedure comes with risks that I cannot accept responsibility for any website downtime or system malfunction. Attempt this step at your discretion.

## Requirements

This is necessary because both the Workers and URL rewrite rules only work when Cloudflare is actively proxying your traffic.

1. Make sure Cloudflare manages your DNS settings
2. Enable the orange cloud (proxy) for your domain in Cloudflare

## Method 1: Using Workers

I've been using this method for years now and it works like a charm. The cool thing about Workers is that if you know your way around them, you can do even more cool stuff - like tweaking the HTML using the `HTMLRewriter API` or playing with response headers.

But heads up before you dive in! 👋

There's something you should know about Cloudflare Workers - they have [Cloudflare Workers Limits](https://developers.cloudflare.com/workers/platform/limits/)[^1]. If you hit these limits, your site might go dark for a bit. Not fun, right? If that happens, you might want to think about upgrading to a paid plan to keep things running smoothly.

[^1]: [Cloudflare Workers Limits](https://developers.cloudflare.com/workers/platform/limits/).

### Create Worker in Cloudflare

Ready to get started? First thing's first - we need to create a Worker in Cloudflare. Think of it as building a little traffic controller that sits between your Blogger blog and your visitors. Let's walk through how to set that up.

1. First, hop into your [Cloudflare account](https://www.cloudflare.com/)
2. Look for "**Workers & Pages**" in your dashboard and click on "**Create application**"
3. Don't worry about the code just yet - just hit "**Deploy**" with the default "*Hello World!*" code
4. Head over to the "Workers" tab and hit "**Create Worker**". Give it a name - let's call it `prevent-m-redirect-blogger`
5. Once it's deployed, click "**Edit code**" and replace the existing code with:

```javascript
/**
 * Environment interface
 * 
 * @typedef Env
 * @property {string} my_var
 */

// constants
const MOBILE_REGEX = /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\ mini|avantgo|mobilesafari|docomo|KAIOS)/i;
const TABLET_REGEX = /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i;

/**
 * A helper function to get the device type from user-agent
 * 
 * @param {string | null} userAgent
 * 
 * @returns {"mobile" | "tablet" | "desktop"}
 */
const getDeviceType = (userAgent) => {
  if (typeof userAgent === "string") {
    if (MOBILE_REGEX.test(userAgent)) {
      return "mobile";
    }

    if (TABLET_REGEX.test(userAgent)) {
      return "tablet";
    }
  }

  // Everything else not matched above will be considered as desktop
  return "desktop";
}

/**
 * An object with workers handlers
 * 
 * @type {ExportedHandler<Env>}
 */
const worker = {
  async fetch(request, env, context) {
    // Get the device type from user-agent header
    const deviceType = getDeviceType(request.headers.get("User-Agent"));

    const proxiedUrl = new URL(request.url);
    // Set the search param 'm' with value '1' if the device type is not 'desktop'
    if (deviceType !== "desktop") {
      proxiedUrl.searchParams.set("m", "1")
    }

    const proxiedRequest = new Request(proxiedUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers,
      redirect: "follow"
    });

    const proxiedResponse = await fetch(proxiedRequest);

    const response = new Response(proxiedResponse.body, proxiedResponse);

    // OPTIONAL: You can further modify the response here :)

    return response;
  }
}

// Export handlers
export default worker;
```

6. Click on Save and Deploy.

### Routes Setup

Alright, now that we've got our Worker set up, we need to tell Cloudflare which URLs it should keep an eye on. It's like giving our Worker its territory to patrol! Here's how:

1. Head back to your Cloudflare dashboard and click on "**Websites**", Find and **click on your domain name**
2. Look for "**Workers Routes**" (this is where the magic happens!), Hit that "**Add Route**" button
3. Now you'll see a form to fill out. Input the fields as shown in the following table:

| Route | Service | Environment |
|-------|---------|------------|
| `www.example.com/*` | `prevent-m-redirect-blogger` | `production` |

> **Note**: Enter the information according to your blog URL as well as your workers name.

## Conclusion

These fixes won't solve all your search errors, but they'll help a lot - especially with those mobile redirect issues. Just be careful when setting things up, particularly with Cloudflare. In the end, you'll have better control over your blog's URLs, which is great for your site's performance.