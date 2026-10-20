import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ExternalLink, Send, CheckCircle, AlertCircle, Sparkles, ArrowUpRight, Loader2, Info } from 'lucide-react';

function GithubIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    description: '',
  });

  // Submission status: 'idle' | 'loading' | 'success' | 'unconfigured' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Website Development',
    'AI Solutions',
    'Business Automation',
    'E-commerce Website',
    'Other',
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email Address is required.');
      return;
    }
    if (!validateEmail(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.description.trim()) {
      setErrorMessage('Project Description is required.');
      return;
    }

    setStatus('loading');

    // Check for configured backend endpoint
    const backendEndpoint = import.meta.env.VITE_CONTACT_API_URL;

    if (backendEndpoint) {
      try {
        const response = await fetch(backendEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage('Failed to transmit message. Please contact directly via email or WhatsApp.');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage('Network error occurred. Please contact directly via email or WhatsApp.');
      }
    } else {
      // No backend endpoint currently configured in environment variables
      // Simulate validation completion and present transparent configuration state with prefilled dispatch
      setTimeout(() => {
        setStatus('unconfigured');
      }, 500);
    }
  };

  // Generate mailto link with pre-filled fields
  const mailtoUrl = `mailto:badrinadhgoru@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} from ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${
      formData.service
    }\n\nProject Description:\n${formData.description}`
  )}`;

  // Generate WhatsApp message URL with pre-filled fields
  const whatsappUrl = `https://wa.me/917013288812?text=${encodeURIComponent(
    `Hi Badrinadh,\nI have a project inquiry for *${formData.service}*.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${
      formData.phone || 'N/A'
    }\n\n*Description:*\n${formData.description}`
  )}`;

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '7rem 2rem 5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            background: 'rgba(252, 107, 47, 0.12)',
            border: '1px solid rgba(252, 107, 47, 0.3)',
            color: 'var(--ember-core)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          <Sparkles size={12} />
          <span>Contact Me // Client Inquiry</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--text-pure)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          Let's Build Something Together
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-ash)',
            maxWidth: '650px',
            marginTop: '1rem',
            lineHeight: 1.6,
          }}
        >
          Have a website idea, need an AI solution, or want to automate your business? Let's discuss your project.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Direct Contact Details & Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Direct Details Card */}
          <div
            style={{
              padding: '2rem',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-pure)',
                marginBottom: '1.5rem',
              }}
            >
              Direct Communication
            </h3>

            {/* Email item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(252, 107, 47, 0.15)',
                  border: '1px solid rgba(252, 107, 47, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ember-core)',
                  flexShrink: 0,
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>EMAIL</div>
                <a
                  href="mailto:badrinadhgoru@gmail.com"
                  style={{
                    color: 'var(--text-pure)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    wordBreak: 'break-all',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ember-core)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-pure)')}
                >
                  badrinadhgoru@gmail.com
                </a>
              </div>
            </div>

            {/* Phone item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(0, 240, 255, 0.12)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00F0FF',
                  flexShrink: 0,
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>PHONE</div>
                <a
                  href="tel:+917013288812"
                  style={{
                    color: 'var(--text-pure)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-pure)')}
                >
                  +91 7013288812
                </a>
              </div>
            </div>

            {/* Location / Status item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  flexShrink: 0,
                }}
              >
                <MessageSquare size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>WHATSAPP CHAT</div>
                <a
                  href="https://wa.me/917013288812"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-pure)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-pure)')}
                >
                  +91 7013288812 (Instant Message)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {/* Email Me Button */}
            <a
              href="mailto:badrinadhgoru@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(252, 107, 47, 0.12)',
                border: '1px solid rgba(252, 107, 47, 0.35)',
                color: 'var(--text-pure)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ember-core)';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(252, 107, 47, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(252, 107, 47, 0.12)';
                e.currentTarget.style.color = 'var(--text-pure)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>

            {/* Call Me Button */}
            <a
              href="tel:+917013288812"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                color: 'var(--text-pure)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00F0FF';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 240, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
                e.currentTarget.style.color = 'var(--text-pure)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Phone size={16} />
              <span>Call Me</span>
            </a>

            {/* Chat on WhatsApp Button */}
            <a
              href="https://wa.me/917013288812"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                color: '#25D366',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
                e.currentTarget.style.color = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/badrinadh12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--text-cloud)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'var(--text-cloud)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div
          style={{
            background: 'linear-gradient(160deg, rgba(22, 25, 33, 0.9) 0%, rgba(13, 14, 18, 0.98) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ marginBottom: '1.75rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-pure)',
                marginBottom: '0.35rem',
              }}
            >
              Project Inquiry Form
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Fill in your project requirements below to initiate a discussion.
            </p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div
              style={{
                background: 'rgba(255, 60, 40, 0.15)',
                border: '1px solid #FF3C28',
                color: '#FF9999',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success State (when verified backend responded 200 OK) */}
          {status === 'success' && (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10B981',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <CheckCircle size={30} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#fff', marginBottom: '0.5rem' }}>
                Inquiry Successfully Dispatched
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-ash)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                Thank you, <strong>{formData.fullName}</strong>. Your project inquiry has been received by the backend service. I will reach out to you shortly.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-glass-secondary">
                Submit Another Request
              </button>
            </div>
          )}

          {/* Unconfigured Backend State: Explains Required Configuration & Provides Direct Dispatch */}
          {status === 'unconfigured' && (
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                  <Info size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff', margin: 0 }}>
                    Inquiry Ready for Dispatch
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                    BACKEND STATUS: ENDPOINT PENDING
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-ash)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                To enable direct background form submission, set up an endpoint (such as Formspree, Resend, or a custom API) and define <code style={{ color: 'var(--ember-core)', background: 'rgba(252,107,47,0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>VITE_CONTACT_API_URL</code> in your environment variables.
              </p>

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '0.82rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Your Drafted Inquiry:</div>
                <div style={{ color: '#fff', fontWeight: 600 }}>{formData.fullName} ({formData.email})</div>
                <div style={{ color: 'var(--ember-core)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                  Service: {formData.service}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={mailtoUrl}
                  className="btn-ember-primary"
                  style={{ justifyContent: 'center', width: '100%', textDecoration: 'none' }}
                >
                  <Mail size={16} />
                  <span>Send via Email App (Pre-filled)</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    borderRadius: '999px',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid #25D366',
                    color: '#25D366',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp Chat (Pre-filled)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                  }}
                >
                  ← Edit Form Details
                </button>
              </div>
            </div>
          )}

          {/* Active Form */}
          {(status === 'idle' || status === 'loading' || status === 'error') && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Full Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--text-cloud)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Full Name <span style={{ color: 'var(--ember-core)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--ember-core)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--text-cloud)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Email Address <span style={{ color: 'var(--ember-core)' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--ember-core)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Phone Number (Optional) */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--text-cloud)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Phone Number <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--ember-core)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Service Required */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--text-cloud)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: '#15171f',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc} style={{ background: '#111318', color: '#fff' }}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--text-cloud)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Project Description <span style={{ color: 'var(--ember-core)' }}>*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your project scope, features, goals, or desired timeline..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--ember-core)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-ember-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.95rem',
                  marginTop: '0.5rem',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Validating Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
