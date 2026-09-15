"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Download, Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";

export function TransactionsView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const transactions = [
    { id: "TX-9901", description: "Spotify Subscription", category: "Entertainment", date: "Apr 15, 2026, 14:45", amount: "-$14.99", status: "Completed", method: "Virtual Card *8812" },
    { id: "TX-9902", description: "AWS Cloud Infrastructure", category: "Hosting & Servers", date: "Apr 14, 2026, 09:30", amount: "-$420.50", dateFull: "Apr 14, 2026", status: "Completed", method: "Corporate Debit" },
    { id: "TX-9903", description: "Stripe Merchant Payout", category: "Revenue Deposit", date: "Apr 14, 2026, 02:15", amount: "+$12,450.00", status: "Completed", method: "ACH Direct" },
    { id: "TX-9904", description: "Figma Pro Annual", category: "Design Tools", date: "Apr 12, 2026, 11:20", amount: "-$15.00", status: "Completed", method: "Virtual Card *8812" },
    { id: "TX-9905", description: "ChatGPT Plus & OpenAI API", category: "AI Services", date: "Apr 10, 2026, 18:05", amount: "-$128.40", status: "Completed", method: "Corporate Debit" },
    { id: "TX-9906", description: "Google Workspace Enterprise", category: "Productivity", date: "Apr 08, 2026, 08:00", amount: "-$18.00", status: "Completed", method: "Virtual Card *8812" },
    { id: "TX-9907", description: "Quant FX Arbitrage Settlement", category: "Trading Revenue", date: "Apr 05, 2026, 16:50", amount: "+$4,500.00", status: "Completed", method: "Wire Transfer" },
    { id: "TX-9908", description: "Bloomberg Terminal License", category: "Market Data", date: "Apr 01, 2026, 10:00", amount: "-$2,400.00", status: "Completed", method: "Corporate Bank Transfer" },
  ];

  const filteredTx = transactions.filter(t => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) || t.category.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterType === "Income") return matchesSearch && t.amount.startsWith("+");
    if (filterType === "Expense") return matchesSearch && t.amount.startsWith("-");
    return matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Transaction History</h1>
          <p className="text-sm text-slate-400 mt-1">Full immutable ledger for transfers, card payments, and payouts</p>
        </div>
        <button 
          onClick={() => alert("Exporting CSV report...")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all"
        >
          <Download className="size-4 text-slate-400" />
          <span>Export CSV Statement</span>
        </button>
      </div>

      {/* Filter and Search controls */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="size-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by merchant, category, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0d1322] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 bg-[#0d1322] p-1 rounded-xl border border-white/5 text-xs">
          {["All", "Income", "Expense"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                filterType === type ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions Data Table */}
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {filteredTx.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-slate-400">{tx.id}</td>
                  <td className="py-3.5 px-4 font-semibold text-white">{tx.description}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300 font-mono">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{tx.method}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{tx.date}</td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold text-sm ${tx.amount.startsWith("+") ? "text-emerald-400" : "text-slate-200"}`}>
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
