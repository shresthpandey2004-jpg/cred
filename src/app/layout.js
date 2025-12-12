import './globals.css'

export const metadata = {
  title: 'CrediMatch - AI-Powered Freelancer Hiring OS',
  description: 'Next-generation AI hiring platform that handles matching, trust, behavior analysis, negotiation, and contracts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute inset-0 floating-particles"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}