# Define the project images
$projectImages = @{
    "Work Experience at Inde" = "https://serv.husky.nz/peter-port/200813-0073.webp"
    "Develop a Digital Media Outcome" = "https://serv.husky.nz/peter-port/Screenshot_20231108_101413.png"
    "Spectrum's Website" = "https://serv.husky.nz/peter-port/Spectrum-website.png"
    "Yoobee Cyber Security Micro-credential" = "https://serv.husky.nz/peter-port/yoobe.png"
    "Rolleston College Film Club" = "https://serv.husky.nz/peter-port/Screenshot_20231020_153230.png"
    "HuskyNZ Weather" = "https://serv.husky.nz/peter-port/Screenshot_20231020_153931.png"
    "HuskyNZ's Gen6 Website" = "https://serv.husky.nz/peter-port/Screenshot_20231020_185537.png"
}

# Define the projects data
$projectsData = @(
    @{
        title = "Work Experience at Inde"
        summary = "I did 5 weeks of work experience with Inde, every week I was with a different team learning all aspects of the business."
        date = "Jul 28 2024"
        tags = @("Year 2023", "Azure", "Microsoft")
        link = "https://inde.nz"
    },
    @{
        title = "Develop a Digital Media Outcome"
        summary = "This is one of the best pieces of work I have done in Year 11."
        date = "Jul 28 2024"
        tags = @("Year 2023", "Web Flow")
        link = "https://huskynz-my.sharepoint.com/:w:/g/personal/peter_husky_nz/EZbs4uc5tRhKvlEcg0QsVQoBjYfiTc0paqqb1F451mHzDw?e=vmRii7"
    },
    @{
        title = "Spectrum's Website"
        summary = "This is a very fun project to watch grow and I had the fun task of building the Website and running it on Cloudflare. I also help with a lot of backend stuff."
        date = "Jul 28 2024"
        tags = @("Astro", "JSX", "Cloudflare")
        link = "https://spectrum.liamsherwin.tech"
    },
    @{
        title = "Yoobee Cyber Security Micro-credential"
        summary = "I learnt a lot from this course."
        date = "Jul 28 2024"
        tags = @("Year 2023", "Basic compute", "Kali Linux")
        link = "https://landing.husky.nz"
    },
    @{
        title = "Rolleston College Film Club"
        summary = "I worked with two other developers on building a website for our film club to help people get to know who we are."
        date = "Jul 28 2024"
        tags = @("Year 2023", "Astro", "Tailwind", "CSS")
        link = "https://filmclub.tech"
    },
    @{
        title = "HuskyNZ Weather"
        summary = "For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon."
        date = "Jul 28 2024"
        tags = @("Year 2023", "Flask", "Python", "Azure")
        link = "https://landing.husky.nz"
    },
    @{
        title = "HuskyNZ's Gen6 Website"
        summary = "While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's Gen6."
        date = "Jul 28 2024"
        tags = @("Year 2022-2023", "Azure app service")
        link = "https://landing.husky.nz"
    }
)

# Create a folder and index.md for each project
foreach ($project in $projectsData) {
    # Replace any invalid characters in folder names
    $safeTitle = $project.title -replace '[<>:"/\\|?*]', ''
    # Create the folder
    $folderPath = ".\Projects\$safeTitle"
    New-Item -Path $folderPath -ItemType Directory -Force

    # Create the content for the index.md file
    $tagsContent = $project.tags | ForEach-Object { "- $_" } | Out-String
    $imageUrl = $projectImages[$project.title]
    $indexContent = @"
---
title: "$($project.title)"
summary: "$($project.summary)"
date: "$($project.date)"
draft: false
tags:
$tagsContent
---

[Learn more]($($project.link))

![Project Image]($imageUrl)
"@

    # Create the index.md file
    $indexFilePath = "$folderPath\index.md"
    $indexContent | Out-File -FilePath $indexFilePath -Encoding utf8
}
