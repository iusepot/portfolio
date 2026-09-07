import './style.css'

const data = {
  name: 'Noah Hardings',
  tagline: 'Software and Infrastructure engineer',
  intro:
    'Hello, I\'m Noah, a software engineer and system administrator. I have experience with building AIO minecraft cores, Discord bots, and I also like doing system administration. I\'m currently working on a few open-source projects, and I\'m always looking for new opportunities to learn and grow.',
  links: [
    { label: 'github', href: 'https://github.com/iusepot' },
    { label: 'bio', href: 'https://e-z.bio/kotlin' },
    { label: 'discord', copy: 'noah.kt', title: 'noah.kt — click to copy' },
    { label: 'telegram', href: 'https://t.me/noahdotkt'},
    { label: 'namemc', href: 'https://namemc.com/profile/noahcodes'}
  ],

  skills: [
    {
      title: 'Discord Bot Development',
      body: 'I like to utilize JDA when It comes to bot development, I believe that I\'m very qualified and experienced when it comes to the JDA ecosystem, and I can do pretty much anything with it.',
    },
    {
      title: 'Kotlin & Java Development',
      body: 'I use both, Kotlin and Java daily. Whether it\'s me maintaing a project, such as Alchemist, fixing bugs for a client, or just doing some personal projects, I\'m very comfortable with both languages.',
    },
    {
      title: 'System Administration',
      body: 'I\'ve been maintaing Linux servers for a while now, and I\'ve learned a lot about how to keep servers running smoothly. I\'m able to do essentially anything, whether that\'s pterodactyl installs, server monitoring tools, automated backups, etc.',
    },
  ],

  projects: [
    {
      name: 'Alchemist',
      href: 'https://github.com/iusepot/Alchemist',
      role: 'Maintainer',
      body: 'Alchemist is a fast, cross-version Minecraft server rank/permissions core (ranks, punishments, friends, parties, staff utils, and webhooks); Built with Kotlin on the Paper API, using MongoDB / MySQL and Redis to sync data across multiple servers. It is designed to be easy to use, while also being powerful and flexible.',
    },
    {
      name: 'Staff Core',
      role: 'Developer',
      body: 'A Minecraft staff moderation plugin built with Kotlin on the Paper API, using MySQL and Redis to sync bans, mutes, chat controls, and vanish across multiple servers.',
    },
    {
      name: 'Honey',
      role: 'Developer',
      body: 'Honey is a small Kotlin library that saves and loads your data from MongoDB, Redis, or files using the same simple code, so you can swap databases without rewriting anything, and it can sync data live across servers.'
    },
    {
      name: 'Skeleton',
      role: 'Developer',
      href: 'https://github.com/Matrix-Studios-Software/skeleton',
      body: 'Skeleton is an extensive easy-to-use framework that supports creating, destroying, and managing containers using the Docker framework. It is designed to be simple and easy to use, while also being powerful and flexible.'
    },
    {
      name: 'Portfolio',
      href: 'https://github.com/iusepot/portfolio',
      role: 'Developer',
      body: 'Nothing much to say here, built on NodeJS, simple site that allows me to showcase my projects, reviews, and general information.'
    },
    {
      name: 'Towny Bot',
      href: 'https://github.com/iusepot/towny-bot',
      role: 'Developer',
      body: 'Towny Bot is a minecraft paper plugin that hooks into the Towny API, and allows you to pull information about nations, towns, and residents to discord, it also hooks into the Towny Resources API to view the resources of a town.'
    },
    {
      name: 'FRC Team Website',
      role: 'Developer',
      body: 'I created a website for my high school\'s FRC team, it\'s a simple and easy to use website that allows you to view the team\'s information, and it also has a blog that allows you to view the team\'s updates.'
    },
    {
      name: 'Iustitia',
      role: 'Contributor',
      body: 'Iustitia is a fabric client-sided anticheat for Minecraft, I assisted with porting it to 26.1, and I also helped with some bug fixes and improvements.'
    }
  ],

  experience: [
    {
      role: 'Software Engineer',
      org: 'Matrix Studios, Inc.',
      href: 'https://matrix-studios-software.github.io/',
      detail:
        'Software engineering at Matrix Studios, Inc. — working on various private software projects.',
    },
    {
      role: 'COO',
      org: 'Signpost, LLC',
      href: 'https://signpost.cv',
      detail:
        'Chief Operating Officer at Signpost, LLC, a subsidiary of Matrix Studios, Inc.',
      positions: [
        { title: 'SWE', from: '6/17/26', to: '7/14/26' },
        { title: 'COO', from: '7/14/26', to: 'Present' }
      ],
    },
    {
      role: 'System Administrator',
      org: 'Cloudexa Hosting',
      href: 'https://cloudexa-hosting.com',
      detail:
        'System administration for Reece at Cloudexa Hosting. I assist with Pterodactyl installs, server monitoring tools, automated backups, and more.',
      positions: [
        { title: 'System Administrator', from: '4/13/26', to: 'Present' },
      ],
    },
    {
      role: 'Developer',
      org: 'Lucnoxity Tierlist',
      href: 'https://discord.gg/brdtPMjHB9',
      detail:
        'I created the backend infrastructure for the Lucnoxity Tierlist bot, It utilizes Kubernetes for orchestration and management. I also am the project lead, and I am responsible for maintaining the codebase, ensuring that the bot is running smoothly, and adding new features to the bot.',
      positions: [
        { title: 'Developer', from: '7/21/26', to: 'Present' },
        { title: 'Lead Developer / Talent Aquisition', from: '7/25/26', to: 'Present' }
      ],
    },
    {
      role: 'Developer',
      org: 'BonkMC',
      href: 'https://discord.gg/KHwRgKxe3a',
      detail:
        'I assist with the development of BonkMC\'s core minecraft plugin, "BonkRoot" which is the AIO plugin for the server.',
      positions: [
        { title: 'Developer', from: '8/19/26', to: 'Present' },
      ]
    },
    {
      role: 'Staff Member',
      org: 'FableSMP',
      href: 'https://discord.gg/fablesmp',
      detail:
          'Staff Member for FableSMP, a Minecraft server network. I assisted with moderation, player reports, and more.',
      positions: [
        { title: 'Helper', from: '7/24/26', to: '7/27/26' },
        { title: 'Jr. Moderator', from: '7/27/26', to: '8/3/26' },
        { title: 'Moderator', from: '8/3/26', to: '9/2/26' },
        { title: 'Sr. Moderator', from: '9/2/26', to: '9/7/26' }
      ]
    }
  ],

  vouches: [
    {
      name: 'Tyler',
      href: 'https://discord.com/users/303303309085769730',
      role: 'Community Member / Friend',
      quote:
        'I\'ve worked with Noah on several projects and he consistently delivers high-quality work. He\'s a great team member and a pleasure to collaborate with.',
    },
    {
      name: 'Reece',
      href: 'https://discord.com/users/988514405056667729',
      role: 'Owner of Cloudexa Hosting',
      quote:
        'I really like Noah because he\'s knowledgeable, reliable, and always willing to help me out when I need it something done.',
    },
    {
      name: '98ping',
      href: 'https://discord.com/users/421443176838987786',
      role: 'Owner of Matrix Studios, Inc.',
      quote:
        'Noah is a very talented software engineer. He\'s been a great asset to my team and I highly recommend him for any project you may have.',
    },
    {
      name: 'BMoney',
      href: 'https://discord.com/users/682708736359399524',
      role: 'Community Member / Friend',
      quote:
        'Noah has been a great help to me and my team. He\'s always willing to lend a hand and is very knowledgeable in his field.',
    },
    {
      name: 'Thoria',
      href: 'https://discord.com/users/1284495349267959828',
      role: 'Developer of Iustitia',
      quote:
        'Noah assisted me with porting Iustitia, my fabric client-sided anticheat to 26.1, he was very helpful and knowledgeable in the process, and I would recommend him to anyone looking for a software engineer.',
    },
    {
      name: 'Mart',
      href: 'https://discord.com/users/1001968348822769704',
      role: 'Owner of KingdomsMC',
      quote:
        'Noah made a discord bot that connected into the Towny API, and it\'s been a great feature for my community to get information from the server. He was quick, fast, and very supportive, I recommend him to anyone seeking a developer. ',
    }
  ],
}

