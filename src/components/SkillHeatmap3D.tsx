'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface SkillNode {
  name: string
  demand: number
  salary: number
  position: [number, number, number]
  color: string
}

export function SkillHeatmap3D() {
  const skills: SkillNode[] = useMemo(() => [
    { name: "React", demand: 95, salary: 85, position: [0, 0, 0], color: "#61dafb" },
    { name: "Python", demand: 90, salary: 92, position: [3, 2, -1], color: "#3776ab" },
    { name: "AI/ML", demand: 88, salary: 110, position: [-2, 3, 2], color: "#ff6b6b" },
    { name: "Node.js", demand: 85, salary: 78, position: [4, -1, 3], color: "#68a063" },
    { name: "TypeScript", demand: 82, salary: 88, position: [-3, -2, -2], color: "#3178c6" },
    { name: "Blockchain", demand: 75, salary: 125, position: [1, 4, -3], color: "#f7931a" },
    { name: "Vue.js", demand: 70, salary: 75, position: [-4, 1, 1], color: "#4fc08d" },
    { name: "Go", demand: 68, salary: 95, position: [2, -3, 4], color: "#00add8" },
    { name: "Rust", demand: 65, salary: 105, position: [-1, -4, -1], color: "#ce422b" },
    { name: "Flutter", demand: 72, salary: 82, position: [3, 1, -4], color: "#02569b" },
  ], [])

  const handleSkillClick = (skill: SkillNode) => {
    console.log('Clicked skill:', skill)
  }

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute inset-0 floating-particles"></div>
        
        {/* Fallback 2D visualization */}
        <div className="relative z-10 p-8 h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card p-4 text-center cursor-pointer"
                onClick={() => handleSkillClick(skill)}
                style={{ borderColor: skill.color + '40' }}
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.demand}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-400">${skill.salary}k avg</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}