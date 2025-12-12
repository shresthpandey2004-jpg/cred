import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AppRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the main app page
    router.push('/main')
  }, [router])

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white'
    }}>
      <div>Loading CrediMatch...</div>
    </div>
  )
}