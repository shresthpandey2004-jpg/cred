'use client'

import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      title: "AI Workstyle DNA",
      description: "Deep behavioral analysis creates unique freelancer profiles"
    },
    {
      title: "Smart Matching", 
      description: "95% accuracy in freelancer-project compatibility"
    },
    {
      title: "Trust & Safety",
      description: "AI-powered fraud detection and verification system"
    },
    {
      title: "Auto Negotiation",
      description: "AI mediates pricing and timeline discussions"
    }
  ]

  const stats = [
    { label: "AI Match Accuracy", value: "95%" },
    { label: "Average Response Time", value: "2.3hrs" },
    { label: "Trust Score Accuracy", value: "98%" },
    { label: "Global Talent Pool", value: "50K+" }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>✨</div>
            <span style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>CrediMatch</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/auth/login" style={{
              padding: '0.5rem 1rem',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem'
            }}>Login</Link>
            <Link href="/auth/signup" style={{
              padding: '0.5rem 1rem',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              border: 'none',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem'
            }}>Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.1'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>AI-Powered</span>
            <br />
            <span>Freelancer Hiring OS</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            color: '#94a3b8',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Next-generation platform where AI handles matching, trust analysis, 
            behavior profiling, negotiation, and smart contracts. No more guesswork.
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <Link href="/client/dashboard" style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              I Need Talent →
            </Link>
            <Link href="/freelancer/dashboard" style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              I&apos;m a Freelancer →
            </Link>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Unique AI Features
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>
              Revolutionary AI capabilities that solve real freelancing problems
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                  borderRadius: '1rem',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>🤖</div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>{feature.title}</h3>
                <p style={{ color: '#94a3b8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Accounts */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Try CrediMatch Now
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>
              Experience the future of AI-powered hiring with demo accounts
            </p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '0.5rem'
              }}>
                <strong>Client Demo:</strong><br />
                client@demo.com / password
              </div>
              <div style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '0.5rem'
              }}>
                <strong>Freelancer Demo:</strong><br />
                freelancer@demo.com / password
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/skill-heatmap" style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
              }}>
                Explore 3D Skill Map
              </Link>
              <Link href="/auth/login" style={{
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                fontWeight: 'bold'
              }}>
                Login to Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{
            width: '1.5rem',
            height: '1.5rem',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            borderRadius: '0.25rem'
          }}>✨</div>
          <span style={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>CrediMatch</span>
        </div>
        <p style={{ color: '#94a3b8' }}>
          © 2024 CrediMatch. AI-Powered Freelancer Hiring OS.
        </p>
      </footer>
    </div>
  )
}