function navLink(link) {
  if (link.href) {
    return `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
  }
  if (link.copy) {
    return `<button type="button" class="linklike" data-copy="${link.copy}" title="${link.title || 'click to copy'}">${link.label}</button>`
  }
  return `<span>${link.label}</span>`
}

function render() {
  document.querySelector('#app').innerHTML = `
    <main class="wrap">
      <nav class="topnav">
        ${data.links.map(navLink).join('<span class="sep">·</span>')}
        <span class="clock" id="clock"></span>
      </nav>

      <header class="header">
        <h1>${data.name}</h1>
        <p class="subtitle">${data.tagline}</p>
      </header>

      <div class="hero-row">
        <div class="avatar">
          <img src="./avatar.png" alt="${data.name}"
            onerror="this.closest('.avatar').classList.add('is-empty'); this.replaceWith(Object.assign(document.createElement('span'),{className:'avatar-initials',textContent:'NH'}))" />
        </div>

        <a class="status" id="status" target="_blank" rel="noopener noreferrer" aria-label="Current status">
          <img class="st-art" alt="" />
          <div class="st-info">
            <div class="st-now"><span class="st-bars"><i></i><i></i><i></i></span> <span class="st-label"></span></div>
            <div class="st-title"></div>
            <div class="st-sub"></div>
          </div>
        </a>
      </div>

      <p class="intro">${data.intro}</p>

      <section class="section">
        <h2>What I do</h2>
        ${data.skills
          .map(
            (s) => `
          <div class="row">
            <div class="row-title">${s.title}</div>
            <p class="row-body">${s.body}</p>
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>My Projects</h2>
        ${data.projects
          .map(
            (p) => `
          <div class="row">
            <div class="row-title">
              <a href="${p.href}" target="_blank" rel="noopener noreferrer">${p.name}</a>
              <span class="tag">${p.role}</span>
            </div>
            <p class="row-body">${p.body}</p>
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>Experience</h2>
        ${data.experience
          .map(
            (e) => `
          <div class="row">
            <div class="row-title">
              ${e.role} ·
              <a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.org}</a>
            </div>
            <p class="row-body">${e.detail}</p>
            ${
              e.positions && e.positions.length
                ? `<ul class="positions">
                    ${e.positions
                      .map(
                        (p) => `
                      <li>
                        <span class="pos-title">${p.title}</span>
                        <span class="pos-dates">${p.from} – ${p.to}</span>
                      </li>`
                      )
                      .join('')}
                  </ul>`
                : ''
            }
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>Reputable Vouches</h2>
        ${data.vouches
          .map(
            (v) => `
          <figure class="vouch">
            <blockquote>${v.quote}</blockquote>
            <figcaption>— ${v.name}, <span class="muted">${v.role}</span></figcaption>
          </figure>`
          )
          .join('')}
      </section>

      <footer class="footer">
        © ${new Date().getFullYear()} ${data.name}
      </footer>
    </main>
  `
}

render()

function buildSky() {
  const sky = document.createElement('div')
  sky.className = 'sky'
  sky.setAttribute('aria-hidden', 'true')

  for (let i = 0; i < 28; i++) {
    const dot = document.createElement('span')
    dot.className = 'star'
    dot.style.top = Math.random() * 100 + '%'
    dot.style.left = Math.random() * 100 + '%'
    dot.style.animationDelay = (Math.random() * 4).toFixed(2) + 's'
    dot.style.animationDuration = (2 + Math.random() * 3).toFixed(2) + 's'
    sky.appendChild(dot)
  }

  const count = 6
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span')
    star.className = 'shooting-star'
    star.style.top = Math.random() * 60 + '%'
    star.style.left = Math.random() * 80 + '%'
    star.style.animationDelay = (Math.random() * 6).toFixed(2) + 's'
    star.style.animationDuration = (3.5 + Math.random() * 4).toFixed(2) + 's'
    sky.appendChild(star)
  }

  document.body.prepend(sky)
}
buildSky()

const DISCORD_USER_ID = '1516940703333224515'

function assetUrl(appId, img) {
  if (!img) return ''
  if (img.startsWith('mp:')) return 'https://media.discordapp.net/' + img.slice(3)
  return `https://cdn.discordapp.com/app-assets/${appId}/${img}.png`
}

let statusCards = []
let statusIndex = 0

async function fetchPresence() {
  const el = document.querySelector('#status')
  if (!el || !DISCORD_USER_ID) return
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
    const { data } = await res.json()
    const cards = []

    if (data && data.listening_to_spotify && data.spotify) {
      const s = data.spotify
      cards.push({
        accent: '#1db954',
        bars: true,
        label: 'Now playing',
        art: s.album_art_url,
        title: s.song,
        sub: s.artist.replace(/;\s*/g, ', '),
        href: `https://open.spotify.com/track/${s.track_id}`,
      })
    }

    const editors = [
      { match: /intellij/i, accent: '#f24d98' },
      { match: /visual studio code|vs ?code/i, accent: '#3794ff' },
    ]
    const activities = data && data.activities ? data.activities : []
    for (const ed of editors) {
      const act = activities.find((a) => ed.match.test(a.name || ''))
      if (!act) continue
      const img = act.assets && (act.assets.large_image || act.assets.small_image)
      cards.push({
        accent: ed.accent,
        bars: false,
        label: act.name,
        art: assetUrl(act.application_id, img),
        title: act.details || act.name,
        sub: act.state || '',
        href: '',
      })
    }

    statusCards = cards
    if (statusIndex >= cards.length) statusIndex = 0
    renderStatus()
  } catch {
    statusCards = []
    renderStatus()
  }
}

function renderStatus() {
  const el = document.querySelector('#status')
  if (!el) return
  if (!statusCards.length) {
    el.classList.remove('is-active')
    return
  }
  const c = statusCards[statusIndex % statusCards.length]
  el.classList.add('is-active')
  el.classList.toggle('has-bars', !!c.bars)
  el.style.setProperty('--st-accent', c.accent)
  el.querySelector('.st-art').src = c.art
  el.querySelector('.st-label').textContent = c.label
  el.querySelector('.st-title').textContent = c.title
  el.querySelector('.st-sub').textContent = c.sub
  if (c.href) {
    el.setAttribute('href', c.href)
    el.classList.add('is-link')
  } else {
    el.removeAttribute('href')
    el.classList.remove('is-link')
  }
}

fetchPresence()
setInterval(fetchPresence, 8000)
setInterval(() => {
  if (statusCards.length > 1) {
    statusIndex = (statusIndex + 1) % statusCards.length
    renderStatus()
  }
}, 5000)

function updateClock() {
  const el = document.querySelector('#clock')
  if (!el) return
  el.textContent = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(new Date())
}
updateClock()
setInterval(updateClock, 1000)

document.querySelectorAll('[data-copy]').forEach((el) => {
  el.addEventListener('click', async () => {
    const original = el.textContent
    try {
      await navigator.clipboard.writeText(el.dataset.copy)
      el.textContent = 'copied!'
    } catch {
      el.textContent = el.dataset.copy
    }
    setTimeout(() => (el.textContent = original), 1200)
  })
})
