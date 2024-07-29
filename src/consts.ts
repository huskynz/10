import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "HuskyNZ | Peter",
  DESCRIPTION: "Who am I?.",
  AUTHOR: "Peter Gallwas",
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
    NAME: "Linkedin",
    ICON: "linkedin",
    TEXT: "Peter Gallwas",
    HREF: "https://www.linkedin.com/in/peter-gallwas/"

  }
]

