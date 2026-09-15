"use client";

import React, { useState } from "react";
import { Send, ArrowLeftRight, CheckCircle2, ShieldCheck, Zap, User } from "lucide-react";

export function TransfersView() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !amount) return;
    setSentMessage(`Successfully initiated transfer of $${amount} to ${recipient}`);
    setTimeout(() => setSentMessage(null), 5000);
    setRecipient("");
    setAmount("");
    setNote("");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white tracking-tight">Transfers & Settlements</h1>
        <p className="text-sm text-slate-400 mt-1">Execute instant SWIFT, SEPA, and wire money transfers globally</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-4">New Money Transfer</h2>

          {sentMessage && (
            <div className="mb-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>{sentMessage}</span>
            </div>
          )}

          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Recipient Account / Email / IBAN</label>
              <input
                type="text"
                placeholder="e.g. sarah.chen@fintech.com or DE89 3704..."
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Transfer Amount ($ USD)</label>
                <input
                  type="number"
                  placeholder="5000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white font-mono text-base focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Speed / Network</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500">
                  <option>Instant Internal Transfer (0% Fee)</option>
                  <option>Fedwire Same-Day ($15 Flat)</option>
                  <option>SEPA Instant EUR</option>
                  <option>SWIFT International Wire</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Reference Note (Optional)</label>
              <input
                type="text"
                placeholder="Invoice #9921 settlement"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="size-4" />
              <span>Submit Money Transfer</span>
            </button>
          </form>
        </div>

        <div className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white">Transfer Limits & Guarantees</h3>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="p-3 rounded-xl bg-[#0d1322] border border-white/5 space-y-1">
              <span className="text-slate-300 font-semibold block">Daily Limit</span>
              <p className="font-mono text-white text-sm">$250,000.00 USD</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0d1322] border border-white/5 space-y-1">
              <span className="text-slate-300 font-semibold block">Monthly Volume</span>
              <p className="font-mono text-white text-sm">$2,500,000.00 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
