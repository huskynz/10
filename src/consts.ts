import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "HuskyNZ | Peter",
  DESCRIPTION: "Who am I?.",
  AUTHOR: "Peter Gallwas",
}

export const WORK: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
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
// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  {
    TEXT: "Blog",
    HREF: "/blog", 
  },
  {
    TEXT: "Work",
    HREF: "/work",
  }
]

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
    NAME: "Download CV",
    ICON: "Download", // Ensure you have an appropriate icon
    TEXT: "Download",
    HREF: "https://hnz.li/cv"
  }
]

export const allowedLinks = ['/panel','/w7su','/410340'];