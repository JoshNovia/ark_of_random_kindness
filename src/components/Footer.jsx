import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/Images/new logo.png" alt="ARK Logo" className="footer-logo-img" />
            <span className="footer-logo-text">ARK Foundation</span>
          </Link>
          <p className="footer-desc">
            We are a non-profit organization committed to providing essential aid and support to underprivileged communities. Join us in making a difference today.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={18} className="contact-icon" />
              <span>homeofgozpelz@gmail.com</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+234 703 973 5830</span>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ARK Foundations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
