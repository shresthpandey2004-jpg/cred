export default function SignupPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                borderRadius: '0.5rem'
              }}>✨</div>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>CrediMatch</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Join CrediMatch</h1>
            <p style={{ color: '#94a3b8' }}>Create your AI-powered profile</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#e2e8f0', marginBottom: '0.75rem' }}>
              I am a:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(6, 182, 212, 0.5)',
                background: 'rgba(6, 182, 212, 0.1)',
                color: '#06b6d4',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>👤</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>Freelancer</div>
              </button>
              
              <button style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#94a3b8',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💼</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>Client</div>
              </button>
            </div>
          </div>

          <form style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Create Account
            </button>
          </form>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#94a3b8' }}>
              Already have an account?{' '}
              <a href="/auth/login" style={{ color: '#06b6d4', textDecoration: 'none' }}>
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/" style={{ color: '#06b6d4', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}