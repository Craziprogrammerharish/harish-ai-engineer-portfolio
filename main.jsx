import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Terminal, Layers3, Workflow, Database, Activity, Code2, ExternalLink, Menu, X, FileText } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Harish B.',
  title: 'Generative AI Engineer',
  email: 'imharisstark@gmail.com',
  github: 'https://github.com/Craziprogrammerharish',
  linkedin: 'https://linkedin.com/in/harish-joy',
  location: 'Tamil Nadu, India',
};

const experience = [
  {
    company: 'GenAI Resonance LLP',
    role: 'GenAI Product Development Consultant & Data Scientist',
    dates: 'Aug 2024 — Jan 2026',
    place: 'Chennai, India',
    bullets: [
      'Developed RAG-based chatbots and enterprise question-answering applications using LangChain, embeddings, and vector databases.',
      'Built an agentic Text-to-SQL application with FastAPI, WebSockets, OAuth/SSO, MySQL, and session management.',
      'Designed LangGraph workflows for code assistance and code generation, integrating GitHub, Jenkins, and ServiceNow through MCP servers.',
      'Evaluated answer quality with RAGAS, traced LLM calls with Langfuse, and benchmarked models for different use cases.',
      'Packaged services with Docker, supported Jenkins CI/CD workflows, and mentored junior engineers.'
    ]
  },
  {
    company: 'Pace Automation Pvt. Ltd.',
    role: 'Junior AI/ML Engineer',
    dates: 'Sep 2023 — Jul 2024',
    place: 'Chennai, India',
    bullets: [
      'Developed domain-specific RAG chatbots using LangChain, Hugging Face Transformers, and Pinecone.',
      'Implemented data preparation, embeddings, vector-similarity retrieval, and LLM response generation.',
      'Refined prompts and structured workflow data to support maintainable automation.',
      'Migrated APIs from Flask to FastAPI and worked on caching and query optimization.'
    ]
  },
  {
    company: 'Mayura IT Solutions',
    role: 'IT Trainee',
    dates: 'May 2022 — Sep 2022',
    place: 'Chennai, India',
    bullets: [
      'Wrote SQL and PostgreSQL PL/pgSQL queries to generate business reports.',
      'Supported ERP data entry, validation, and reconciliation.'
    ]
  }
];

const projects = [
  {
    number: '01',
    title: 'Agentic Text-to-SQL Analytics Platform',
    category: 'LLM APPLICATION · DATA ACCESS',
    summary: 'A natural-language interface for querying relational data, with a structured execution workflow and backend controls.',
    detail: 'Implemented a LangChain/LangGraph workflow to translate questions into SQL, execute queries against MySQL, and explain results. The application uses FastAPI, WebSockets, OAuth/SSO, session management, Docker, Jenkins, and Langfuse.',
    stack: ['LangChain', 'LangGraph', 'FastAPI', 'MySQL', 'WebSockets', 'Langfuse'],
    icon: Database,
    proof: 'Evidence to add: sanitized demo, sample questions, generated SQL, expected-vs-actual query results, and a benchmark report.'
  },
  {
    number: '02',
    title: 'Multi-Agent SDLC Automation Assistant',
    category: 'AGENTIC AI · TOOL INTEGRATION',
    summary: 'A conversational workflow concept connecting coding assistance with software delivery tools.',
    detail: 'Designed LangGraph workflows with code-assistant and code-generation roles. Connected GitHub, Jenkins, and ServiceNow through MCP servers behind a FastAPI service with OAuth/SSO.',
    stack: ['LangGraph', 'MCP', 'Python', 'FastAPI', 'GitHub', 'Jenkins'],
    icon: Workflow,
    proof: 'Evidence to add: workflow diagram, example tool calls, permission boundaries, and a recorded end-to-end run.'
  },
  {
    number: '03',
    title: 'RAG Customer Service & Insights Chatbot',
    category: 'RAG · BUSINESS DATA',
    summary: 'A virtual assistant grounded in café information, paired with structured-data access for reporting.',
    detail: 'Built a retrieval pipeline for café information, connected MySQL using SQLAlchemy, added a FastAPI backend with session management, generated CSV insight reports, and used RAGAS to evaluate answer quality.',
    stack: ['LangChain', 'Hugging Face', 'FastAPI', 'MySQL', 'SQLAlchemy', 'RAGAS'],
    icon: Layers3,
    proof: 'Evidence to add: labeled Q&A dataset, citations/retrieved passages, answer-quality rubric, and test results.'
  },
  {
    number: '04',
    title: 'Supply Chain Forecasting',
    category: 'MACHINE LEARNING',
    summary: 'A forecasting project using gradient-boosted regression and hyperparameter tuning.',
    detail: 'Applied XGBoost regression and hyperparameter tuning to a demand-forecasting problem.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas'],
    icon: Activity,
    proof: 'Evidence to add: dataset source, train/test split, baseline model, MAE/RMSE, and reproducible notebook.'
  },
  {
    number: '05',
    title: 'Parkinson’s Disease Prediction',
    category: 'CLASSIFICATION',
    summary: 'A classification exercise comparing ensemble models with standard evaluation metrics.',
    detail: 'Used AdaBoost and XGBoost classification, with precision, recall, and F1-score benchmarking.',
    stack: ['Python', 'AdaBoost', 'XGBoost', 'Scikit-learn'],
    icon: Code2,
    proof: 'Evidence to add: dataset provenance, validation method, confusion matrix, and limitations. Not a clinical diagnostic tool.'
  },
  {
    number: '06',
    title: 'Netflix Analytics Dashboard',
    category: 'DATA ANALYTICS',
    summary: 'A Power BI dashboard exploring content distribution and viewership patterns.',
    detail: 'Created an interactive dashboard covering content distribution, viewership trends, and regional consumption patterns.',
    stack: ['Power BI', 'DAX', 'Data Modeling'],
    icon: Activity,
    proof: 'Evidence to add: dashboard screenshots, data source, model relationships, and key analytical questions.'
  }
];

