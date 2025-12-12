import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockFreelancers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Full-Stack AI Developer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    hourlyRate: 85,
    matchScore: 95,
    skills: ["React", "Python", "AI/ML", "Node.js"],
    workstyleDNA: {
      creativity: 90,
      speed: 85,
      quality: 95,
      communication: 88,
      teamwork: 92
    },
    trustScore: 98,
    completedProjects: 47,
    responseTime: "2 hours"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "UI/UX Designer & Frontend Dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    hourlyRate: 75,
    matchScore: 88,
    skills: ["Figma", "React", "TypeScript", "3D Design"],
    workstyleDNA: {
      creativity: 95,
      speed: 80,
      quality: 90,
      communication: 85,
      teamwork: 87
    },
    trustScore: 94,
    completedProjects: 32,
    responseTime: "1 hour"
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Blockchain & Smart Contract Dev",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    hourlyRate: 95,
    matchScore: 82,
    skills: ["Solidity", "Web3", "React", "Node.js"],
    workstyleDNA: {
      creativity: 85,
      speed: 88,
      quality: 93,
      communication: 90,
      teamwork: 85
    },
    trustScore: 96,
    completedProjects: 28,
    responseTime: "3 hours"
  }
]

export const mockProjects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description: "Build a modern e-commerce platform with AI recommendations, real-time chat, and advanced analytics dashboard.",
    budget: "$5,000 - $8,000",
    timeline: "6-8 weeks",
    skills: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    riskLevel: "low",
    clientTrustScore: 92,
    postedDate: "2 days ago",
    proposals: 12
  },
  {
    id: 2,
    title: "Mobile App for Fitness Tracking",
    description: "Create a React Native app with workout tracking, social features, and integration with wearable devices.",
    budget: "$3,000 - $5,000",
    timeline: "4-6 weeks",
    skills: ["React Native", "Firebase", "UI/UX Design"],
    riskLevel: "medium",
    clientTrustScore: 78,
    postedDate: "1 day ago",
    proposals: 8
  }
]

export const getMatchConfidenceLevel = (score: number) => {
  if (score >= 90) return { level: "HIGH CONFIDENCE", emoji: "🔥", color: "text-green-400" }
  if (score >= 75) return { level: "GOOD MATCH", emoji: "⚡", color: "text-yellow-400" }
  if (score >= 60) return { level: "POSSIBLE MATCH", emoji: "🤝", color: "text-orange-400" }
  return { level: "LOW MATCH", emoji: "❗", color: "text-red-400" }
}

export const getRiskLevel = (level: string) => {
  switch (level) {
    case "low":
      return { label: "Healthy Project", color: "text-green-400", bgColor: "bg-green-400/10", icon: "🟢" }
    case "medium":
      return { label: "Medium Risk", color: "text-yellow-400", bgColor: "bg-yellow-400/10", icon: "🟠" }
    case "high":
      return { label: "High Risk", color: "text-red-400", bgColor: "bg-red-400/10", icon: "🔴" }
    default:
      return { label: "Unknown", color: "text-gray-400", bgColor: "bg-gray-400/10", icon: "⚪" }
  }
}