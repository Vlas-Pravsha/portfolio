import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiServer,
  FiTerminal,
} from 'react-icons/fi'
import { FaViber } from 'react-icons/fa6'

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#profile', label: 'Profile' },
  { href: '#contact', label: 'Contact' },
]

const orbitTags = [
  'Frontend-first',
  'Full-stack capable',
  'Product UI',
  'API thinking',
  'Monorepo builds',
  'Visual systems',
]

const signalCards = [
  {
    icon: FiLayers,
    title: 'Commercially proven on frontend',
    text: 'React, Next.js, responsive UI, and polished product surfaces.',
  },
  {
    icon: FiServer,
    title: 'Growing through real full-stack projects',
    text: 'Backend services, Prisma schemas, APIs, caching, and deployment.',
  },
  {
    icon: FiTerminal,
    title: 'More than screens',
    text: 'I care about structure, DX, product logic, and how systems evolve.',
  },
]

const featuredProjects = [
  {
    name: 'Booking Monorepo',
    label: 'Flagship system build',
    title: 'A multi-tenant restaurant booking platform shaped as one connected product system.',
    summary:
      'Next.js application, Hono backend, shared contracts, Prisma models, tenant routing, onboarding, and admin flows inside one monorepo.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Hono',
      'Prisma',
      'SQLite',
      'Turborepo',
      'Zod',
    ],
    bullets: [
      'Separated app, backend, and contracts into a clean product architecture.',
      'Built around tenant websites, onboarding-generated content, and admin control.',
      'Structured the product for future analytics and AI-assisted discount logic.',
    ],
    repoUrl: 'https://github.com/Vlas-Pravsha/booking-monorepo',
    liveUrl: '',
    themeClass: 'project-theme-a',
  },
  {
    name: 'Genesis Test Task',
    label: 'Backend-heavy execution',
    title: 'A release-tracking service with subscriptions, email flows, caching, and production delivery.',
    summary:
      'A Hono + Prisma service that tracks GitHub releases, handles subscriptions, documents endpoints, and runs with Docker and Railway.',
    stack: [
      'Hono',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Resend',
      'Docker',
      'Jest',
    ],
    bullets: [
      'Implemented confirmation and unsubscribe flows with token-based logic.',
      'Added Redis caching and documented public endpoints with Swagger.',
      'Prepared the app for CI, container flows, and production deployment.',
    ],
    repoUrl: 'https://github.com/Vlas-Pravsha/genesis-test-task',
    liveUrl: 'https://genesis-test-task-production.up.railway.app/',
    themeClass: 'project-theme-b',
  },
  {
    name: 'Analytics Dashboard',
    label: 'Frontend-aligned product work',
    title: 'A dense dashboard interface focused on structure, readability, and interaction polish.',
    summary:
      'A frontend-heavy Next.js project that highlights layout discipline, typed state, form flows, reusable UI patterns, and data-heavy screens.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'SCSS',
      'Redux Toolkit',
      'Chart.js',
      'React Hook Form',
    ],
    bullets: [
      'Focused on visual hierarchy, dashboard ergonomics, and reusable frontend structure.',
      'Worked with typed state, charts, forms, and responsive layouts.',
      'Closest to the kind of UI work that reflects my commercial strength directly.',
    ],
    repoUrl: 'https://github.com/Vlas-Pravsha/dashboard',
    liveUrl: 'https://dashboard-rust-five.vercel.app/',
    themeClass: 'project-theme-c',
  },
] as const

const capabilityGroups = [
  {
    title: 'Frontend strength',
    items: [
      'React / Next.js product delivery',
      'TypeScript-first components and clean UI architecture',
      'Responsive design, motion, forms, and interaction detail',
      'Tailwind, SCSS, and component-system thinking',
    ],
  },
  {
    title: 'Full-stack range',
    items: [
      'Node.js services with Hono',
      'Prisma schema design and relational data modeling',
      'API contracts, monorepos, and backend flows',
      'Caching, email integrations, and deployment pipelines',
    ],
  },
  {
    title: 'Working style',
    items: [
      'Readable code and scalable structure',
      'Product thinking beyond isolated UI tickets',
      'Testing exposure with Jest, RTL, Storybook, and Playwright',
      'Care for DX, maintainability, and delivery quality',
    ],
  },
]

