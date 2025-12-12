'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, DollarSign, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SkillHeatmap3D } from '@/components/SkillHeatmap3D'
import Link from 'next/link'

export default function SkillHeatmapPage() {
  const trendingSkills = [
    { name: "AI/ML", demand: 88, salary: 110, growth: "+25%" },
    { name: "Blockchain", demand: 75, salary: 125, growth: "+18%" },
    { name: "React", demand: 95, salary: 85, growth: "+12%" },
    { name: "Python", demand: 90, salary: 92, growth: "+15%" },
    { name: "Rust", demand: 65, salary: 105, growth: "+22%" }
  ]

  const marketInsights = [
    { label: "Total Skills Tracked", value: "500+", icon: Globe },
    { label: "Active Freelancers", value: "50K+", icon: Users },
    { label: "Avg Salary Growth", value: "+18%", icon: TrendingUp },
    { label: "Highest Paying", value: "$125k", icon: DollarSign }
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
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold gradient-text">3D Skill Heatmap</h1>
              <p className="text-gray-400">Interactive global skill demand & salary analytics</p>
            </div>
          </div>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {marketInsights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-4 text-center">
                <insight.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <div className="text-2xl font-bold gradient-text mb-1">{insight.value}</div>
                <div className="text-sm text-gray-400">{insight.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 3D Heatmap */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Card className="p-6 h-[600px]">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    Interactive Skill Universe
                  </CardTitle>
                  <p className="text-sm text-gray-400">
                    Sphere size = demand level • Color intensity = salary range • Click to explore
                  </p>
                </CardHeader>
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                    <SkillHeatmap3D />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Trending Skills Panel */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                    Trending Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {trendingSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="glass-card p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white">{skill.name}</h3>
                          <span className="text-green-400 text-sm font-medium">{skill.growth}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Demand</span>
                            <span className="text-cyan-400">{skill.demand}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.demand}%` }}
                              transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                            />
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Avg Salary</span>
                            <span className="text-green-400">${skill.salary}k</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                    Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span>Drag to rotate view</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span>Scroll to zoom in/out</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span>Click skills for details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Auto-rotation enabled</span>
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