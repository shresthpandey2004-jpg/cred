'use client'

import { motion } from 'framer-motion'
import { Plus, Bell, Settings, Users, DollarSign, Clock, TrendingUp, MessageCircle, FileText, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FreelancerCard } from '@/components/FreelancerCard'
import { RiskScanner } from '@/components/RiskScanner'
import { mockFreelancers, mockProjects } from '@/lib/utils'
import Link from 'next/link'

export default function ClientDashboard() {
  const clientData = {
    name: "Tech Innovators Inc.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    activeProjects: 5,
    totalSpent: 85000,
    hiredFreelancers: 23,
    avgProjectTime: "4.2 weeks"
  }

  const stats = [
    { label: "Active Projects", value: clientData.activeProjects, icon: TrendingUp, color: "text-green-400" },
    { label: "Total Invested", value: `$${clientData.totalSpent.toLocaleString()}`, icon: DollarSign, color: "text-cyan-400" },
    { label: "Hired Talent", value: clientData.hiredFreelancers, icon: Users, color: "text-purple-400" },
    { label: "Avg Timeline", value: clientData.avgProjectTime, icon: Clock, color: "text-yellow-400" }
  ]

  const recentProject = mockProjects[0]

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
              src={clientData.avatar}
              alt={clientData.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{clientData.name}</h1>
              <p className="text-gray-400">Client Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="neon" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
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
            {/* AI Contract Generator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    AI Smart Contract Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="glass-card p-4 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{recentProject.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{recentProject.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{recentProject.budget}</span>
                      <span>{recentProject.timeline}</span>
                    </div>
                    
                    <Button variant="neon" className="w-full">
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Smart Contract
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    AI will auto-generate: Scope, Deliverables, Timeline, Milestones, Payment breakdown
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Suggested Freelancers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                    AI-Suggested Freelancers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid gap-6">
                    {mockFreelancers.slice(0, 2).map((freelancer, index) => (
                      <motion.div
                        key={freelancer.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <FreelancerCard
                          freelancer={freelancer}
                          onConnect={() => console.log('Connect with', freelancer.name)}
                          onNegotiate={() => console.log('Negotiate with', freelancer.name)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Project Risk Scanner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <RiskScanner
                riskLevel={recentProject.riskLevel}
                factors={[
                  "Budget within market range",
                  "Realistic timeline",
                  "Clear requirements",
                  "Verified client profile"
                ]}
              />
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
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <Button variant="glass" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Post New Project
                    </Button>
                    <Link href="/skill-heatmap">
                      <Button variant="glass" className="w-full justify-start">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Skill Heatmap
                      </Button>
                    </Link>
                    <Button variant="glass" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      AI Negotiation Bot
                    </Button>
                    <Button variant="glass" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Contract Templates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Sarah Chen accepted your project</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span>New proposal received</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span>Contract generated for Mobile App</span>
                    </div>
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