const skills = [
  { label: 'GenAI & LLMs', items: ['RAG', 'Agentic AI', 'Multi-agent workflows', 'Prompt engineering', 'Text-to-SQL', 'Tool calling', 'MCP'] },
  { label: 'Frameworks', items: ['LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'PyTorch', 'FastAPI', 'Flask'] },
  { label: 'Retrieval & Data', items: ['Pinecone', 'FAISS', 'Qdrant', 'Embeddings', 'Semantic search', 'MySQL', 'PostgreSQL', 'SQLAlchemy'] },
  { label: 'Engineering & Ops', items: ['Python', 'WebSockets', 'OAuth/SSO', 'Docker', 'Jenkins', 'CI/CD', 'Langfuse', 'RAGAS', 'Git/GitHub'] }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [photoFailed, setPhotoFailed] = React.useState(false);
  const nav = [['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Stack', '#stack'], ['Education', '#education']];
  return (
    <div className="site-shell">
      <div className="topline"><span><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span><span className="mono">AI SYSTEMS / PORTFOLIO 2026</span></div>
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Harish B home"><span className="brand-mark">HB</span><span className="brand-text">HARISH B.<small>AI ENGINEER</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> GENERATIVE AI · LLM ENGINEERING · APPLIED SYSTEMS</div>
            <h1>Engineering useful<br/><span>AI systems.</span></h1>
            <p className="hero-lede">I build LLM applications that connect language models with enterprise data, backend services, and real workflows.</p>
            <p className="hero-detail">Focused on retrieval-augmented generation, agentic Text-to-SQL, multi-agent workflows, and Python backend engineering.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span className="meta-divider"/> <span>Open to Bangalore · Remote · Hybrid</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-top mono"><span>PROFILE / HB-01</span><span>01—06</span></div>
            <div className="portrait-frame">
              {!photoFailed ? <img src="/profile.jpg" alt="Portrait of Harish B." onError={() => setPhotoFailed(true)} /> : <div className="portrait-fallback"><span>HB</span><small>ADD YOUR PHOTO</small></div>}
              <div className="portrait-index mono">AI / ML<br/>ENGINEERING</div>
            </div>
            <div className="visual-caption"><span className="caption-mark">✳</span><div><strong>From model call to working system.</strong><small>Retrieval · Orchestration · APIs · Evaluation</small></div></div>
          </div>
          <div className="hero-index mono"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="intro-strip" id="about">
          <div className="strip-label mono">01 / PROFILE</div>
          <div className="strip-copy"><h2>Applied AI, with an engineering mindset.</h2><p>My work spans the application lifecycle: preparing data, retrieving context, orchestrating model and tool calls, building APIs, evaluating outputs, and supporting delivery workflows.</p></div>
          <div className="strip-aside"><span className="aside-number">02+</span><span>YEARS IN PROFESSIONAL<br/>AI/ML ENGINEERING ROLES</span><small>Based on listed full-time AI roles; dates are shown below.</small></div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> CAREER TIMELINE</div><h2>Experience</h2></div><p>Roles and dates aligned to the supplied resume.</p></div>
          <div className="timeline">
            {experience.map((job, i) => <article className="timeline-item" key={job.company}>
              <div className="timeline-marker"><span>0{i+1}</span></div>
              <div className="timeline-main">
                <div className="job-head"><div><h3>{job.role}</h3><p className="company">{job.company} <span>·</span> {job.place}</p></div><time>{job.dates}</time></div>
                <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </article>)}
          </div>
          <div className="experience-note"><span className="mono">EARLIER EXPERIENCE</span><div className="earlier-list"><p><strong>AI Research Fellow</strong> · Must Research Club <span>Feb 2023 — Mar 2024</span></p><p><strong>Data Scientist Intern</strong> · Oasis Infobyte <span>Aug 2023 — Sep 2023</span></p><p><strong>Machine Learning Intern</strong> · Feynn Labs <span>May 2023 — Jul 2023</span></p><p><strong>Data Science Intern</strong> · LetsGrowMore <span>Feb 2023 — Apr 2023</span></p><p><strong>Data Analytics Intern</strong> · KPMG India <span>Feb 2023</span></p><p><strong>Quality Control Engineer (Apprentice)</strong> · Renault Nissan Automotive <span>Oct 2020 — Dec 2021</span></p></div></div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section project-intro"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</div><h2>Projects built<br/>around real workflows.</h2></div><p>Each case study describes the problem and implementation. Numerical impact claims are intentionally omitted until a reproducible benchmark or supporting evidence is available.</p></div>
          <div className="project-grid">
            {projects.map(p => { const Icon = p.icon; return <article className="project-card" key={p.number}>
              <div className="project-card-top"><span className="mono">PROJECT / {p.number}</span><Icon size={21} strokeWidth={1.5}/></div>
              <div className="project-category mono">{p.category}</div>
              <h3>{p.title}</h3><p className="project-summary">{p.summary}</p><p className="project-detail">{p.detail}</p>
              <div className="tag-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div>
              <div className="proof-note"><span>PROOF TO PUBLISH</span><p>{p.proof.replace('Evidence to add: ', '')}</p></div>
            </article>})}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> TOOLKIT</div><h2>Technical stack</h2></div><p>Grouped by the engineering work each tool supports.</p></div>
          <div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.label}><span className="mono skill-index">0{i+1} / TOOLSET</span><h3>{group.label}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> EDUCATION & LEARNING</div><h2>Foundations</h2></div><p>Formal education and selected certifications listed in the supplied resume.</p></div>
          <div className="education-grid">
            <article className="education-card"><span className="mono">2023</span><div><h3>Post Graduate Program in Data Science & Engineering</h3><p>Great Lakes Institute of Management, Chennai</p><small>May 2023</small></div></article>
            <article className="education-card"><span className="mono">2020</span><div><h3>B.E. Mechanical Engineering</h3><p>KSK College of Engineering and Technology, Kumbakonam</p><small>Anna University affiliation</small></div></article>
          </div>
          <div className="certs"><span className="mono">SELECTED CERTIFICATIONS</span><div><span>Supervised Machine Learning — DeepLearning.AI & Stanford</span><span>Unsupervised Learning, Recommenders & Reinforcement Learning — DeepLearning.AI & Stanford</span><span>Introduction to Generative AI — Google Cloud Skills Boost</span><span>Microsoft Power BI Data Analyst (PL-300) — CloudThat</span></div></div>
        </section>

        <section className="benchmark-section">
          <div className="benchmark-icon"><Terminal size={24}/></div>
          <div className="benchmark-copy"><div className="eyebrow"><span className="eyebrow-line"/> MEASURE, DON'T GUESS</div><h2>Next: a reproducible<br/>AI benchmark.</h2><p>Performance metrics will be published only after a repeatable test run with a defined dataset, baseline, environment, and evaluation method. No unverified percentage claims.</p><div className="benchmark-items"><span>01 / Define test set</span><span>02 / Run baseline</span><span>03 / Record results</span></div></div>
          <div className="benchmark-status"><span className="status-ring"/><span className="mono">BENCHMARK STATUS</span><strong>Not yet measured</strong><small>Results will be added after validation.</small></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-top"><div className="eyebrow"><span className="eyebrow-line"/> CONTACT</div><span className="mono">OPEN TO FULL-TIME ROLES</span></div>
          <h2>Have a problem<br/>worth solving?</h2>
          <p>I'm interested in Generative AI, LLM engineering, AI/ML engineering, and applied AI product development opportunities.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={19}/></a>
          <div className="contact-bottom"><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={13}/></a></div><span className="mono location-bottom">TAMIL NADU, INDIA · OPEN TO BANGALORE / REMOTE</span></div>
        </section>
      </main>
      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">HB</span><span className="brand-text">HARISH B.<small>AI ENGINEER</small></span></a><span>© {new Date().getFullYear()} Harish B.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
