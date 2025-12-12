'use client'

import { motion } from 'framer-motion'
import { Star, Clock, DollarSign, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MatchConfidenceRing } from './MatchConfidenceRing'
import { TrustBadge } from './TrustBadge'
import { WorkstyleDNA } from './WorkstyleDNA'

interface FreelancerCardProps {
  freelancer: {
    id: number
    name: string
    title: string
    avatar: string
    rating: number
    hourlyRate: number
    matchScore: number
    skills: string[]
    workstyleDNA: {
      creativity: number
      speed: number
      quality: number
      communication: number
      teamwork: number
    }
    trustScore: number
    completedProjects: number
    responseTime: string
  }
  onConnect?: () => void
  onNegotiate?: () => void
}

export function FreelancerCard({ freelancer, onConnect, onNegotiate }: FreelancerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <img
              src={freelancer.avatar}
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-900"></div>
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">{freelancer.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{freelancer.title}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{freelancer.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>${freelancer.hourlyRate}/hr</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{freelancer.responseTime}</span>
              </div>
            </div>
          </div>
          
          <MatchConfidenceRing score={freelancer.matchScore} size="sm" showLabel={false} />
        </div>

        <div className="mb-4">
          <TrustBadge score={freelancer.trustScore} size="sm" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs border border-cyan-400/20"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="mb-4">
          <WorkstyleDNA data={freelancer.workstyleDNA} size="sm" />
        </div>

        <div className="text-sm text-gray-400 mb-4">
          <span className="font-medium text-white">{freelancer.completedProjects}</span> projects completed
        </div>

        <div className="flex gap-2">
          <Button
            variant="neon"
            size="sm"
            className="flex-1"
            onClick={onConnect}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect
          </Button>
          <Button
            variant="glass"
            size="sm"
            className="flex-1"
            onClick={onNegotiate}
          >
            Negotiate
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}