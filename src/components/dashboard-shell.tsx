"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  CreditCard,
  Send,
  TrendingUp,
  Bitcoin,
  ChartArea,
  Target,
  LogIn,
  UserPlus,
  Bell,
  Settings,
  HelpCircle,
  PanelLeft,
  Sun,
  Moon,
  ChevronsUpDown,
  Search,
  Sparkles,
  Zap,
  Check,
  ChevronRight
} from "lucide-react";
import { CommandPalette } from "./command-palette";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const navGroups = [
    {
      title: "Daily",
      items: [
        { label: "Overview", href: "/dashboard/overview", icon: LayoutDashboard },
        { label: "Accounts", href: "/dashboard/accounts", icon: Wallet },
        { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
        { label: "Cards", href: "/dashboard/cards", icon: CreditCard },
      ],
    },
    {
      title: "Money",
      items: [
        { label: "Transfers", href: "/dashboard/transfers", icon: Send },
        { label: "Investments", href: "/dashboard/investments", icon: TrendingUp },
        { label: "Crypto", href: "/dashboard/crypto", icon: Bitcoin },
      ],
    },
    {
      title: "Insights",
      items: [
        { label: "Analytics", href: "/dashboard/analytics", icon: ChartArea },
        { label: "Budgets", href: "/dashboard/budgets", icon: Target },
      ],
    },
    {
      title: "Auth",
      items: [
        { label: "Sign In", href: "/sign-in", icon: LogIn },
        { label: "Sign Up", href: "/sign-up", icon: UserPlus },
      ],
    },
  ];

  // Helper for active link checking
  const isActive = (href: string) => {
    if (href === "/dashboard/overview" && (pathname === "/dashboard" || pathname === "/dashboard/overview")) {
      return true;
    }
    return pathname === href;
  };

  // Get current section label for breadcrumb
  const getBreadcrumb = () => {
    if (pathname.includes("budgets")) return "Budgets";
    if (pathname.includes("accounts")) return "Accounts";
    if (pathname.includes("transactions")) return "Transactions";
    if (pathname.includes("cards")) return "Cards";
    if (pathname.includes("transfers")) return "Transfers";
    if (pathname.includes("investments")) return "Investments";
    if (pathname.includes("crypto")) return "Crypto & Spreads";
    if (pathname.includes("analytics")) return "Analytics";
    if (pathname.includes("settings")) return "Settings";
    if (pathname.includes("support")) return "Help & Support";
    return "Overview";
  };

  return (
    <div className={`min-h-screen flex bg-[#090d16] text-slate-100 ${theme}`}>
      {/* SIDEBAR */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-40 bg-[#0d1322] border-r border-white/5 transition-all duration-300 flex flex-col ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/5">
          <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
              <Zap className="size-5 text-white fill-white" />
            </div>
            {sidebarOpen && (
              <div className="flex flex-col text-left leading-tight truncate">
                <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5 uppercase">
                  BLACK-HAT.FX
                  <span className="text-[9px] bg-blue-500/20 text-blue-400 font-mono px-1 py-0.5 rounded border border-blue-500/30">PRO</span>
                </span>
                <span className="text-[11px] text-muted-foreground truncate">Fintech Dashboard</span>
              </div>
            )}
          </Link>
        </div>

        {/* Scrollable Nav Content */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 no-scrollbar">
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              {sidebarOpen && (
                <div className="px-3 text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-1">
                  {group.title}
                </div>
              )}
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    title={!sidebarOpen ? item.label : undefined}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all group ${
                      active
                        ? "bg-blue-600 text-white font-medium shadow-md shadow-blue-600/30"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`size-4 shrink-0 ${active ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                    {sidebarOpen && <span className="truncate">{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer Nav & Utilities */}
        <div className="p-3 border-t border-white/5 space-y-1 bg-[#090d16]/50">
          <Link
            href="/dashboard/notifications"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
          >
            <div className="flex items-center gap-3">
              <Bell className="size-4 shrink-0 text-slate-400 group-hover:text-white" />
              {sidebarOpen && <span>Notifications</span>}
            </div>
            {sidebarOpen && (
              <span className="size-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                6
              </span>
            )}
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
          >
            <Settings className="size-4 shrink-0 text-slate-400 group-hover:text-white" />
            {sidebarOpen && <span>Settings</span>}
          </Link>

          <Link
            href="/dashboard/support"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
          >
            <HelpCircle className="size-4 shrink-0 text-slate-400 group-hover:text-white" />
            {sidebarOpen && <span>Help & Support</span>}
          </Link>

          {/* User Profile Card */}
          <div className="pt-2">
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left border border-white/5"
              >
                <div className="size-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  AG
                </div>
                {sidebarOpen && (
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs font-semibold text-white truncate">Abderrahim G.</p>
                    <p className="text-[10px] text-slate-400 truncate">abderrahim@fintech.com</p>
                  </div>
                )}
                {sidebarOpen && <ChevronsUpDown className="size-3.5 text-slate-400 shrink-0" />}
              </button>

              {userDropdownOpen && sidebarOpen && (
                <div className="absolute bottom-14 left-0 w-full bg-[#111726] border border-white/10 rounded-lg shadow-xl p-1 z-50 text-xs space-y-1 animate-in fade-in slide-in-from-bottom-2">
                  <div className="px-3 py-2 border-b border-white/10">
                    <p className="font-semibold text-white">BLACK-HAT FX Desk</p>
                    <p className="text-[10px] text-blue-400">Institutional Plan</p>
                  </div>
                  <button 
                    onClick={() => { setUserDropdownOpen(false); alert("Account details"); }}
                    className="w-full text-left px-3 py-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white"
                  >
                    Profile Settings
                  </button>
                  <button 
                    onClick={() => { setUserDropdownOpen(false); alert("API Key copied"); }}
                    className="w-full text-left px-3 py-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white"
                  >
                    API Credentials
                  </button>
                  <button 
                    onClick={() => { setUserDropdownOpen(false); alert("Logged out"); }}
                    className="w-full text-left px-3 py-1.5 rounded hover:bg-red-500/20 text-red-400"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div 
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* HEADER BAR */}
        <header className="h-16 px-6 border-b border-white/5 bg-[#090d16]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Toggle Sidebar"
            >
              <PanelLeft className="size-5" />
            </button>

            <div className="h-4 w-px bg-white/10" />

            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-400 font-medium">Dashboard</span>
              <ChevronRight className="size-3.5 text-slate-600" />
              <span className="text-white font-semibold">{getBreadcrumb()}</span>
            </div>
          </div>

          {/* Top Actions: Search Command Palette & Theme Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-white transition-all w-64"
            >
              <Search className="size-3.5 text-slate-400" />
              <span className="flex-1 text-left">Search commands & pages...</span>
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono text-slate-300">⌘K</kbd>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-white/10"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>

      {/* Command Palette Dialog */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </div>
  );
}
