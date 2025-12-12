'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react'

interface TrustBadgeProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
}

export function TrustBadge({ score, size = 'md' }: TrustBadgeProps) {
  const getTrustLevel = (score: number) => {
    if (score >= 90) return {
      level: 'Verified & Safe',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      emoji: '🟢'
    }
    if (score >= 70) return {
      level: 'Trusted User',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      emoji: '🔵'
    }
    return {
      level: 'Low Trust User',
      icon: AlertTriangle,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      emoji: '⚠️'
    }
  }

  const trust = getTrustLevel(score)
  const Icon = trust.icon

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        inline-flex items-center gap-2 rounded-full border backdrop-blur-sm
        ${trust.bgColor} ${trust.borderColor} ${sizeClasses[size]}
      `}
    >
      <span className="text-lg">{trust.emoji}</span>
      <Icon className={`w-4 h-4 ${trust.color}`} />
      <span className={`font-medium ${trust.color}`}>
        {trust.level}
      </span>
      <span className="text-gray-400 text-xs">
        ({score}%)
      </span>
    </motion.div>
  )
}