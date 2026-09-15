"use client";

import React, { useState } from "react";
import { Wallet, Plus, ArrowUpRight, ArrowDownRight, CreditCard, ShieldCheck, Copy, Check, RefreshCw } from "lucide-react";

export function AccountsView() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (iban: string) => {
    navigator.clipboard.writeText(iban);
    setCopiedAccount(iban);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const accounts = [
    { name: "Euro Primary Treasury", balance: "€42,500.00", currency: "EUR", iban: "DE89 3704 0044 0532 0130 00", status: "Active", type: "Corporate Checking", bank: "Deutsche Bank AG" },
    { name: "US Dollar Liquidity Vault", balance: "$84,765.00", currency: "USD", iban: "US12 9920 1002 9482 1109 44", status: "Active", type: "Fedwire Direct", bank: "JPMorgan Chase" },
    { name: "Institutional Crypto Cold Wallet", balance: "1.24 BTC (~$84,320)", currency: "BTC", iban: "bc1q992f1837ac019283749102", status: "Multisig Locked", type: "Cold Vault", bank: "BitGo Custody" },
    { name: "Quant Alpha Reserve", balance: "$28,300.00", currency: "USD", iban: "US88 1902 4491 0029 4481 00", status: "Yield Earning", type: "Treasury Bills 5.2%", bank: "BNY Mellon" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Bank Accounts & Treasury</h1>
          <p className="text-sm text-slate-400 mt-1">Multi-currency accounts, SWIFT/IBAN details, and institutional vaults</p>
        </div>
        <button 
          onClick={() => alert("Open account wizard")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all"
        >
          <Plus className="size-4" />
          <span>Link New Account</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((acc, idx) => (
          <div key={idx} className="bg-[#111726] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <Wallet className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{acc.name}</h3>
                  <span className="text-xs text-slate-400">{acc.bank} • {acc.type}</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {acc.status}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1322] border border-white/5 space-y-2">
              <span className="text-xs text-slate-400">Available Balance</span>
              <p className="text-2xl font-bold text-white font-mono">{acc.balance}</p>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-400 font-mono text-[11px] truncate max-w-[240px]">{acc.iban}</span>
              <button
                onClick={() => copyToClipboard(acc.iban)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] transition-colors"
              >
                {copiedAccount === acc.iban ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                <span>{copiedAccount === acc.iban ? "Copied" : "Copy Details"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
