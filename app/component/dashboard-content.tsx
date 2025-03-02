"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Bell, Plus, Home, Image, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MemoryCard } from "@/app/component/memory-card";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface CardData {
  imageSrc: string;
  altText: string;
  captionText: string;
  date: string;
  count: string;
}

interface DashboardContentProps {
  user: User;
  cardData: CardData[];
}

export default function DashboardContent({ user, cardData }: DashboardContentProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("memories");

  // Get user initials for avatar fallback
  const getInitials = (name?: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background to-muted/50">
      {/* Mobile sidebar toggle */}
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </Button>

      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border shadow-lg md:relative"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar header */}
              <div className="p-4 border-b border-border">
                <h2 className="text-2xl font-bold text-primary">Memories</h2>
                <p className="text-sm text-muted-foreground">Your personal photo journal</p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-1">
                <Button 
                  variant={activeTab === "dashboard" ? "secondary" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("dashboard")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === "memories" ? "secondary" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("memories")}
                >
                  <Image className="mr-2 h-4 w-4" />
                  Memories
                  <Badge className="ml-auto" variant="secondary">4</Badge>
                </Button>
                <Button 
                  variant={activeTab === "calendar" ? "secondary" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("calendar")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
                <Button 
                  variant={activeTab === "settings" ? "secondary" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>

              {/* User profile */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${sidebarOpen ? "md:ml-0" : ""}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name}</h1>
              <p className="text-muted-foreground">Here are your latest memories</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search memories..." 
                  className="w-full md:w-[200px] pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Memory
              </Button>
            </div>
          </header>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Total Memories</h3>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">This Month</h3>
              <p className="text-2xl font-bold">4</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Total Photos</h3>
              <p className="text-2xl font-bold">560</p>
            </div>
          </div>

          {/* Section title */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Memories</h2>
            <Button variant="link" className="text-primary">View all</Button>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <MemoryCard
                key={index}
                imageSrc={card.imageSrc}
                altText={card.altText}
                title={card.captionText}
                date={card.date}
                count={card.count}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
