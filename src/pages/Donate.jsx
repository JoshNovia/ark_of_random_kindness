import { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  
  const handleAmountClick = (val) => {
    setAmount(val);
  };

  return (
    <div className="page-animate">
      <div className="page-header" style={{ backgroundImage: "url('/Images/supportus.jpg')" }}>
        <div className="page-header-overlay glass-dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="hero-title animate-fade-in-up">Donate Now</h1>
            <p className="hero-subtitle animate-fade-in-up delay-100">Your contribution brings hope and changes lives.</p>
          </div>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Make a Donation</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>Select an amount or enter your custom donation.</p>
            
            <div className="donation-grid">
              {['₦5,000', '₦10,000', '₦25,000', '₦50,000', '₦100,000', '₦250,000'].map((val) => (
                <button 
                  key={val} 
                  className={`btn-outline ${amount === val ? 'btn-primary' : ''}`}
                  onClick={() => handleAmountClick(val)}
                  style={{ width: '100%', marginBottom: 0 }}
                >
                  {val}
                </button>
              ))}
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Custom Amount</label>
              <input 
                type="text" 
                placeholder="Enter amount (e.g. ₦10,000)" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #cbd5e1',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
              />
            </div>
            
            <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.25rem' }}>
              Continue to Payment
            </button>
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Secure payment processed via bank transfer or card.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
