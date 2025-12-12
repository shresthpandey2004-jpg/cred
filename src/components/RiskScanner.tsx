'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react'
import { getRiskLevel } from '@/lib/utils'

interface RiskScannerProps {
  riskLevel: string
  factors?: string[]
  className?: string
}

export function RiskScanner({ riskLevel, factors = [], className = '' }: RiskScannerProps) {
  const risk = getRiskLevel(riskLevel)
  
  const getIcon = () => {
    switch (riskLevel) {
      case 'low':
        return CheckCircle
      case 'medium':
        return AlertCircle
      case 'high':
        return AlertTriangle
      default:
        return AlertCircle
    }
  }

  const Icon = getIcon()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`glass-card p-4 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`p-2 rounded-full ${risk.bgColor}`}
        >
          <Icon className={`w-5 h-5 ${risk.color}`} />
        </motion.div>
        
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{risk.icon}</span>
            <h3 className={`font-semibold ${risk.color}`}>
              {risk.label}
            </h3>
          </div>
          <p className="text-xs text-gray-400">AI Risk Assessment</p>
        </div>
      </div>

      {factors.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <h4 className="text-sm font-medium text-gray-300">Risk Factors:</h4>
          <ul className="space-y-1">
            {factors.map((factor, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-xs text-gray-400 flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                {factor}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Scanning animation */}
      <motion.div
        className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent`}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  )
}