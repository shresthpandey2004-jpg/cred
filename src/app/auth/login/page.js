export default function LoginPage() {
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
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome Back</h1>
            <p style={{ color: '#94a3b8' }}>Sign in to your CrediMatch account</p>
          </div>

          <form style={{ marginBottom: '2rem' }}>
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
                placeholder="Enter your password"
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
              Sign In
            </button>
          </form>

          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p style={{ color: '#94a3b8' }}>
              Don't have an account?{' '}
              <a href="/auth/signup" style={{ color: '#06b6d4', textDecoration: 'none' }}>
                Sign up
              </a>
            </p>
          </div>

          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: '500', color: 'white', marginBottom: '0.5rem' }}>Demo Accounts:</h3>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              <div>Client: client@demo.com / password</div>
              <div>Freelancer: freelancer@demo.com / password</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/" style={{ color: '#06b6d4', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}