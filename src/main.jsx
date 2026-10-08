import React, { useEffect, useRef, useState } from 'react';

import { createRoot } from 'react-dom/client';

import emailjs from '@emailjs/browser';

import './styles.css';




const profile = {

  name: 'Swetha Santhoshkumar',

  email: 'aksharaswetha04@gmail.com',

  linkedin: 'https://www.linkedin.com/in/swetha-santhoshkumar-884445278/',

  github: 'https://github.com/Swetha-Santhoshkumar',

};



const projects = [


  {

    name: 'NeuroInsight',

    type: 'AI + DJANGO',

    desc: 'A Django healthcare application connecting Doctors, Lab Assistants and Patients with role-based modules and an AI brain-image component.',

    stack: 'Python • Django • MySQL • ResNet18 • CNN',

    link: "https://github.com/Swetha-Santhoshkumar/NeuroInsight",

    visual: 'neuro',

  },

  {

    name: 'DigiEAT',

    type: 'WEB + ANDROID',

    desc: 'A restaurant management system with separate roles for Head/Chief, Admin, Waiter and Customer, including ordering and billing.',

    stack: 'Python • Android • XML • SQLite',

    link: profile.github,

    visual: 'food',

  },
{

    name: 'Placement Training Portal',

    type: 'MERN STACK',

    desc: 'A full-stack placement preparation platform with authentication, MCQs, automatic scoring, REST APIs and an admin dashboard.',

    stack: 'React.js • Node.js • Express.js • MongoDB',

    link: profile.github,

    visual: 'placement',

  },

  {

    name: 'CINEMAVERSE',

    type: 'WEB APPLICATION',

    desc: 'A responsive movie discovery application with search, genre and rating filters and YouTube trailer integration.',

    stack: 'HTML5 • CSS3 • JavaScript • Bootstrap • YouTube API',

    link: profile.github,

    visual: 'movie',

  },

];



const skills = [

  ['React.js', '⚛'], ['Node.js', '⬢'], ['Express.js', 'EX'], ['MongoDB', '◆'], ['JavaScript', 'JS'],

  ['Python', 'Py'], ['Django', 'DJ'], ['REST APIs', 'API'], ['HTML5', 'HTML'], ['CSS3', 'CSS'],

  ['MySQL', 'DB'], ['SQLite', 'DB'], ['Git', '◆'], ['GitHub', '◉'], ['VS Code', 'VS'],

  ['NumPy', 'NP'], ['Pandas', 'PD'], ['PyTorch', 'PT'],

];



