'use client'
import { useRef } from 'react'

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navItems = [
    { label: 'about', ref: aboutRef },
    { label: 'skills', ref: skillsRef },
    { label: 'experience', ref: experienceRef },
    { label: 'education', ref: educationRef },
    { label: 'projects', ref: projectsRef },
    { label: 'contact', ref: contactRef },
  ]

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', color: '#00ff41', fontFamily: 'monospace', maxWidth: '1100px', margin: '0 auto' }}>

      <nav style={{ position: 'sticky', top: 0, background: '#0a0a0a', borderBottom: '1px solid #00ff4133', padding: '0.75rem 2rem', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ color: '#00ff4166', fontSize: '15px', marginRight: '8px' }}>portfolio/</span>
          {navItems.map((item, i) => (
            <span key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => scrollTo(item.ref)}
                style={{ background: 'none', border: 'none', color: '#00ff41', fontFamily: 'monospace', fontSize: '15px', cursor: 'pointer', padding: '4px 8px', letterSpacing: '1px' }}
              >
                {item.label}
              </button>
              {i < navItems.length - 1 && <span style={{ color: '#00ff4133' }}>/</span>}
            </span>
          ))}
        </div>
        <a
  href="/Janos_Nagy_ENG_CV.pdf"
  download
  style={{
    border: '1px solid #00ff41',
    color: '#00ff41',
    fontFamily: 'monospace',
    fontSize: '14px',
    padding: '6px 16px',
    textDecoration: 'none',
    letterSpacing: '1px'
  }}
>
  ↓ DOWNLOAD CV
