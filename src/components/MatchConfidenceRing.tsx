'use client'

import { motion } from 'framer-motion'
import { getMatchConfidenceLevel } from '@/lib/utils'

interface MatchConfidenceRingProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function MatchConfidenceRing({ score, size = 'md', showLabel = true }: MatchConfidenceRingProps) {
  const { level, emoji, color } = getMatchConfidenceLevel(score)
  
  const sizeClasses = {
    sm: { ring: 'w-16 h-16', text: 'text-xs', score: 'text-lg' },
    md: { ring: 'w-24 h-24', text: 'text-sm', score: 'text-xl' },
    lg: { ring: 'w-32 h-32', text: 'text-base', score: 'text-2xl' }
  }
  
  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <svg
          className={`${sizeClasses[size].ring} transform -rotate-90`}
          viewBox="0 0 100 100"
        >
          {/* Background ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          
          {/* Animated progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#ringGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          />
          
          {/* Pulsing rings */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold ${color} ${sizeClasses[size].score}`}>
            {score}%
          </span>
          <span className="text-2xl">{emoji}</span>
        </div>
      </div>
      
      {showLabel && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`text-center ${sizeClasses[size].text}`}
        >
          <div className={`font-semibold ${color}`}>{level}</div>
          <div className="text-gray-400 text-xs mt-1">Match Confidence</div>
        </motion.div>
      )}
    </motion.div>
  )
}