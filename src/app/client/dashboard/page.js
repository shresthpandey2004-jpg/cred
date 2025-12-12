export default function ClientDashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Client Dashboard</h1>
            <p style={{ color: '#94a3b8' }}>Manage your projects and find top talent</p>
          </div>
          <a href="/" style={{
            padding: '0.75rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '0.5rem',
            color: 'white',
            textDecoration: 'none'
          }}>← Home</a>
        </div>

        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '3rem' 
        }}>
          {[
            { label: 'Active Projects', value: '5', color: '#10b981' },
            { label: 'Total Invested', value: '$85,000', color: '#06b6d4' },
            { label: 'Hired Talent', value: '23', color: '#8b5cf6' },
            { label: 'Avg Timeline', value: '4.2 weeks', color: '#f59e0b' }
          ].map((stat, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: stat.color,
                marginBottom: '0.5rem' 
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* AI Contract Generator */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)' }}></div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AI Smart Contract Generator</h2>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>AI-Powered E-commerce Platform</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.6' }}>
                Build a modern e-commerce platform with AI recommendations, real-time chat, and advanced analytics dashboard.
              </p>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                <span>$5,000 - $8,000</span>
                <span>6-8 weeks</span>
              </div>
              <button style={{
                width: '100%',
                padding: '0.75rem',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                ⚡ Generate Smart Contract
              </button>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              AI will auto-generate: Scope, Deliverables, Timeline, Milestones, Payment breakdown
            </p>
          </div>

          {/* Quick Actions */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'linear-gradient(45deg, #10b981, #059669)' }}></div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Quick Actions</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'white',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>➕</span> Post New Project
              </button>
              <a href="/skill-heatmap" style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>📊</span> View Skill Heatmap
              </a>
              <button style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'white',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>🤖</span> AI Negotiation Bot
              </button>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#06b6d4', marginBottom: '0.5rem' }}>🎯 Demo Mode Active</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            This is a demo of CrediMatch's AI-powered client dashboard. All features are simulated for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  )
}