'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Send, Bot, User, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import Link from 'next/link'

interface Message {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

export default function NegotiationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI Negotiation Assistant. I'll help you reach a fair agreement on pricing and timeline. Let's start with the project details.",
      timestamp: new Date(),
      suggestions: [
        "I want to negotiate the budget",
        "Timeline seems too tight",
        "Need to discuss scope changes"
      ]
    }
  ])
  
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const projectDetails = {
    title: "AI-Powered E-commerce Platform",
    originalBudget: "$5,000 - $8,000",
    originalTimeline: "6-8 weeks",
    freelancerRate: "$85/hour",
    estimatedHours: "80-100 hours"
  }

  const negotiationStatus = {
    budget: { status: 'negotiating', original: '$5,000-$8,000', proposed: '$6,500' },
    timeline: { status: 'agreed', original: '6-8 weeks', proposed: '7 weeks' },
    scope: { status: 'pending', original: 'Full platform', proposed: 'MVP + Phase 2' }
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: generateBotResponse(content),
        timestamp: new Date(),
        suggestions: generateSuggestions(content)
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const responses = [
      "I understand your concern about the budget. Based on market rates and project complexity, I suggest a middle ground of $6,500. This accounts for the AI integration complexity while staying within reasonable bounds.",
      "The timeline you mentioned is feasible. I recommend breaking it into 2-week sprints with milestone reviews. This ensures quality delivery while meeting your deadline.",
      "That's a fair point about the scope. Let me suggest we start with an MVP approach - core features first, then additional features in Phase 2. This reduces initial cost and risk.",
      "I've analyzed similar projects and your proposal aligns well with market standards. Shall we formalize this agreement?"
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const generateSuggestions = (userInput: string): string[] => {
    return [
      "That sounds reasonable",
      "Can we adjust the timeline?",
      "What about payment milestones?",
      "I need to think about this"
    ]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'agreed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'negotiating':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'agreed':
        return 'text-green-400'
      case 'negotiating':
        return 'text-yellow-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <Link href="/client/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold gradient-text">AI Negotiation Bot</h1>
              <p className="text-gray-400">Smart mediation for fair agreements</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    Negotiation Chat
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 p-0 flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'bot' 
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                              : 'bg-gradient-to-r from-purple-400 to-pink-400'
                          }`}>
                            {message.type === 'bot' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                          </div>
                          
                          <div className={`glass-card p-4 ${message.type === 'user' ? 'bg-purple-400/10' : 'bg-cyan-400/10'}`}>
                            <p className="text-white text-sm">{message.content}</p>
                            <p className="text-xs text-gray-400 mt-2">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                            
                            {message.suggestions && (
                              <div className="mt-3 space-y-2">
                                {message.suggestions.map((suggestion, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleSendMessage(suggestion)}
                                    className="block w-full text-left px-3 py-2 text-xs bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="glass-card p-4 bg-cyan-400/10">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Input */}
                  <div className="border-t border-white/10 p-4">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all"
                      />
                      <Button
                        onClick={() => handleSendMessage(inputMessage)}
                        variant="neon"
                        size="icon"
                        className="shrink-0"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Negotiation Status */}
          <div className="space-y-6">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white">{projectDetails.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Budget:</span>
                        <span className="text-cyan-400">{projectDetails.originalBudget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-cyan-400">{projectDetails.originalTimeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rate:</span>
                        <span className="text-cyan-400">{projectDetails.freelancerRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Est. Hours:</span>
                        <span className="text-cyan-400">{projectDetails.estimatedHours}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Negotiation Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
                    Negotiation Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {Object.entries(negotiationStatus).map(([key, item]) => (
                      <div key={key} className="glass-card p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white capitalize">{key}</span>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(item.status)}
                            <span className={`text-xs ${getStatusColor(item.status)} capitalize`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Original:</span>
                            <span className="text-gray-300">{item.original}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Proposed:</span>
                            <span className="text-cyan-400">{item.proposed}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
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
                    <Button variant="neon" className="w-full">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Accept Current Terms
                    </Button>
                    <Button variant="glass" className="w-full">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Counter Offer
                    </Button>
                    <Button variant="glass" className="w-full">
                      <Clock className="w-4 h-4 mr-2" />
                      Request More Time
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