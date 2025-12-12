export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          CrediMatch
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          AI-Powered Freelancer Hiring OS
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a 
            href="/app" 
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '1rem',
              fontWeight: 'bold'
            }}
          >
            Enter Platform
          </a>
        </div>
      </div>
    </div>
  )
}