"use client";

import React, { useState } from "react";
import {
  Utensils,
  Car,
  Gamepad2,
  ShoppingBag,
  Repeat,
  HeartPulse,
  GraduationCap,
  Plane,
  Plus,
  Filter,
  Calendar,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  X,
  ChevronRight,
  PiggyBank
} from "lucide-react";

interface BudgetCategory {
  id: string;
  name: string;
  spent: number;
  limit: number;
  icon: React.ElementType;
  color: string;
  strokeColor: string;
  overBudget: boolean;
}

export function BudgetsView() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState("April 2026");

  const [budgets, setBudgets] = useState<BudgetCategory[]>([
    { id: "1", name: "Food & Dining", spent: 820, limit: 800, icon: Utensils, color: "text-red-500", strokeColor: "#ef4444", overBudget: true },
    { id: "2", name: "Transport", spent: 310, limit: 400, icon: Car, color: "text-blue-500", strokeColor: "#3b82f6", overBudget: false },
    { id: "3", name: "Entertainment", spent: 340, limit: 300, icon: Gamepad2, color: "text-red-500", strokeColor: "#ef4444", overBudget: true },
    { id: "4", name: "Shopping", spent: 560, limit: 500, icon: ShoppingBag, color: "text-red-500", strokeColor: "#ef4444", overBudget: true },
    { id: "5", name: "Subscriptions", spent: 215, limit: 200, icon: Repeat, color: "text-red-500", strokeColor: "#ef4444", overBudget: true },
    { id: "6", name: "Health & Fitness", spent: 450, limit: 600, icon: HeartPulse, color: "text-emerald-500", strokeColor: "#10b981", overBudget: false },
    { id: "7", name: "Education", spent: 280, limit: 300, icon: GraduationCap, color: "text-purple-500", strokeColor: "#a855f7", overBudget: false },
    { id: "8", name: "Travel & Leisure", spent: 1200, limit: 1500, icon: Plane, color: "text-amber-500", strokeColor: "#f59e0b", overBudget: false },
  ]);

  // Form State for new budget
  const [newCatName, setNewCatName] = useState("");
  const [newCatLimit, setNewCatLimit] = useState("");

  const handleAddBudget = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName || !newCatLimit) return;
    const limitNum = parseFloat(newCatLimit);
    const newBudget: BudgetCategory = {
      id: Date.now().toString(),
      name: newCatName,
      spent: 0,
      limit: limitNum,
      icon: PiggyBank,
      color: "text-blue-500",
      strokeColor: "#3b82f6",
      overBudget: false
    };
    setBudgets([...budgets, newBudget]);
    setNewCatName("");
    setNewCatLimit("");
    setShowAddModal(false);
  };

  const totalSpent = budgets.reduce((acc, b) => acc + b.spent, 0);
  const totalLimit = budgets.reduce((acc, b) => acc + b.limit, 0);
  const overBudgetCount = budgets.filter(b => b.overBudget).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header Card & Summary */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white tracking-tight">Monthly Budgets</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                Apr 01 - Apr 30
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Track category limits, circular progress gauges, and savings allocation goals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterPeriod(filterPeriod === "April 2026" ? "March 2026" : "April 2026")}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <Calendar className="size-3.5 text-slate-400" />
              <span>{filterPeriod}</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition-all"
            >
              <Plus className="size-4" />
              <span>Add Budget</span>
            </button>
          </div>
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs text-slate-400 font-medium">Total Budget Pool</span>
            <p className="text-xl font-bold text-white mt-1">${totalLimit.toLocaleString()} USD</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs text-slate-400 font-medium">Total Spent</span>
            <p className="text-xl font-bold text-slate-200 mt-1">${totalSpent.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs text-slate-400 font-medium">Remaining Cash</span>
            <p className="text-xl font-bold text-emerald-400 mt-1">${(totalLimit - totalSpent).toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <span className="text-xs text-slate-400 font-medium">Over-Budget Categories</span>
            <p className="text-xl font-bold text-red-400 mt-1">{overBudgetCount} Alert{overBudgetCount === 1 ? "" : "s"}</p>
          </div>
        </div>
      </div>

      {/* CIRCULAR PROGRESS GAUGES GRID (Copying shadcn-fintech style) */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">Active Category Gauges</h2>
          <span className="text-xs text-slate-400 font-mono">8 Active Monitored Categories</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {budgets.map((b) => {
            const Icon = b.icon;
            const percentage = Math.min(Math.round((b.spent / b.limit) * 100), 100);
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const dashoffset = circumference - (percentage / 100) * circumference;

            return (
              <div key={b.id} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#0d1322] border border-white/5 hover:border-white/20 transition-all group">
                <div className="relative size-28">
                  {/* SVG Gauge */}
                  <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={b.strokeColor}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashoffset}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Center Icon */}
                  <div className={`absolute inset-0 flex items-center justify-center ${b.color}`}>
                    <Icon className="size-6 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="text-center w-full">
                  <p className="text-xs font-semibold text-white truncate">{b.name}</p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    ${b.spent} <span className="text-slate-600">/ ${b.limit}</span>
                  </p>
                  {b.overBudget ? (
                    <span className="inline-flex items-center gap-1 text-[10px] text-red-400 mt-1 font-semibold">
                      <AlertTriangle className="size-3" /> Over by ${b.spent - b.limit}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 mt-1 font-semibold">
                      <CheckCircle2 className="size-3" /> ${b.limit - b.spent} left
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SAVINGS GOALS CARDS */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white">Savings & Allocation Goals</h2>
            <p className="text-xs text-slate-400 mt-0.5">Progress towards long-term portfolio benchmarks</p>
          </div>
          <button 
            onClick={() => alert("Goal creation wizard")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all"
          >
            <Plus className="size-3.5" />
            <span>New Goal</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Vacation Fund", target: 5000, current: 3800, monthly: 400, date: "Dec 2026", status: "On track", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
            { title: "Emergency Reserve", target: 15000, current: 12500, monthly: 800, date: "Nov 2026", status: "On track", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
            { title: "Trading Desk Server", target: 25000, current: 14200, monthly: 600, date: "Jun 2027", status: "Behind", statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
            { title: "Real Estate Down Payment", target: 50000, current: 32000, monthly: 1200, date: "Dec 2027", status: "On track", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
          ].map((goal, idx) => {
            const pct = Math.round((goal.current / goal.target) * 100);
            return (
              <div key={idx} className="p-4 rounded-xl bg-[#0d1322] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">{goal.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${goal.statusColor}`}>
                    {goal.status}
                  </span>
                </div>

                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-400">Current Progress</span>
                  <span className="font-mono text-white font-semibold">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()} ({pct}%)</span>
                </div>

                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                  <span>Contrib: <strong className="text-white font-mono">+${goal.monthly}/mo</strong></span>
                  <span>Target Date: <strong className="text-slate-300 font-mono">{goal.date}</strong></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MONTH PROJECTION & HEATMAP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Month Projection</h3>
            <p className="text-xs text-slate-400">Estimated spending run-rate based on current velocity</p>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Spent So Far</span>
                <span className="font-bold text-white font-mono">$1,290</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Avg Daily Spend</span>
                <span className="font-bold text-blue-400 font-mono">$99.20 / day</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Days Left</span>
                <span className="font-bold text-emerald-400 font-mono">17 Days</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-3 border-t border-white/10">
                <span className="font-semibold text-white">Projected Month Total</span>
                <span className="font-bold text-amber-400 text-base font-mono">$2,977.00</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
            <Sparkles className="size-4 shrink-0 text-blue-400" />
            <span>You are tracking 4% under your total quarterly projection limit!</span>
          </div>
        </div>

        {/* SPENDING HEATMAP CALENDAR */}
        <div className="md:col-span-2 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">April Expenditure Velocity</h3>
            <span className="text-xs text-slate-400 font-mono">Daily Heatmap</span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
              <div key={i} className="text-slate-400 font-semibold py-1">{d}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const intensity = (day * 37) % 100;
              let bg = "bg-white/5 text-slate-400";
              if (intensity > 75) bg = "bg-red-500/40 text-red-200 border border-red-500/30 font-bold";
              else if (intensity > 45) bg = "bg-blue-600/40 text-blue-200 border border-blue-500/30";
              else if (intensity > 20) bg = "bg-emerald-500/30 text-emerald-200 border border-emerald-500/30";

              return (
                <div key={i} className={`p-2.5 rounded-lg flex flex-col items-center justify-center ${bg} hover:scale-105 transition-transform cursor-pointer`}>
                  <span className="text-xs">{day}</span>
                  <span className="text-[9px] opacity-75 font-mono">${(intensity * 3.5).toFixed(0)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ADD BUDGET MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-md bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Create Category Budget</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleAddBudget} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Category Name</label>
                <input
                  type="text"
                  placeholder="e.g. Cloud Infrastructure, Marketing"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly Limit ($ USD)</label>
                <input
                  type="number"
                  placeholder="1000"
                  value={newCatLimit}
                  onChange={(e) => setNewCatLimit(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                >
                  Save Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