const certificates = [

  { title: 'AI Internship', issuer: 'LinkUrCodes', image: '/assets/certificates/ai-internship.jpg' },

  { title: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy', image: '/assets/certificates/aws-foundations.png' },

  { title: 'Data Base Management System', issuer: 'NPTEL / IIT Kharagpur', image: '/assets/certificates/dbms.png' },

  { title: 'SQL and Relational Databases 101', issuer: 'IBM Cognitive Class', image: '/assets/certificates/sql.png' },

  { title: 'Python 101 for Data Science', issuer: 'IBM Cognitive Class', image: '/assets/certificates/python-data-science.png' },

];



function FlowField() {

  const canvasRef = useRef(null);



  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');

    let raf = 0;

    let width = 0;

    let height = 0;

    let dpr = 1;



    const resize = () => {

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;

      height = window.innerHeight;

      canvas.width = width * dpr;

      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;

      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    };



    resize();

    window.addEventListener('resize', resize);



    const waves = [

      { y: 0.14, amp: 42, speed: 0.00042, freq: 0.008, color: 'rgba(45,132,255,.48)', width: 1.5, phase: 0 },

      { y: 0.34, amp: 55, speed: 0.00032, freq: 0.006, color: 'rgba(183,70,255,.38)', width: 1.3, phase: 2.1 },

      { y: 0.57, amp: 47, speed: 0.00038, freq: 0.007, color: 'rgba(47,105,255,.40)', width: 1.45, phase: 4.2 },

      { y: 0.78, amp: 62, speed: 0.00028, freq: 0.0055, color: 'rgba(190,62,255,.30)', width: 1.15, phase: 1.2 },

      { y: 0.94, amp: 38, speed: 0.00035, freq: 0.009, color: 'rgba(38,155,255,.36)', width: 1.25, phase: 5.1 },

    ];



    const particles = Array.from({ length: 115 }, (_, i) => ({

      x: Math.random(), y: Math.random(), r: 0.5 + Math.random() * 1.5,

      speed: 0.00008 + Math.random() * 0.00018, twinkle: Math.random() * Math.PI * 2,

      purple: i % 3 === 0,

    }));



    const draw = (time) => {

      ctx.clearRect(0, 0, width, height);



      const bg = ctx.createLinearGradient(0, 0, width, height);

      bg.addColorStop(0, '#030512');

      bg.addColorStop(0.48, '#050817');

      bg.addColorStop(1, '#02030b');

      ctx.fillStyle = bg;

      ctx.fillRect(0, 0, width, height);



      const glow = ctx.createRadialGradient(width * .75, height * .25, 0, width * .75, height * .25, Math.min(width, height) * .8);

      glow.addColorStop(0, 'rgba(77,54,255,.12)');

      glow.addColorStop(.5, 'rgba(20,100,255,.035)');

      glow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = glow;

      ctx.fillRect(0, 0, width, height);



      waves.forEach((wave, wi) => {

        ctx.beginPath();

        const base = height * wave.y;

        for (let x = -40; x <= width + 40; x += 9) {

          const y = base

            + Math.sin(x * wave.freq + time * wave.speed + wave.phase) * wave.amp

            + Math.sin(x * wave.freq * 2.15 - time * wave.speed * 1.45 + wi) * wave.amp * .22;

          if (x === -40) ctx.moveTo(x, y); else ctx.lineTo(x, y);

        }

        ctx.strokeStyle = wave.color;

        ctx.lineWidth = wave.width;

        ctx.shadowBlur = 18;

        ctx.shadowColor = wave.color;

        ctx.stroke();

        ctx.shadowBlur = 0;

      });



      particles.forEach((p) => {

        p.y -= p.speed;

        if (p.y < -0.02) p.y = 1.02;

        const alpha = .22 + Math.sin(time * .0015 + p.twinkle) * .12;

        ctx.beginPath();

        ctx.fillStyle = p.purple ? `rgba(196,76,255,${alpha})` : `rgba(75,155,255,${alpha})`;

        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2);

        ctx.fill();

      });



      raf = requestAnimationFrame(draw);

    };



    raf = requestAnimationFrame(draw);

    return () => {

      cancelAnimationFrame(raf);

      window.removeEventListener('resize', resize);

    };

  }, []);



  return <canvas ref={canvasRef} className="flow-canvas" aria-hidden="true" />;

}



function Section({ number, title, children, className = '' }) {

  const id = title.toLowerCase().replaceAll(' ', '-');

  return (

    <section id={id} className={`section reveal ${className}`}>

      <div className="section-number">{number}</div>

      <div className="section-content">

        <div className="section-kicker">0{number}</div>

        <h2>{title}</h2>

        {children}

      </div>

    </section>

  );

}



function ProjectVisual({ type }) {

  return (

    <div className={`project-visual ${type}`}>

      <div className="visual-grid" />

      {type === 'placement' && <><div className="dashboard-top" /><div className="dashboard-card a" /><div className="dashboard-card b" /><div className="dashboard-card c" /><div className="dashboard-lines" /></>}

      {type === 'neuro' && <><div className="brain-shape">◎</div><div className="scan scan-a" /><div className="scan scan-b" /><div className="chart" /></>}

      {type === 'food' && <><div className="plate">✦</div><div className="food-card f1" /><div className="food-card f2" /><div className="food-card f3" /></>}

      {type === 'movie' && <><div className="film">▶</div><div className="movie-bar" /><div className="movie-row" /></>}

      <span className="visual-label">PROJECT / {type.toUpperCase()}</span>

    </div>

  );

}



