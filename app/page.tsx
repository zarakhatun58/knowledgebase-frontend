
'use client'
import React from 'react';
import { Button } from "../components/ui/button";
import { Brain, BookOpen, Sparkles, Search, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation'
import "./globals.css"

export default function Home() {
    const router = useRouter()
    return (
        <div>
      <div className="index-container">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-purple-500">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-16 h-16 mr-4" />
              <h1 className="text-5xl font-bold text-white">KnowledgeBase AI</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The intelligent way to organize, search, and understand your knowledge. 
              Upload articles and get AI-powered insights instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
               onClick={() => router.push('/signup')}
                className="bg-white text-purple-600 hover:bg-white/90 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                   onClick={() => router.push('/dashboard')}
                className="border-white text-white hover:bg-white/10"
              >
                View Articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Knowledge Management</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to organize, search, and understand your content better
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-200 shadow-knowledge hover:shadow-knowledge-glow transition-all duration-300">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Create & Organize</h3>
              <p className="text-muted-foreground">
                Easily create articles with rich content and organize them with smart tagging system
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-200 shadow-knowledge hover:shadow-knowledge-glow transition-all duration-300">
              <Search className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with powerful search and filtering capabilities
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-200 shadow-knowledge hover:shadow-knowledge-glow transition-all duration-300">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Summarization</h3>
              <p className="text-muted-foreground">
                Get instant AI-powered summaries of your articles to understand key insights quickly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to organize your knowledge?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using KnowledgeBase AI to manage their content effectively
          </p>
          <Button
            size="lg"
              onClick={() => router.push('/signup')}
            className="bg-purple-600 hover:opacity-90 shadow-knowledge"
          >
            Start Building Your Knowledge Base
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
        </div>
  )
}
