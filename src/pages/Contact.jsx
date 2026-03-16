import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-animate">
      <div className="page-header" style={{ backgroundImage: "url('/Images/contact.jpg')" }}>
        <div className="page-header-overlay">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="hero-title animate-fade-in-up">Contact Us</h1>
            <p className="hero-subtitle animate-fade-in-up delay-100">Get in touch with us for inquiries or partnerships.</p>
          </div>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="about-preview" style={{ alignItems: 'flex-start' }}>
            <div className="contact-info animate-fade-in-up">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Reach Out</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-main)' }}>Location</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Nigeria, West Africa</p>
                  </div>
                </div>
                
                <div className="glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-main)' }}>Phone</h3>
                    <p style={{ color: 'var(--text-muted)' }}>+234 703 973 5830</p>
                  </div>
                </div>
                
                <div className="glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-main)' }}>Email Address</h3>
                    <p style={{ color: 'var(--text-muted)' }}>homeofgozpelz@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form glass animate-fade-in-up delay-100" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-main)' }}>Send a Message</h3>
              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '500' }}>Full Name</label>
                  <input type="text" className="form-input" placeholder="John Doe" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '500' }}>Email Address</label>
                  <input type="email" className="form-input" placeholder="john@example.com" />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontWeight: '500' }}>Message</label>
                  <textarea className="form-input" rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