function App() {

  const [activeCert, setActiveCert] = useState(null);

  const [formState, setFormState] = useState('idle');

  const formRef = useRef(null);



  
  // Cursor-following neon light
  useEffect(() => {
    const moveGlow = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', moveGlow);

    return () => {
      window.removeEventListener('mousemove', moveGlow);
    };
  }, []);
useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),

      { threshold: .12 }

    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);



  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });



  const sendEmail = async (event) => {

    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



    if (!serviceId || !templateId || !publicKey) {

      setFormState('setup');

      return;

    }



    setFormState('sending');

    try {

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });

      setFormState('sent');

      formRef.current.reset();

    } catch (error) {

      console.error(error);

      setFormState('error');

    }

  };



  return (

    <div className="app">

      <FlowField />

      <div className="noise" />



      <header className="navbar">

        <a className="brand" href="#home">Swetha<span>.</span></a>

        <nav>{['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>

        <button className="connect" onClick={() => scrollTo('contact')}>Connect <span>↗</span></button>

      </header>



      <main>

        <section id="home" className="hero section-shell reveal visible">

          <div className="section-number">01</div>

          <div className="hero-copy">

            <div className="creative-label"><span>✦</span> creative developer / builder</div>

            <p className="eyebrow">Hi, It’s</p>

            <h1>Swetha <span>Santhoshkumar</span><em>.</em></h1>

            <h3>Software Developer <i>•</i> MERN Stack Developer <i>•</i> Python Developer <i>•</i> Django</h3>

            <p className="hero-text">MCA graduate with hands-on Python and Django experience, familiar with MERN stack technologies and full-stack development concepts. I enjoy turning ideas into clean, useful web experiences.</p>

            <div className="actions">

              <button className="primary" onClick={() => scrollTo('projects')}>View Projects <b>→</b></button>

              <a className="secondary" href="/resume.pdf" download>⇩ &nbsp; Download Resume</a>

            </div>

            <div className="scroll-cue"><span /> scroll to explore</div>

          </div>

          <div className="hero-photo">

            <div className="photo-ring ring-a" /><div className="photo-ring ring-b" />

            <span className="note">Here<br />I<br />am ↘</span>

            <div className="photo-frame"><img src="/assets/profile.png" alt="Swetha Santhoshkumar" /></div>



          </div>

        </section>



        <Section number="02" title="About Me">

  <div className="about-layout">



    {/* LEFT — PHOTO */}

    <div className="about-visual">

      <div className="about-photo-card">

        <div className="about-photo-glow"></div>



        <img

  src="/assets/about-photo.jpeg"

  alt="Swetha Santhoshkumar"

/>



        <div className="photo-label">

          <span>SWETHA SANTHOSHKUMAR</span>

          <small>DEVELOPER · CREATIVE · BUILDER</small>

        </div>

      </div>

    </div>



    {/* RIGHT — CONTENT CARD */}

    <div className="about-info-card">



      <div className="about-card-top">

        <span className="about-card-number">01</span>

        <span className="about-card-label">GET TO KNOW ME</span>

      </div>



      <h2>

        Turning ideas into

        <span> digital experiences.</span>

      </h2>



      <p>

        I am <strong>Swetha Santhoshkumar</strong>, an MCA graduate from the

        Federal Institute of Science and Technology (FISAT) under APJ Abdul

        Kalam Technological University.

      </p>



      <p>

        I have hands-on experience in <strong>Python and Django development</strong>

         through my internship as a Python Django Web Developer at Ziuke

        InfoTech, Thrissur. During my internship, I worked with Django's MVT

        architecture, database-driven applications, CRUD operations,

        authentication, forms, SQLite and responsive web interfaces.

      </p>







      <p>

        I enjoy transforming ideas and requirements into practical digital

        solutions. I particularly enjoy creating clean interfaces, connecting

        frontend and backend systems, integrating APIs and building

        applications that solve real-world problems.

      </p>





      <div className="about-card-footer">

        <span>OPEN TO OPPORTUNITIES</span>

        <span className="footer-dot"></span>

        <span>2026</span>

      </div>



    </div>



  </div>

</Section>



        <Section number="03" title="Skills">

          <div className="skills-grid">{skills.map(([name, icon]) => <div className="skill" key={name}><div className="skill-icon">{icon}</div><span>{name}</span></div>)}</div>

        </Section>



        <Section number="04" title="Projects">

          <div className="projects-grid">{projects.map((p, i) => <article className="project" key={p.name}>

            <div className="project-number">0{i + 1}</div>

            <ProjectVisual type={p.visual} />

            <div className="project-head"><h3>{p.name}</h3><span className="tag">{p.type}</span></div>

            <p>{p.desc}</p>

            <small>{p.stack}</small>

            <a href={p.link} target="_blank" rel="noreferrer">GitHub <b>↗</b></a>

          </article>)}</div>

        </Section>



        <Section number="05" title="Experience">

  <article className="experience-card">

    <div className="company-logo">Z</div>



    <div>

      <div className="exp-top">

        <span>JAN 2026 — APR 2026</span>

        <span>INTERNSHIP</span>

      </div>



      <h3>Ziuke InfoTech</h3>



      <p className="role">

        Python Django Web Developer Intern · Thrissur, Kerala

        <br />

        Backend Development · Web Applications · Database Integration

      </p>



      <ul>

        <li>

          Developed web application modules using Python and Django following

          the MVT architecture.

        </li>



        <li>

          Worked with Django models, views, templates and forms to build

          database-driven application functionality.

        </li>



        <li>

          Implemented CRUD operations and application workflows using SQLite

          for data storage.

        </li>



        <li>

          Implemented user authentication, form handling and role-based

          application workflows for different users.

        </li>



        <li>

          Developed responsive web interfaces using HTML5, CSS3 and JavaScript

          and integrated them with Django backend modules.

        </li>



        <li>

          Worked with functional requirements and translated them into

          practical application features and modules.

        </li>



        <li>

          Performed debugging, testing and troubleshooting to identify and

          resolve application issues.

        </li>



        <li>

          Used Git for version control and collaborated during development,

          testing and deployment activities.

        </li>

      </ul>



      <div className="exp-projects">

        <span>Project: Fire & Safety Management</span>

        <span>Project: Hostel Management System</span>

        <span>Python</span>

        <span>Django</span>

        <span>SQLite</span>

        <span>HTML5</span>

        <span>CSS3</span>

        <span>JavaScript</span>

        <span>Git</span>

      </div>

    </div>



    <div className="exp-glow" />

  </article>

</Section>



        <Section number="06" title="Education">

  <div className="education-timeline">

    {/* MCA */}
    <div className="education-item left">
      <div className="education-dot">
        <span>✦</span>
      </div>

      <div className="education-year">
        2024 — 2026
      </div>

      <div className="education-card">
        <div className="education-icon">🎓</div>

        <div className="education-content">
          <span className="education-level">
            POSTGRADUATE
          </span>

          <h3>Master of Computer Applications</h3>

          <a
            href="https://fisat.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal Institute of Science and Technology (FISAT)
            <span>↗</span>
          </a>

          <p>
            APJ Abdul Kalam Technological University
          </p>
        </div>
      </div>
    </div>


    {/* BCA */}
    <div className="education-item right">
      <div className="education-dot">
        <span>✦</span>
      </div>

      <div className="education-year">
        2021 — 2024
      </div>

      <div className="education-card">
        <div className="education-icon">💻</div>

        <div className="education-content">
          <span className="education-level">
            UNDERGRADUATE
          </span>

          <h3>Bachelor of Computer Applications</h3>

          <a
            href="https://mdcollege.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mar Dionysius College, Thrissur
            <span>↗</span>
          </a>

          <p>
            University of Calicut
          </p>
        </div>
      </div>
    </div>


    {/* Higher Secondary */}
    <div className="education-item left">
      <div className="education-dot">
        <span>✦</span>
      </div>

      <div className="education-year">
        2019 — 2021
      </div>

      <div className="education-card">
        <div className="education-icon">📚</div>

        <div className="education-content">
          <span className="education-level">
            HIGHER SECONDARY
          </span>

          <h3>Higher Secondary Education</h3>

          <a
            href="https://sametham.kite.kerala.gov.in/20008"
            target="_blank"
            rel="noopener noreferrer"
          >
            HSS Peringode
            <span>↗</span>
          </a>

          <p>
            Kerala State Board
          </p>
        </div>
      </div>
    </div>


    {/* SSLC */}
    <div className="education-item right">
      <div className="education-dot">
        <span>✦</span>
      </div>

      <div className="education-year">
        2019
      </div>

      <div className="education-card">
        <div className="education-icon">🏫</div>

        <div className="education-content">
          <span className="education-level">
            SECONDARY EDUCATION
          </span>

          <h3>Secondary Education</h3>

          <a
            href="https://sreemaharshi.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sree Maharshi Vidhyalaya, Pattambi
            <span>↗</span>
          </a>

          <p>
            Central Board of Secondary Education (CBSE)
          </p>
        </div>
      </div>
    </div>

  </div>

</Section>


       <Section number="07" title="Certifications">

  <div className="certs">
    {certificates.map((cert) => (
      <button
        className="cert"
        key={cert.title}
        onClick={() => setActiveCert(cert)}
      >
        {/* Same cover for every certificate */}
        <div className="cert-cover">
          <div className="cert-cover-icon">✦</div>

          <div className="cert-cover-title">
            CERTIFICATE
          </div>

          <div className="cert-cover-line"></div>

          <div className="cert-cover-subtitle">
            OF ACHIEVEMENT
          </div>
        </div>

        <div className="cert-overlay">
          <span>View certificate ↗</span>
        </div>

        <strong>{cert.title}</strong>
        <small>{cert.issuer}</small>
      </button>
    ))}
  </div>

</Section>



        <Section number="08" title="Contact" className="contact-section">

          <div className="contact-grid">

            <div className="contact-info">

              <div className="contact-title">Let’s build<br /><span>something.</span></div>

              <p>✉ &nbsp; {profile.email}</p>

              <p>⌖ &nbsp; India</p>

              <div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a></div>

              <a className="resume-link" href="/resume.pdf" download>Download Resume ↗</a>

            </div>

            <form ref={formRef} onSubmit={sendEmail}>

              <input name="from_name" placeholder="Name" required />

              <input name="reply_to" type="email" placeholder="Email" required />

              <input name="subject" placeholder="Subject" />

              <textarea name="message" placeholder="Enquiry / Message" rows="6" required />

              <button className="primary" type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending…' : 'Submit'} <b>→</b></button>

              {formState === 'sent' && <p className="form-success">Message sent successfully. Thank you! ✦</p>}

              {formState === 'error' && <p className="form-error">Something went wrong. Please try again or email me directly.</p>}

              {formState === 'setup' && <p className="form-note">Email is almost ready. Add your EmailJS keys to the .env file as described in README.md.</p>}

            </form>

          </div>

        </Section>

      </main>



      <footer><span>Swetha.</span> — designed & built with curiosity ✦</footer>



      {activeCert && <div className="cert-modal" role="dialog" aria-modal="true" onClick={() => setActiveCert(null)}>

        <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>

          <button className="modal-close" onClick={() => setActiveCert(null)}>×</button>

          <img src={activeCert.image} alt={activeCert.title} />

          <h3>{activeCert.title}</h3>

          <p>{activeCert.issuer}</p>

        </div>

      </div>}

    </div>

  );

}



createRoot(document.getElementById('root')).render(<App />);
