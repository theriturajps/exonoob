---
title: "How to Remove Month and Year from Blogger Post URLs : WordPress-Style Permalinks"
summary: "Learn how to hide Month and Year from Blogger post URLs for a professional look. Boost SEO and create WordPress Style Permalink with this simple trick."
date: "Feb 24 2025"
draft: false
tags:
- Blogger
---

Hello, today I am going to share a small tip on How to hide the Month and Year from the blogger post URL and to make the blogger post URL like [WordPress](https://wordpress.com/).

## Introduction

In this post, we have explained the process of removing Month and Year from a blogger post URL.

However, you want to pay attention until the conclusion for the comprehensive understanding of quick trick. Each time we develop a [blogger](https://www.blogger.com/) post. This will include the Month and Year that the particular publication was published. Here you can see the below screenshot of the Blogger default post URL format.

As compared to default post URL, the [WordPress](https://wordpress.com/) post URL blogger seems to be more professional. Therefore, I do encourage them to all in case they have just started a blog on Blogger. Employ this approach to identify dates that Blogger has included in its URL. This will make a Professional Blogger blog like WordPress, it just hides the dates from parmalink.

A permanent [Blogger](https://www.blogger.com/blog/) link is created automatically, however a user can create it manually as well. But in either case, the date will be there. But with this method you can hide Blogger's Month and Year in each post and even in those posts that are to be published in the future will not be having date.

## Advantages for excluding the date from the Blogger post URL

Two major things that every blogger searches in attempting to tweak up the look of there blog is how do I remove the date from a blogger post URL and how do I remove date from Blogger's website?

First of all, let me mention that here is some pros to remove the date from the blogger post URL.

* Removing the author's blog post date will make your content timeless.
* Use a professional permanent link of the blog post you are writing.
* This will not enable the visitor to know on which date the publication is/are published.
* The most beneficial are the so-called search engine result pages for the top rankings.
* Short blog post url.

Apart from profit, you will have the privilege of extracting the date from the blogger URL.

> [How to Add No Internet Connection Pop-up and Toast Notification to Blogger](https://exonoob.in/blog/no-internet-connection-pop-up-in-blogger/)

## How to Remove Month and Year from Blogger posts parmalink url?

The process itself is not that complicated and if followed step-by-step it will take just a few minutes.

1. **Step 1:-** First go to your [Blogger Dashboard](https://www.blogger.com/) then, from the left panel go to "**Theme/Template**".
2. **Step 2:-** Once you have navigated to the Theme section, click on it and then select "**Edit HTML**".
3. **Step 3:-** Now, look for the `<head>` tag here. Inside the theme edditor, you can also use <kbd>Ctrl + F</kbd> to search for it.
4. **Step 4:-** At last, please paste the code given below after the `<head>` tag and then click on Save Theme.

```javascript
<script type='text/javascript'>  
  //<!CDATA[  
  // BloggerJS v0.3.1  
  // Copyright (c) 2017-2018 Kenny Cruz  
  // Licensed under the MIT License  
  var urlTotal,nextPageToken,postsDatePrefix=!1,accessOnly=!1,useApiV3=!1,apiKey="",blogId="",postsOrPages=["pages","posts"],jsonIndex=1,secondRequest=!0,feedPriority=0,amp="&"[0];function urlVal(){var e=window.location.pathname,t=e.length;return".html"===e.substring(t-5)?0:t>1?1:2}function urlMod(){var e=window.location.pathname;"p"===e.substring(1,2)?(e=(e=e.substring(e.indexOf("/",1)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../"+e)):(e=(e=postsDatePrefix?e.substring(1):e.substring(e.indexOf("/",7)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../../"+e))}function urlSearch(e,t){var n=e+".html";t.forEach(function(e){-1!==e.search(n)&&(window.location=e)})}function urlManager(){var e=urlVal();0===e?accessOnly||urlMod():1===e?getJSON(postsOrPages[feedPriority],1):2===e&&(accessOnly||history.replaceState(null,null,"/"))}function getJSON(e,t){var n=document.createElement("script");if(useApiV3){var o="https://www.googleapis.com/blogger/v3/blogs/"+blogId+"/"+e+"?key="+apiKey+"#maxResults=500#fields=nextPageToken%2Citems(url)#callback=bloggerJSON";nextPageToken&&(o+="#pageToken="+nextPageToken),nextPageToken=void 0}else o=window.location.protocol+"//"+window.location.hostname+"/feeds/"+e+"/default?start-index="+t+"#max-results=150#orderby=published#alt=json-in-script#callback=bloggerJSON";o=o.replace(/#/g,amp),n.type="text/javascript",n.src=o,document.getElementsByTagName("head")[0].appendChild(n)}function bloggerJSON(e){var t=[];if(useApiV3||void 0===urlTotal&&(urlTotal=parseInt(e.feed.openSearch$totalResults.$t)),useApiV3){try{e.items.forEach(function(e,n){t.push(e.url)})}catch(e){}nextPageToken=e.nextPageToken}else try{e.feed.entry.forEach(function(n,o){var r=e.feed.entry[o];r.link.forEach(function(e,n){"alternate"===r.link[n].rel&&t.push(r.link[n].href)})})}catch(e){}urlSearch(window.location.pathname,t),urlTotal>150?(jsonIndex+=150,urlTotal-=150,getJSON(postsOrPages[feedPriority],jsonIndex)):nextPageToken?getJSON(postsOrPages[feedPriority]):secondRequest&&(nextPageToken=void 0,urlTotal=void 0,jsonIndex=1,secondRequest=!1,0===feedPriority?(feedPriority=1,getJSON("posts",1)):1===feedPriority&&(feedPriority=0,getJSON("pages",1)))}function bloggerJS(e){e&&(feedPriority=e),urlManager()}bloggerJS();  
  //]]>  
</script>
```

Now you've gone and done it.

Thank You