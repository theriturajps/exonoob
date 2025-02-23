import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Exo Noob's Blog",
  DESCRIPTION: "Welcome to Exo Noob's Blog, a portfolio and blog for #techie, #developers and #students.",
  AUTHOR: 'Ritu Raj',
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'Click to Mail',
    HREF: 'mailto:iamriturajps@gmail.com',
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: '@theriturajps',
    HREF: 'https://github.com/theriturajps',
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: '@iamriturajps',
    HREF: 'https://www.linkedin.com/in/iamriturajps/',
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: '@riturajps',
    HREF: 'https://twitter.com/riturajps',
  },
]

