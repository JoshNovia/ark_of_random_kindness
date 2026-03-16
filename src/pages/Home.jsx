export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">Make a Difference Today</h1>
            <p className="hero-subtitle">Join us in our mission to help those in need and bring hope to the underprivileged.</p>
            <div className="hero-actions">
              <a href="/donate" className="btn-primary">Donate Now</a>
              <a href="/about" className="btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short About Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-preview">
            <div className="about-text animate-fade-in-up delay-100">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
              <p className="section-description">
                ARK (Act of Random Kindness) Foundation is a non-profit organization committed to providing essential aid and support to underprivileged communities. We believe in the power of collective action to bring about positive change.
              </p>
              <a href="/about" className="btn-outline" style={{ marginTop: '20px' }}>Read Our Story</a>
            </div>
            <div className="about-image glass animate-fade-in-up delay-200">
              <img src="/Images/who_we.jpg" alt="Who We Are" className="preview-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-subtitle">See how your contributions are making a real impact in communities.</p>
          
          <div className="projects-grid">
            <div className="project-card glass animate-fade-in-up delay-100">
              <div className="project-img-wrapper">
                <img src="/Images/Pad.jpg" alt="Pad a girl" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Pad a 100 Girls</h3>
                <p>Providing sanitary pads and menstrual health education for 100 secondary school girls.</p>
                <a href="/projects" className="read-more-link">View Project &rarr;</a>
              </div>
            </div>
            
            <div className="project-card glass animate-fade-in-up delay-200">
              <div className="project-img-wrapper">
                <img src="/Images/carry.jpg" alt="Food Support" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Food Support</h3>
                <p>Providing essential foodstuff and nutritional support for widows and vulnerable families.</p>
                <a href="/projects" className="read-more-link">View Project &rarr;</a>
              </div>
            </div>
            
            <div className="project-card glass animate-fade-in-up delay-300">
              <div className="project-img-wrapper">
                <img src="/Images/community.jpg" alt="Community Outreach" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Community Outreach</h3>
                <p>Organizing medical camps and providing basic healthcare items to rural communities.</p>
                <a href="/projects" className="read-more-link">View Project &rarr;</a>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/projects" className="btn-primary">View All Projects</a>
          </div>
        </div>
      </section>
      
      {/* Call to Action CTA */}
      <section className="cta-section">
        <div className="cta-overlay glass-dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="cta-content animate-fade-in-up">
              <h2>Support Our Cause</h2>
              <p>Your donation can change lives. Every contribution, no matter how small, helps us provide essential aid.</p>
              <a href="/donate" className="btn-primary" style={{ marginTop: '20px' }}>Make a Donation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
