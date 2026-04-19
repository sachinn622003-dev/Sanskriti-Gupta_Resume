import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, Award } from 'lucide-react';
import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const experiences = [
  {
    title: "NCC - National Cadet Corps",
    points: [
      "Engaged in community service through cleanliness drives, awareness rallies, and plantation campaigns.",
      "Led first aid workshops and safety trainings, building leadership and discipline."
    ]
  },
  {
    title: "PARA LEGAL VOLUNTEER at Dwarka Court",
    points: [
      "Assisted in legal aid, counselling, and case record management for vulnerable groups.",
      "Worked on domestic violence and family dispute cases, offering support at Dwarka Court."
    ]
  },
  {
    title: "PVR Nest",
    points: [
      "Conducted community field research with women and youth, focusing on health, hygiene, and livelihood awareness.",
      "Supported program planning and monitoring, strengthening participatory approaches."
    ]
  },
  {
    title: "AI Training – Future Skills Exposure",
    points: [
      "Gained hands-on exposure to Artificial Intelligence fundamentals and practical applications.",
      "Explored AI tools and learning modules to understand their role in social development and innovation."
    ]
  },
  {
    title: "M3M Foundation",
    points: [
      "Conducted community field research with women and youth, focusing on health, hygiene, and livelihood awareness.",
      "Supported program planning and monitoring, strengthening participatory approaches."
    ]
  }
];

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="noise"></div>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <p className="accent-text mb-4" style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Portfolio
            </p>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="gradient-text">
            SANSKRITI GUPTA
          </motion.h1>
          
          <motion.h2 variants={fadeIn} className="hero-subtitle">
            Development Practitioner & Social Impact Professional
          </motion.h2>

          <motion.p variants={fadeIn} className="quote">
            "न हि ज्ञानेन सदृशं - There is nothing equal to Knowledge"
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8">
            <span style={{ 
              padding: '0.8rem 1.5rem', 
              border: '1px solid var(--accent)', 
              borderRadius: '30px',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              "Once a Cadet, Always a Cadet"
            </span>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="accent-text" opacity={0.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container">
        <motion.div 
          className="glass-card text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Award size={48} className="accent-text mb-4" style={{ margin: '0 auto' }} />
          <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: '2rem' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            "Motivated and socially driven development practitioner with hands-on experience in community engagement, grassroots outreach, and participatory research. Committed to empowering marginalized communities through inclusive planning, effective field implementation, and collaborative monitoring.”
          </p>
          
          <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-glass)', paddingTop: '2rem' }}>
            <h3 className="accent-text" style={{ marginBottom: '1rem' }}>A Journey of Service, Learning, and Impact</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              "A portfolio of meaningful work—from community development to social impact projects—designed to inspire collaboration and opportunities."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="container">
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Geography of My Experience
        </motion.h2>
        <motion.p 
          className="text-center mb-8" 
          style={{ color: 'var(--text-secondary)', marginTop: '-3rem', marginBottom: '4rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Dedicated to turning ideas into initiatives that inspire sustainable transformation.
        </motion.p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card" style={{ padding: '2rem' }}>
                <h3>{exp.title}</h3>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container text-center" style={{ paddingBottom: '8rem' }}>
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.a variants={fadeIn} href="mailto:sanskritigupta1614@gmail.com" className="contact-card">
            <Mail size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: 'var(--text-secondary)' }}>sanskritigupta1614@gmail.com</p>
            </div>
          </motion.a>

          <motion.a variants={fadeIn} href="tel:+919953675361" className="contact-card">
            <Phone size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Phone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>+91 9953675361</p>
            </div>
          </motion.a>

          <motion.div variants={fadeIn} className="contact-card">
            <MapPin size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Location</h3>
              <p style={{ color: 'var(--text-secondary)' }}>New Delhi, India</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
