'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Navbar } from "../Navbar/Navbar";
import { Save, Tag, X, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import "../globals.css";
import "./createArticle.css";

export default function CreateArticlePage() {
  const router =useRouter();
  const [article, setArticle] = useState({
    title: "",
    body: "",
    tags: [] as string[]
  });
  const [newTag, setNewTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTag = () => {
    if (newTag.trim() && !article.tags.includes(newTag.trim().toLowerCase())) {
      setArticle({
        ...article,
        tags: [...article.tags, newTag.trim().toLowerCase()]
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setArticle({
      ...article,
      tags: article.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock save - will be replaced with Supabase
    setTimeout(() => {
      console.log("Saving article:", article);
      alert("Article saved successfully! (Will integrate with Supabase next)");
  router.push('/dashboard')
      setIsLoading(false);
    }, 1000);
  };

  const isValid = article.title.trim() && article.body.trim();

  return (
    <div className="create-article-container">
      <Navbar />
      <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Article</h1>
          <p className="text-muted-foreground">Share your knowledge and make it discoverable</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Save className="w-5 h-5 mr-2" />
              Article Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter article title..."
                  value={article.title}
                  onChange={(e) => setArticle({...article, title: e.target.value})}
                  className="text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="body">Content</Label>
                <Textarea
                  id="body"
                  placeholder="Write your article content here..."
                  value={article.body}
                  onChange={(e) => setArticle({...article, body: e.target.value})}
                  className="min-h-[300px] resize-none"
                  required
                />
                <div className="text-right text-sm text-muted-foreground">
                  {article.body.length} characters
                </div>
              </div>

              <div className="space-y-4">
                <Label>Tags</Label>
                
                {/* Existing tags */}
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:bg-destructive/20 rounded-full p-0.5 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Add new tag */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddTag}
                    disabled={!newTag.trim()}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Press Enter or click + to add tags. Tags help organize and search your articles.
                </p>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button
                  type="submit"
                  disabled={!isValid || isLoading}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isLoading ? "Saving..." : "Save Article"}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  className="flex-1 sm:flex-none"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Preview section */}
        {(article.title || article.body) && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-3">
                {article.title || "Article Title"}
              </h2>
              
              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {article.body || "Article content will appear here..."}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
    </div>
  );
}

