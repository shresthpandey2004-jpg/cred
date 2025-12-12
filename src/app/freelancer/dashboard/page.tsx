'use client'

import { motion } from 'framer-motion'
import { Bell, Settings, Star, DollarSign, Clock, TrendingUp, MessageCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { WorkstyleDNA } from '@/components/WorkstyleDNA'
import { TrustBadge } from '@/components/TrustBadge'
import { MatchConfidenceRing } from '@/components/MatchConfidenceRing'
import { mockProjects } from '@/lib/utils'
import Link from 'next/link'

export default function FreelancerDashboard() {
  const freelancerData = {
    name: "Sarah Chen",
    title: "Full-Stack AI Developer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    hourlyRate: 85,
    trustScore: 98,
    completedProjects: 47,
    activeProjects: 3,
    totalEarnings: 125000,
    workstyleDNA: {
      creativity: 90,
      speed: 85,
      quality: 95,
      communication: 88,
      teamwork: 92
    }
  }

  const matchedProjects = mockProjects.map(project => ({
    ...project,
    matchScore: Math.floor(Math.random() * 30) + 70
  }))

  const stats = [
    { label: "Active Projects", value: freelancerData.activeProjects, icon: TrendingUp, color: "text-green-400" },
    { label: "Total Earnings", value: `$${freelancerData.totalEarnings.toLocaleString()}`, icon: DollarSign, color: "text-cyan-400" },
    { label: "Completed", value: freelancerData.completedProjects, icon: Star, color: "text-yellow-400" },
    { label: "Response Time", value: "2 hours", icon: Clock, color: "text-purple-400" }
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <img
              src={freelancerData.avatar}
              alt={freelancerData.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{freelancerData.name}</h1>
              <p className="text-gray-400">{freelancerData.title}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Link href="/">
              <Button variant="glass" size="sm">Home</Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-4 text-center">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                    Credibility Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <TrustBadge score={freelancerData.trustScore} size="lg" />
                </CardContent>
              </Card>
            </motion.div>

            {/* Matched Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    AI-Matched Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {matchedProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="glass-card p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                              <span>{project.budget}</span>
                              <span>{project.timeline}</span>
                              <span>{project.proposals} proposals</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs border border-cyan-400/20"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            <MatchConfidenceRing score={project.matchScore} size="sm" />
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="neon" size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="glass" size="sm" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Workstyle DNA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <WorkstyleDNA data={freelancerData.workstyleDNA} size="lg" />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <Link href="/skill-heatmap">
                      <Button variant="glass" className="w-full justify-start">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Skill Heatmap
                      </Button>
                    </Link>
                    <Button variant="glass" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Optimize Portfolio
                    </Button>
                    <Button variant="glass" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      AI Negotiation Bot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}