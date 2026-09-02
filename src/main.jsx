import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const experience = [
  {
    number: '01',
    company: 'HealthTrust Europe · Birmingham',
    dates: 'May 2022 — Present',
    role: 'Sourcing Assistant / Contract Compliance Officer',
    description:
      'Strategic and commercial oversight across Facilities Management, Consultancy Management, Legal Services, and Workplace Supplies portfolios.',
    points: [
      'Manage end-to-end procurement and contract lifecycles, from requirements gathering and market research through restricted tenders, award, and implementation.',
      'Monitor MI, framework activity, purchase-order processes, supplier risk, value for money, and contract compliance.',
      'Coordinate procurement meetings, workshops, supplier engagement, documentation, actions, and deadlines.',
    ],
    impact:
      '30% growth and 20% revenue increase across Consultancy Management; 17% growth and 15% revenue increase across Legal Services.',
  },
  {
    number: '02',
    company: 'Total Security Service · Birmingham',
    dates: 'October 2016 — May 2022',
    role: 'Retail Security Officer',
    description:
      'Reliable operational support across client-facing and regulated environments, with a strong focus on compliance, safety, and accurate reporting.',
    points: [
      'Maintained site compliance with health, safety, and wellbeing procedures.',
      'Managed site access and completed incident reports, security logs, and operational documentation.',
      'Supported risk assessments and resolved live incidents with integrity and confidentiality.',
    ],
  },
]

const capabilities = [
  ['01', 'Procurement', 'Full contract lifecycle · Tender procedures · Procurement strategies'],
  ['02', 'Commercial', 'Supplier performance · Risk mitigation · Value for money'],
  ['03', 'Governance', 'MI and data analysis · Financial governance · GDPR'],
  ['04', 'Operations', 'Stakeholder engagement · Workshops · Document control'],
]

const education = [
  ['01', 'BSc (Hons) Construction Project Management', 'Aston University, Birmingham'],
  ['02', 'HND / Foundation Degree — Applied Science', 'Aston University, Birmingham'],
  ['03', 'BTEC Extended Diploma — Applied Science (Level 3)', 'South & City College, Birmingham'],
  ['04', 'GCSEs including English and Mathematics', 'George Dixon Academy, Birmingham'],
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mohmud Ibrahim home">
        <span className="brand-mark">MI</span>
        <span>
          <strong>Mohmud Ibrahim</strong>
          <small>Procurement & Contract Officer</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        {[
          ['about', 'About'],
          ['experience', 'Experience'],
          ['capabilities', 'Capabilities'],
          ['education', 'Education'],
          ['contact', "Let’s talk"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <div className="eyebrow-row"><span>Professional profile</span><span>01 / 04</span></div>
            <p className="location">Birmingham · West Midlands</p>
            <h1>Making <em>procurement</em> work better.</h1>
            <p className="intro">A results-driven procurement and contract professional who brings structure, accuracy, and commercial thinking to complex frameworks.</p>
            <a className="scroll-link" href="#about">Scroll to explore <span>↓</span></a>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="./images/mohmud-ibrahim-portrait.webp" alt="Mohmud Ibrahim in a navy suit" /></div>
            <div className="visual-card"><strong>MI</strong><span>Procurement<br />with purpose</span></div>
            <p className="vertical-note">Frameworks / suppliers / outcomes</p>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <SectionLabel number="02">About</SectionLabel>
          <div className="two-column">
            <h2>Clear process.<br /><em>Confident delivery.</em></h2>
            <div>
              <p className="large-copy">With over four years’ experience in procurement and contract compliance, I manage the detail behind effective commercial relationships — from market research and tendering to monitoring, governance, and continuous improvement.</p>
              <p>I am particularly interested in developing this practical foundation through the Level 4 CIPS apprenticeship, connecting hands-on experience with deeper theoretical knowledge.</p>
              <p className="status">Open to the next opportunity</p>
            </div>
          </div>
          <div className="stats">
            <div><strong>4+</strong><span>Years of procurement<br />& contract experience</span></div>
            <div><strong>30%</strong><span>Growth across Consultancy<br />Management framework</span></div>
            <div><strong>17%</strong><span>Growth across Legal<br />Services framework</span></div>
            <div><strong>100%</strong><span>Care for compliant,<br />accurate delivery</span></div>
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <SectionLabel number="03">Experience</SectionLabel>
          <div className="section-heading"><h2>Work that<br /><em>holds up.</em></h2><p>Practical delivery, considered decisions, and clear documentation.</p></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={item.number}>
                <div className="item-number">{item.number}</div>
                <div className="experience-body">
                  <p className="company">{item.company}</p>
                  <p className="dates">{item.dates}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  {item.impact && <div className="impact"><span>Impact</span><p>{item.impact}</p></div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="content-section capabilities-section">
          <SectionLabel number="04">Capabilities</SectionLabel>
          <div className="section-heading"><h2>Good work<br /><em>has range.</em></h2><p>Structured, collaborative, and comfortable working across the detail and the bigger picture.</p></div>
          <div className="capability-grid">
            {capabilities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="education" className="content-section education-section">
          <SectionLabel number="05">Education</SectionLabel>
          <div className="section-heading"><h2>Always<br /><em>learning.</em></h2><p>Progressing from GCSEs through a Level 3 BTEC, HND, and degree in Construction Project Management.</p></div>
          <div className="education-grid">
            {education.map(([number, title, school]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{school}</p></article>)}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div><p className="eyebrow">Next chapter · 06 / Contact</p><h2>Let’s make<br /><em>things clearer.</em></h2><p>For opportunities, collaborations, or a conversation about procurement and supply chain, get in touch.</p></div>
          <a className="contact-button" href="mailto:your.email@example.com">Email Mahmoud <span>↗</span></a>
        </section>
      </main>
      <footer><span className="brand-mark">MI</span><strong>Mohmud Ibrahim</strong><span>Procurement & Contract Officer · Birmingham</span></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
