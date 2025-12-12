'use client'

import { motion } from 'framer-motion'

interface WorkstyleDNAProps {
  data: {
    creativity: number
    speed: number
    quality: number
    communication: number
    teamwork: number
  }
  size?: 'sm' | 'md' | 'lg'
}

export function WorkstyleDNA({ data, size = 'md' }: WorkstyleDNAProps) {
  const sizeClasses = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80'
  }

  const skills = [
    { name: 'Creativity', value: data.creativity, color: 'from-pink-400 to-rose-400' },
    { name: 'Speed', value: data.speed, color: 'from-yellow-400 to-orange-400' },
    { name: 'Quality', value: data.quality, color: 'from-green-400 to-emerald-400' },
    { name: 'Communication', value: data.communication, color: 'from-blue-400 to-cyan-400' },
    { name: 'Teamwork', value: data.teamwork, color: 'from-purple-400 to-violet-400' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass-card p-6 ${sizeClasses[size]}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
        <h3 className="text-lg font-semibold gradient-text">Workstyle DNA Profile</h3>
      </div>
      
      {/* Circular Progress Bars */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="relative w-16 h-16 mx-auto mb-2">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="4"
                  fill="none"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="url(#gradient-${index})"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - skill.value / 100) }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                />
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-white">{skill.value}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-400">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-gray-400 capitalize">{key}:</span>
            <span className="text-cyan-400 font-semibold">{value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}