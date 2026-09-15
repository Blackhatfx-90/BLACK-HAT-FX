"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  CreditCard,
  Send,
  TrendingUp,
  Bitcoin,
  ChartArea,
  Target,
  Settings,
  HelpCircle,
  X,
  Sparkles
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered from parent or direct listener
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    { label: "Overview Dashboard", href: "/dashboard/overview", icon: LayoutDashboard, category: "Pages" },
    { label: "Monthly Budgets", href: "/dashboard/budgets", icon: Target, category: "Pages" },
    { label: "Bank Accounts", href: "/dashboard/accounts", icon: Wallet, category: "Pages" },
    { label: "Transaction History", href: "/dashboard/transactions", icon: ArrowLeftRight, category: "Pages" },
    { label: "Virtual & Physical Cards", href: "/dashboard/cards", icon: CreditCard, category: "Pages" },
    { label: "Instant Transfers", href: "/dashboard/transfers", icon: Send, category: "Money" },
    { label: "Investments Portfolio", href: "/dashboard/investments", icon: TrendingUp, category: "Money" },
    { label: "Crypto Assets & Spreads", href: "/dashboard/crypto", icon: Bitcoin, category: "Money" },
    { label: "Analytics & Performance", href: "/dashboard/analytics", icon: ChartArea, category: "Insights" },
    { label: "Account Settings", href: "/dashboard/settings", icon: Settings, category: "System" },
    { label: "Help & Support", href: "/dashboard/support", icon: HelpCircle, category: "System" },
  ];

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#111726] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#0d1322]">
          <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search pages, transactions, budgets, or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-muted-foreground text-sm focus:outline-none"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border hover:border-blue-500/30 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/5 bg-[#090d16] flex items-center justify-between text-xs text-muted-foreground">
          <span>Navigation Shortcuts</span>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono">↑↓ Navigate</kbd>
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono">↵ Select</kbd>
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono">ESC Close</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