const additionalProjects = [
  {
    name: 'Custom Popup',
    href: 'https://github.com/Vlas-Pravsha/custom-popup',
    preview: 'https://vite-project-seven-gamma.vercel.app/',
  },
  {
    name: 'Quiz App',
    href: 'https://github.com/Vlas-Pravsha/lune-test',
    preview: '',
  },
  {
    name: 'Portfolio Repo',
    href: 'https://github.com/Vlas-Pravsha/portfolio',
    preview: '',
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title-display mt-4">{title}</h2>
      <p className="section-description mt-4">{description}</p>
    </div>
  )
}

function ActionLink({
  href,
  label,
  primary = false,
}: {
  href: string
  label: string
  primary?: boolean
}) {
  return (
    <Link
      href={href}
      className={primary ? 'cta-button cta-primary' : 'cta-button cta-secondary'}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {label}
      <FiArrowRight />
    </Link>
  )
}

export default function Home() {
  return (
    <main className="portfolio-root">
      <header className="site-shell site-header">
        <div className="header-frame">
          <Link href="/" className="brand-mark">
            Vlas Dvorovyi
          </Link>
          <nav className="header-nav">
            {navigation.map(item => (
              <Link key={item.href} href={item.href} className="header-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="site-shell site-main">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="section-eyebrow">Spatial portfolio direction</p>
            <h1 className="hero-title">
              I build digital products that feel
              <span className="hero-accent"> dimensional, precise, and alive.</span>
            </h1>
            <p className="hero-description">
              Commercially, I am strongest on the frontend. Independently, I am
              already building wider systems across backend logic, schemas,
              delivery flows, and product architecture. I want the portfolio to
              look like that range, not like a standard template.
            </p>

            <div className="hero-actions">
              <ActionLink href="#work" label="Enter selected work" primary />
              <ActionLink href="mailto:vlas20421@gmail.com" label="Email me" />
              <ActionLink
                href="https://github.com/Vlas-Pravsha"
                label="GitHub"
              />
            </div>

            <div className="hero-signal-grid">
              {signalCards.map(card => {
                const Icon = card.icon
                return (
                  <article key={card.title} className="signal-panel">
                    <span className="signal-panel-icon">
                      <Icon />
                    </span>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="hero-sculpture">
            <div className="hero-depth-field hero-depth-a" />
            <div className="hero-depth-field hero-depth-b" />
            <div className="hero-ring hero-ring-a" />
            <div className="hero-ring hero-ring-b" />
            <div className="hero-orbit-belt">
              {orbitTags.map(tag => (
                <span key={tag} className="orbit-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-object hero-object-back" />
            <div className="hero-object hero-object-mid" />

            <div className="hero-portrait-stack">
              <div className="hero-portrait-card">
                <div className="portrait-topline">
                  <span className="status-dot" />
                  Frontend engineer with full-stack range
                </div>
                <div className="portrait-image-wrap">
                  <Image
                    src="/Images/me.jpeg"
                    alt="Vlas Dvorovyi portrait"
                    width={480}
                    height={620}
                    className="portrait-image"
                    priority
                  />
                </div>
                <div className="portrait-footer">
                  <div>
                    <p className="portrait-kicker">Current focus</p>
                    <p className="portrait-value">
                      Interface quality, product systems, and end-to-end growth
                    </p>
                  </div>
                  <div className="portrait-badge">VD</div>
                </div>
              </div>
            </div>

            <div className="floating-note floating-note-left">
              <p className="floating-note-label">Commercial proof</p>
              <h2>Frontend product delivery</h2>
              <p>React, Next.js, responsive UI, and polished product surfaces.</p>
            </div>

            <div className="floating-note floating-note-right">
              <p className="floating-note-label">Independent scope</p>
              <h2>Backend and system thinking</h2>
              <p>APIs, Prisma models, backend flows, caching, and deployment.</p>
            </div>
          </div>
        </section>

        <section className="ribbon-section">
          <div className="ribbon-track">
            <span>Frontend strength</span>
            <span>Full-stack builds</span>
            <span>3D art direction</span>
            <span>Booking monorepo</span>
            <span>Genesis backend case</span>
            <span>Visual systems</span>
            <span>Product thinking</span>
          </div>
        </section>

        <section id="work" className="content-section">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects that support the full-stack story without hiding the frontend truth."
            description="The paid experience is frontend. The broader engineering range is visible in the projects. I want both parts to read clearly."
          />

          <div className="project-grid">
            {featuredProjects.map(project => (
              <article
                key={project.name}
                className={`project-dossier ${project.themeClass}`}
              >
                <div className="project-dossier-layers">
                  <div className="project-dossier-shadow" />
                  <div className="project-dossier-face">
                    <div className="project-topbar">
                      <span className="project-label">{project.label}</span>
                      <span className="project-index">
                        {project.name === 'Booking Monorepo'
                          ? '01'
                          : project.name === 'Genesis Test Task'
                            ? '02'
                            : '03'}
                      </span>
                    </div>

                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-title">{project.title}</p>
                    <p className="project-summary">{project.summary}</p>

                    <div className="project-stack-list">
                      {project.stack.map(item => (
                        <span key={item} className="stack-chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <ul className="project-bullet-list">
                      {project.bullets.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="project-links">
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FiGithub />
                        Repository
                      </Link>
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <FiExternalLink />
                          Live
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="profile" className="content-section split-section">
          <div className="profile-plane">
            <SectionHeader
              eyebrow="Profile"
              title="Full-stack position. Frontend-proven core."
              description="I would rather be precise than vague. Teams get strong frontend output immediately, plus someone already building toward wider product and engineering ownership."
            />

            <div className="profile-shards">
              <div className="profile-shard">
                <h3>Commercial experience</h3>
                <p>
                  My production-proven strength is frontend product work:
                  interface systems, usability, responsiveness, and execution in React.
                </p>
              </div>
              <div className="profile-shard">
                <h3>Broader engineering range</h3>
                <p>
                  My independent work already includes backend services, schema
                  design, contract thinking, caching, email flows, and deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="capability-column">
            {capabilityGroups.map(group => (
              <article key={group.title} className="capability-slab">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="mini-project-row">
              {additionalProjects.map(project => (
                <div key={project.name} className="mini-project-card">
                  <Link href={project.href} target="_blank" rel="noreferrer">
                    {project.name}
                  </Link>
                  {project.preview ? (
                    <Link
                      href={project.preview}
                      target="_blank"
                      rel="noreferrer"
                      className="mini-project-live"
                    >
                      live
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-stage">
            <div className="contact-card-main">
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title-display mt-4">
                If the product needs strong frontend craft with expanding system depth, let&apos;s talk.
              </h2>
              <p className="section-description mt-4">
                The contact area is also designed as a surface, not as an afterthought:
                email, GitHub, LinkedIn, and a Viber-ready entry point are all part
                of the layout now.
              </p>

              <div className="contact-actions">
                <Link href="mailto:vlas20421@gmail.com" className="cta-button cta-primary">
                  <FiMail />
                  vlas20421@gmail.com
                </Link>
                <Link
                  href="https://github.com/Vlas-Pravsha"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button cta-secondary"
                >
                  <FiGithub />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vlas-dvorovyi-533606269/"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button cta-secondary"
                >
                  <FiLinkedin />
                  LinkedIn
                </Link>
                <div className="cta-button cta-muted">
                  <FaViber />
                  Viber ready
                </div>
              </div>
            </div>

            <div className="contact-side-stack">
              <article className="contact-side-card">
                <FiMessageCircle />
                <h3>Fast reach-out flow</h3>
                <p>Email for formal contact, Viber slot prepared for direct messaging.</p>
              </article>
              <article className="contact-side-card">
                <FaViber />
                <h3>Viber layer added</h3>
                <p>The design already has a Viber surface; adding a real number is the next small step.</p>
              </article>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          More spatial, more unusual, and intentionally less template-like.
        </footer>
      </div>
    </main>
  )
}
