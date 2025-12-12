export default function MainApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      {/* Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '3rem',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            borderRadius: '0.5rem'
          }}></div>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CrediMatch</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}>Login</button>
          <button style={{
            padding: '0.5rem 1rem',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            border: 'none',
            color: 'white',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          AI-Powered Freelancer Hiring OS
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Next-generation platform where AI handles matching, trust analysis, behavior profiling, negotiation, and smart contracts.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '1rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            I Need Talent
          </button>
          <button style={{
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            I'm a Freelancer
          </button>
        </div>
      </div>

      {/* Features */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {[
          { title: 'AI Workstyle DNA', desc: 'Deep behavioral analysis creates unique freelancer profiles' },
          { title: 'Smart Matching', desc: '95% accuracy in freelancer-project compatibility' },
          { title: 'Trust & Safety', desc: 'AI-powered fraud detection and verification system' },
          { title: 'Auto Negotiation', desc: 'AI mediates pricing and timeline discussions' }
        ].map((feature, i) => (
          <div key={i} style={{
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {feature.title}
            </h3>
            <p style={{ color: '#94a3b8' }}>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Demo Accounts */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Demo Accounts</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <strong>Client:</strong> client@demo.com / password
          </div>
          <div>
            <strong>Freelancer:</strong> freelancer@demo.com / password
          </div>
        </div>
      </div>
    </div>
  )
}