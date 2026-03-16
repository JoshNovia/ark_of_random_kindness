import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="page-animate">
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: "url('/Images/image.jpg')" }}>
        <div className="page-header-overlay glass-dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="hero-title animate-fade-in-up">About Us</h1>
            <p className="hero-subtitle animate-fade-in-up delay-100">Learn more about our mission, vision, and the impact we make.</p>
          </div>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="about-preview">
            <div className="about-text animate-fade-in-up">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Mission</h2>
              <p className="section-description">
                At ARK Foundation, we believe that education, healthcare, and basic necessities are fundamental rights, not privileges. Since our inception, we have been dedicated to bridging the gap and providing resources to those who need them most.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle2 color="var(--primary)" />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Empowering youth through education</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle2 color="var(--primary)" />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Providing essential healthcare access</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle2 color="var(--primary)" />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Eradicating hunger in local communities</span>
                </li>
              </ul>
            </div>
            <div className="about-image glass animate-fade-in-up delay-100">
              <img src="/Images/women.jpg" alt="Our impact" className="preview-img" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-subtitle">A world where every individual has the opportunity to thrive and live a life of dignity, free from poverty and inequality.</p>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <img src="/Images/boynet.jpg" alt="Children playing" style={{ width: '100%', maxWidth: '800px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
