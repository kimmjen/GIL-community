'use client'

import { ReactNode } from 'react'
import NewSidebar from '@/components/NewSidebar'
import Header from '@/components/Header'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Glassmorphism Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="fixed inset-0 bg-gradient-to-tl from-pink-50/50 via-transparent to-cyan-50/50"></div>
      
      {/* Animated background elements */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <div className="relative z-10 flex h-screen backdrop-blur-sm">
        {/* Sidebar */}
        <NewSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
