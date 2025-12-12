'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Workstyle DNA",
      description: "Deep behavioral analysis creates unique freelancer profiles",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "95% accuracy in freelancer-project compatibility",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "AI-powered fraud detection and verification system",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Users,
      title: "Auto Negotiation",
      description: "AI mediates pricing and timeline discussions",
      color: "from-orange-400 to-red-400"
    }
  ]

  const stats = [
    { label: "AI Match Accuracy", value: "95%", icon: TrendingUp },
    { label: "Average Response Time", value: "2.3hrs", icon: Zap },
    { label: "Trust Score Accuracy", value: "98%", icon: Shield },
    { label: "Global Talent Pool", value: "50K+", icon: Globe }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CrediMatch</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="neon" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Freelancer Hiring OS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Next-generation platform where AI handles matching, trust analysis, 
              behavior profiling, negotiation, and smart contracts. No more guesswork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/client/dashboard">
              <Button variant="neon" size="xl" className="group">
                I Need Talent
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/freelancer/dashboard">
              <Button variant="glass" size="xl" className="group">
                I'm a Freelancer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Unique AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary AI capabilities that solve real freelancing problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full text-center group hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 neon-border"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of clients and freelancers using AI-powered hiring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/skill-heatmap">
                <Button variant="neon" size="lg">
                  Explore 3D Skill Map
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="glass" size="lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">CrediMatch</span>
          </div>
          <p className="text-gray-400">
            © 2024 CrediMatch. AI-Powered Freelancer Hiring OS.
          </p>
        </div>
      </footer>
    </div>
  )
}