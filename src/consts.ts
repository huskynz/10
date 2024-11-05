import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "HuskyNZ | Peter",
  DESCRIPTION: "Who am I?.",
  AUTHOR: "Peter Gallwas",
}

export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Some projects I have worked on",
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

export const DOWNLOADS: Page = {
  TITLE: "Downloads",
  DESCRIPTION: "Download some sutff from HuskyNZ",
}

export const CONTACT: Page = {
  TITLE: "Contact Me",
  DESCRIPTION: "Contact Me",
}

// Update LINKS constant
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
 // {
   // TEXT: "Contact me",
   // HREF: "/#contact",
   // isHash: true, // Mark as hash-based route
  //}, fix this later when brain is working
  {
    TEXT: "Work",
    HREF: "/work",
  }
];
// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "peter@husky.nz",
    HREF: "mailto:peter@husky.nz",
  },
  {
    NAME: "Main Github",
    ICON: "github",
    TEXT: "HuskyNZ",
    HREF: "https://github.com/HuskyNZ"
  },
  {
    NAME: "Github Personal",
    ICON: "github",
    TEXT: "Husky-Devel",
    HREF: "https://github.com/husky-devel"
  },
  {
    NAME: "Twitch",
    ICON: "twitch",
    TEXT: "huskynzofficial",
    HREF: "https://hnz.li/twitch"
  },
  {
    NAME: "Youtube",
    ICON: "youtube",
    TEXT: "@huskynz",
    HREF: "https://hnz.li/youtube"
  },
  {
    NAME: "Discord",
    ICON: "discord",
    TEXT: "huskynzofficial",
    HREF: "https://discord.com"
  },
  {
    NAME: "Download CV",
    ICON: "Download", // Ensure you have an appropriate icon
    TEXT: "Download",
    HREF: "https://serv.husky.nz/public/peter-cv-v7.pdf"
  }
]

export const allowedLinks = ['/panel','/w7su','/410340'];