</a>
      </nav>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        <section style={{ border: '1px solid #00ff41', padding: '2rem' }}>
          <p style={{ fontSize: '15px', color: '#00ff4188', marginBottom: '12px' }}>&gt; PROFILE.EXE</p>
          <h1 style={{ fontSize: '3.5rem', letterSpacing: '4px', animation: 'flicker 3s infinite' }}>NAGY JÁNOS</h1>
          <p style={{ color: '#00cc33', letterSpacing: '2px', marginTop: '8px', fontSize: '18px' }}>&gt; FULL STACK DEVELOPER / SOFTWARE ENGINEER_</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {['● OPEN TO WORK', '● HUNGARY', '● REMOTE OK', '● JUNIOR → MID'].map(b => (
              <span key={b} style={{ border: '1px solid #00ff4155', padding: '6px 14px', fontSize: '15px', color: '#00cc33' }}>{b}</span>
            ))}
          </div>
        </section>

        <section ref={aboutRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; ABOUT.MD</p>
          <p style={{ fontSize: '18px', color: '#00ff99', lineHeight: '2', maxWidth: '800px' }}>
            I&#39;m a Full Stack Software Developer based in Hungary, with a Bachelor&#39;s degree in Computer Software Engineering from Eszterházy Károly Catholic University and a certified background in software development and testing. During my internship at Dynix Software Kft., I worked hands-on with Microsoft Dynamics 365 Business Central. I&#39;m passionate about creating robust, efficient software solutions and continuously expanding my technical expertise.
          </p>
        </section>

        <section ref={skillsRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; SKILLS.JSON</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#00ff4166', marginBottom: '1.5rem', letterSpacing: '1px' }}>&gt;_ Backend</p>
              {['C#', 'Java', 'Python', 'Node.js', 'Laravel', 'PHP'].map(s => (
                <p key={s} style={{ fontSize: '18px', color: '#00ff41', marginBottom: '14px', letterSpacing: '1px' }}>{s}</p>
              ))}
            </div>
            <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#00ff4166', marginBottom: '1.5rem', letterSpacing: '1px' }}>&gt;_ Frontend</p>
              {['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'].map(s => (
                <p key={s} style={{ fontSize: '18px', color: '#00ff41', marginBottom: '14px', letterSpacing: '1px' }}>{s}</p>
              ))}
            </div>
            <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#00ff4166', marginBottom: '1.5rem', letterSpacing: '1px' }}>&gt;_ Database & Tools</p>
              {['MySQL', 'SQLite', 'PL/SQL', 'Docker', 'Git', 'Firebase', 'MS Dynamics 365'].map(s => (
                <p key={s} style={{ fontSize: '18px', color: '#00ff41', marginBottom: '14px', letterSpacing: '1px' }}>{s}</p>
              ))}
            </div>
          </div>
        </section>

        <section ref={experienceRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; EXPERIENCE.LOG</p>
          <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem' }}>
            <p style={{ color: '#00ff41', fontSize: '22px', letterSpacing: '2px' }}>DYNIX SOFTWARE KFT.</p>
            <p style={{ color: '#00cc33', fontSize: '18px', marginTop: '8px' }}>Software Developer Intern</p>
            <p style={{ color: '#00ff4155', fontSize: '15px', marginTop: '6px' }}>2024.07 — 2024.08</p>
            <div style={{ borderTop: '1px solid #00ff4122', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
              {[
                'MS Dynamics 365 Business Central customization and extension development',
                'REST API integration with token-based authentication',
                'Module development — custom tables, pages, triggers, event handlers',
                'Bug fixing and query optimization',
                'Version control and project releases using GitHub',
                'Copilot integration testing in Business Central',
              ].map(item => (
                <p key={item} style={{ fontSize: '17px', color: '#00ff99', marginBottom: '12px', lineHeight: '1.6' }}>
                  <span style={{ color: '#00ff4155', marginRight: '10px' }}>▸</span>{item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section ref={educationRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; EDUCATION.DB</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem' }}>
              <p style={{ color: '#00ff41', fontSize: '20px', letterSpacing: '2px' }}>ESZTERHÁZY KÁROLY CATHOLIC UNIVERSITY</p>
              <p style={{ color: '#00cc33', fontSize: '18px', marginTop: '8px' }}>BSc Computer Science</p>
              <p style={{ color: '#00ff4155', fontSize: '15px', marginTop: '6px' }}>2022 — 2025</p>
            </div>
            <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem' }}>
              <p style={{ color: '#00ff41', fontSize: '20px', letterSpacing: '2px' }}>KANDÓ KÁLMÁN IT TECHNICAL SCHOOL</p>
              <p style={{ color: '#00cc33', fontSize: '18px', marginTop: '8px' }}>Certified Software Developer & Tester</p>
              <p style={{ color: '#00ff4155', fontSize: '15px', marginTop: '6px' }}>2020 — 2022</p>
            </div>
          </div>
        </section>

        <section ref={projectsRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; PROJECTS.DIR</p>
          <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem' }}>
            <p style={{ color: '#00ff41', fontSize: '22px' }}>EzLearnApp</p>
            <p style={{ color: '#00ff99', fontSize: '17px', marginTop: '10px', lineHeight: '1.8' }}>
              Android productivity app using the Pomodoro technique. Task management, notifications, and timed study sessions.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap' }}>
              {['Android', 'Java', 'Firebase'].map(t => (
                <span key={t} style={{ background: '#00ff4111', border: '1px solid #00ff4144', padding: '4px 14px', fontSize: '15px', color: '#00ff41' }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; CERTIFICATIONS.TXT</p>
          <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem' }}>
            {['Foundational C# with Microsoft', 'AI Agents Fundamentals'].map(c => (
              <p key={c} style={{ color: '#00ff99', fontSize: '18px', marginBottom: '14px' }}>
                <span style={{ color: '#00ff41', marginRight: '12px' }}>[OK]</span>{c}
              </p>
            ))}
            <div style={{ borderTop: '1px solid #00ff4122', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '15px', color: '#00ff4166', marginBottom: '12px' }}>&gt; LANGUAGES</p>
              <p style={{ fontSize: '18px', color: '#00ff99', marginBottom: '8px' }}>Hungarian — Native</p>
              <p style={{ fontSize: '18px', color: '#00ff99' }}>English — B1 / Professional Working</p>
            </div>
          </div>
        </section>

        <section ref={contactRef} style={{ scrollMarginTop: '60px' }}>
          <p style={{ fontSize: '15px', color: '#00ff4177', marginBottom: '1.5rem', letterSpacing: '2px' }}>&gt; CONTACT.SH</p>
          <div style={{ border: '1px solid #00ff4133', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'EMAIL:', value: 'nagyjanos9919@gmail.com' },
              { label: 'PHONE:', value: '+36 30 568 1161' },
              { label: 'GITHUB:', value: 'github.com/JaniITmer' },
              { label: 'LINKEDIN:', value: 'linkedin.com/in/itjanosnagy' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '1rem', fontSize: '18px', color: '#00ff99' }}>
                <span style={{ color: '#00ff4166', minWidth: '100px', fontSize: '15px' }}>{c.label}</span>
                {c.value}
              </div>
            ))}
          </div>
        </section>

        <p style={{ color: '#00ff4166', fontSize: '15px', letterSpacing: '1px', paddingBottom: '2rem' }}>
          &gt; SYSTEM READY. AWAITING NEW PROJECT...<span style={{ display: 'inline-block', width: '10px', height: '18px', background: '#00ff41', verticalAlign: 'middle', marginLeft: '6px', animation: 'blink 1s step-end infinite' }}></span>
        </p>

      </div>
    </main>
  )
}