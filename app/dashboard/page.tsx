'use client'
import { useEffect, useState } from 'react'
import { Plus, Search, Tag, FileText, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Navbar } from "../Navbar/Navbar";
// import api from '@/lib/api'
// import { useAuthStore } from '@/store/auth'
import { useRouter } from "next/navigation";
import { FormattedDate } from "./FormattedDate";
import "../globals.css"

type Article = {
  id: string
  title: string
  body: string
  tags: string[]
}
const mockArticles = [
  {
    id: 1,
    title: "Getting Started with React",
    body: "React is a powerful JavaScript library for building user interfaces...",
    tags: ["react", "javascript", "frontend"],
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    body: "TypeScript offers many advanced patterns that can improve your code quality...",
    tags: ["typescript", "patterns", "development"],
    created_at: "2024-01-14T15:30:00Z"
  },
  {
    id: 3,
    title: "Database Optimization Techniques",
    body: "Learn how to optimize your database queries for better performance...",
    tags: ["database", "optimization", "performance"],
    created_at: "2024-01-13T09:15:00Z"
  }
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [articles, setArticles] = useState(mockArticles);
  const router = useRouter();
  const allTags = Array.from(new Set(articles.flatMap((article: any) => article.tags)));

  const filteredArticles = articles.filter((article: any) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleSummarize = (articleId: number) => {
    // Will be replaced with real AI summarization
    alert(`Summarizing article ${articleId}... (AI integration coming next!)`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg mb-8 shadow-lg" >
            <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
            <p className="text-white/90">Organize, search, and summarize your articles with AI</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
           <Button onClick={() => router.push('/createArticle')}>
  <Plus className="w-4 h-4 mr-2" />
  New Article
</Button>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              All Tags
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <Card key={article.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                <div className="flex flex-wrap gap-1">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.body}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    <FormattedDate date={article.created_at} />
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSummarize(article.id)}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Summarize
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || selectedTag ? "Try adjusting your search or filters" : "Create your first article to get started"}
            </p>
            <Button
              onClick={() => router.push('/createArticle')}>
              <Plus className="w-4 h-4 mr-2" />
              Create Article
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};
