export default function FreelancerDashboard() {
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
              alt="Profile"
              style={{ width: '4rem', height: '4rem', borderRadius: '50%', border: '2px solid rgba(6, 182, 212, 0.3)' }}
            />
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Sarah Chen</h1>
              <p style={{ color: '#94a3b8' }}>Full-Stack AI Developer</p>
            </div>
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
            { label: 'Active Projects', value: '3', color: '#10b981' },
            { label: 'Total Earnings', value: '$125,000', color: '#06b6d4' },
            { label: 'Completed', value: '47', color: '#f59e0b' },
            { label: 'Response Time', value: '2 hours', color: '#8b5cf6' }
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
          {/* Workstyle DNA */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)' }}></div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Workstyle DNA Profile</h2>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {[
                { name: 'Creativity', value: 90, color: '#ec4899' },
                { name: 'Speed', value: 85, color: '#f59e0b' },
                { name: 'Quality', value: 95, color: '#10b981' },
                { name: 'Communication', value: 88, color: '#06b6d4' },
                { name: 'Teamwork', value: 92, color: '#8b5cf6' }
              ].map((skill, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '4rem', 
                    height: '4rem', 
                    margin: '0 auto 0.75rem',
                    borderRadius: '50%',
                    background: `conic-gradient(${skill.color} ${skill.value * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'rgba(15, 15, 35, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      color: skill.color
                    }}>
                      {skill.value}%
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{skill.name}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '2rem',
              fontSize: '0.9rem'
            }}>
              <span>🟢</span>
              <span style={{ color: '#10b981', fontWeight: '500' }}>Verified & Safe</span>
              <span style={{ color: '#94a3b8' }}>(98%)</span>
            </div>
          </div>

          {/* AI Matched Projects */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}></div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AI-Matched Projects</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'E-commerce Platform', match: 95, budget: '$5K-$8K' },
                { title: 'Mobile Fitness App', match: 88, budget: '$3K-$5K' }
              ].map((project, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '500' }}>{project.title}</h3>
                    <div style={{
                      padding: '0.25rem 0.5rem',
                      background: project.match >= 90 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      color: project.match >= 90 ? '#10b981' : '#f59e0b'
                    }}>
                      {project.match >= 90 ? '🔥' : '⚡'} {project.match}%
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem' }}>{project.budget}</p>
                  <button style={{
                    width: '100%',
                    padding: '0.5rem',
                    background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                    border: 'none',
                    borderRadius: '0.375rem',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a href="/skill-heatmap" style={{
                display: 'block',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'white',
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '0.9rem'
              }}>
                📊 View Skill Heatmap
              </a>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>🎯 Demo Mode Active</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            This is a demo of CrediMatch's AI-powered freelancer dashboard. All data and matches are simulated.
          </p>
        </div>
      </div>
    </div>
  )
}