
'use client'
import { Brain, LogOut, User, Plus, Home } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { useRouter } from "next/navigation";
import "./Navbar.css";
import "../globals.css";

export const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    // Mock logout - will be replaced with Supabase auth
    alert("Logged out! (Will integrate with Supabase next)");
    router.push('/signup')

  };

  // Mock user data - will be replaced with real user from Supabase
  const user = {
    email: "user@example.com",
    name: "Demo User"
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Brain className="w-6 h-6 text-purple-600 mr-2" />
              <span className="font-bold text-lg  bg-clip-text text-purple-600">
                KnowledgeBase AI
              </span>
            </div>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/dashboard')}
              className="flex items-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>

            <Button
              onClick={() => router.push('/createArticle')}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Article
            </Button>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-white text-sm">
                    {user.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-sm">{user.name || "Demo User"}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => router.push('/dashboard')}
                className="md:hidden"
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => router.push('/createArticle')}
                className="md:hidden"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Article
              </DropdownMenuItem>

              <DropdownMenuSeparator className="md:hidden" />

              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
