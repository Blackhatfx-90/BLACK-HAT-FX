/* ==========================================================================
   QUANTUMFX - Interactive Canvas, Live Terminal & Bot Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Initialize Ticker Bar
    initLiveTicker();

    // 3. Ambient Quantum Canvas Background
    initAmbientCanvas();

    // 4. Live Terminal Candlestick Canvas & Simulation Stream
    initTerminalChart();

    // 5. Bot Code Script Switcher
    initBotCodeVault();

    // 6. Number Counter Animations on Scroll
    initStatsCounter();
});

/* --------------------------------------------------------------------------
   1. Live Market Ticker
   -------------------------------------------------------------------------- */
function initLiveTicker() {
    const tickerEl = document.getElementById('live-ticker');
    if (!tickerEl) return;

    const items = [
        { symbol: 'XAU/USD', price: '2,742.65', change: '+18.40', pct: '+0.68%', up: true },
        { symbol: 'EUR/USD', price: '1.08450', change: '+0.0012', pct: '+0.11%', up: true },
        { symbol: 'GBP/USD', price: '1.29820', change: '-0.0024', pct: '-0.18%', up: false },
        { symbol: 'USD/JPY', price: '154.25', change: '+0.65', pct: '+0.42%', up: true },
        { symbol: 'AUD/USD', price: '0.66120', change: '+0.0008', pct: '+0.12%', up: true },
        { symbol: 'XAG/USD', price: '31.85', change: '+0.42', pct: '+1.34%', up: true },
        { symbol: 'US30', price: '42,850.00', change: '-120.5', pct: '-0.28%', up: false },
        { symbol: 'BTC/USD', price: '68,450.00', change: '+1,240.0', pct: '+1.85%', up: true }
    ];

    // Double the array for seamless infinite looping scroll
    const fullList = [...items, ...items, ...items];
    
    tickerEl.innerHTML = fullList.map(item => `
        <div class="ticker-item">
            <span class="ticker-symbol">${item.symbol}</span>
            <span class="ticker-price">${item.price}</span>
            <span class="ticker-change ${item.up ? 'up' : 'down'}">${item.change} (${item.pct})</span>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   2. Ambient Quantum Wave & Particle Mesh Background Canvas
   -------------------------------------------------------------------------- */
function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        color: Math.random() > 0.4 ? 'rgba(234, 179, 8, ' : 'rgba(6, 182, 212, '
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    const alpha = (1 - dist / 130) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(234, 179, 8, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + '0.4)';
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    draw();
}

/* --------------------------------------------------------------------------
   3. Live Terminal Candlestick Chart Canvas & Trade Simulation
   -------------------------------------------------------------------------- */
function initTerminalChart() {
    const canvas = document.getElementById('live-chart-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight;

    const resizeObserver = new ResizeObserver(() => {
        if (canvas.parentElement) {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        }
    });
    resizeObserver.observe(canvas.parentElement);

    // Initial price data points for XAU/USD gold wave
    let basePrice = 2742.65;
    const points = [];
    const numPoints = 40;
    
    for (let i = 0; i < numPoints; i++) {
        basePrice += (Math.random() - 0.48) * 1.8;
        points.push(basePrice);
    }

    // Live Execution Stream Log
    const logContainer = document.getElementById('execution-log');
    const priceDisplay = document.getElementById('gold-live-price');
    const changeDisplay = document.getElementById('gold-live-change');

    function addExecutionLog(action, botName, pair, price, lots, profit) {
        if (!logContainer) return;

        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.innerHTML = `
            <span class="log-time">[${timeStr}]</span>
            <span class="log-action ${action.toLowerCase()}">${action}</span> ${lots} ${pair} @ ${price} 
            <span style="color: var(--bullish-green); font-weight:600;">(+${profit})</span>
        `;
        logContainer.prepend(logItem);
        
        if (logContainer.children.length > 8) {
            logContainer.removeChild(logContainer.lastChild);
        }
    }

    // Add initial log entries
    addExecutionLog('BUY', 'AURA-GOLD', 'XAU/USD', '2741.20', '0.50', '$420.00');
    addExecutionLog('BUY', 'QUANTUM-FX', 'EUR/USD', '1.08420', '1.00', '$180.50');
    addExecutionLog('BUY', 'TITAN-HFT', 'XAU/USD', '2742.10', '0.25', '$310.00');

    // Interval to push new price points dynamically
    setInterval(() => {
        const delta = (Math.random() - 0.47) * 0.95;
        const currentPrice = points[points.length - 1] + delta;
        points.shift();
        points.push(currentPrice);

        // Update Header Displays
        if (priceDisplay) {
            priceDisplay.textContent = currentPrice.toFixed(2);
        }
        if (changeDisplay) {
            const diff = currentPrice - 2724.25;
            const pct = (diff / 2724.25) * 100;
            changeDisplay.textContent = `${diff >= 0 ? '+' : ''}${diff.toFixed(2)} (${diff >= 0 ? '+' : ''}${pct.toFixed(2)}%)`;
            changeDisplay.className = `pair-change ${diff >= 0 ? 'positive' : 'negative'}`;
        }

        // Randomly simulate trade execution
        if (Math.random() > 0.65) {
            const bots = ['AURA-GOLD v4', 'TITAN-HFT', 'QUANTUM_GRID'];
            const bot = bots[Math.floor(Math.random() * bots.length)];
            const action = Math.random() > 0.2 ? 'BUY' : 'SELL';
            const lots = (Math.random() * 0.8 + 0.1).toFixed(2);
            const profit = (Math.random() * 250 + 45).toFixed(2);
            addExecutionLog(action, bot, 'XAU/USD', currentPrice.toFixed(2), lots, `$${profit}`);
        }
    }, 1200);

    // Render Function
    function renderChart() {
        ctx.clearRect(0, 0, width, height);

        if (points.length === 0) return;

        const minVal = Math.min(...points) - 1.0;
        const maxVal = Math.max(...points) + 1.0;
        const range = maxVal - minVal;

        const stepX = width / (points.length - 1);

        // Draw horizontal gridlines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        const gridRows = 5;
        for (let i = 0; i <= gridRows; i++) {
            const y = (height / gridRows) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Calculate positions
        const coords = points.map((val, idx) => ({
            x: idx * stepX,
            y: height - ((val - minVal) / range) * (height - 60) - 30
        }));

        // Gradient Fill under curve
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(234, 179, 8, 0.28)');
        gradient.addColorStop(1, 'rgba(234, 179, 8, 0.0)');

        ctx.beginPath();
        ctx.moveTo(coords[0].x, coords[0].y);
        for (let i = 1; i < coords.length; i++) {
            const xc = (coords[i].x + coords[i - 1].x) / 2;
            const yc = (coords[i].y + coords[i - 1].y) / 2;
            ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
        }
        ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Stroke line
        ctx.beginPath();
        ctx.moveTo(coords[0].x, coords[0].y);
        for (let i = 1; i < coords.length; i++) {
            const xc = (coords[i].x + coords[i - 1].x) / 2;
            const yc = (coords[i].y + coords[i - 1].y) / 2;
            ctx.quadraticCurveTo(coords[i - 1].x, coords[i - 1].y, xc, yc);
        }
        ctx.strokeStyle = '#EAB308';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Glowing head point
        const lastCoord = coords[coords.length - 1];
        ctx.beginPath();
        ctx.arc(lastCoord.x, lastCoord.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#EAB308';
        ctx.shadowColor = '#EAB308';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        requestAnimationFrame(renderChart);
    }

    renderChart();
}

/* --------------------------------------------------------------------------
   4. Bot Code Repository Tab Switcher
   -------------------------------------------------------------------------- */
function initBotCodeVault() {
    const tabs = document.querySelectorAll('.bv-tab');
    const fileNameEl = document.getElementById('editor-file-name');
    const codeBlockEl = document.querySelector('.code-block code');
    const copyBtn = document.getElementById('btn-copy-code');
    const runBtn = document.getElementById('btn-run-backtest');

    const botScripts = {
        aura: {
            fileName: 'AURA-GOLD-v4.mq5',
            code: `// +------------------------------------------------------------------+
// | QuantumFX - AURA GOLD EA (XAU/USD Specialist)                   |
// | Copyright 2026, QuantumFX Algorithmic Trading Systems           |
// +------------------------------------------------------------------+
#property copyright "QuantumFX Algo Lab"
#property version   "4.20"
#property strict

input double   InpMaxSpread       = 12.0;    // Max Spread Limit (Pips)
input double   InpRiskPercent     = 1.5;     // Account Equity Risk %
input double   InpGoldTP_Pips     = 45.0;    // Target Take Profit (Pips)
input double   InpGoldSL_Pips     = 20.0;    // Trailing Stop Loss (Pips)
input bool     InpQuantumFilter   = true;    // Order Block Liquidity Sweep Filter

void OnTick()
{
   if(!IsNewBar()) return;
   double goldBid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double goldAsk = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
   
   if(InpQuantumFilter && DetectLiquiditySweep(goldBid))
   {
      ExecuteQuantumOrder(ORDER_TYPE_BUY, CalculateLotSize(InpRiskPercent), goldAsk, InpGoldSL_Pips, InpGoldTP_Pips);
      Print("[QUANTUM-FX] Liquidity Sweep Confirmed on XAU/USD. Buy Order Executed.");
   }
}`
        },
        quantum: {
            fileName: 'QUANTUM_GRID.py',
            code: `""
QuantumFX High-Frequency Arbitrage Engine (Python / MetaTrader5 API)
""
import MetaTrader5 as mt5
import numpy as np

SYMBOL = "XAUUSD"
LOT_SIZE = 0.50
DRAWDOWN_LIMIT = 0.05 # 5% hard stop safeguard

def run_quantum_strategy():
    if not mt5.initialize():
        print("Failed to connect to Quantum Execution FIX Bridge")
        return

    rates = mt5.copy_rates_from_pos(SYMBOL, mt5.TIMEFRAME_M1, 0, 100)
    close_prices = rates['close']
    
    # Calculate Bollinger Band & Quantum Volatility Index
    sma = np.mean(close_prices)
    std = np.std(close_prices)
    upper_band = sma + (2.0 * std)
    
    current_tick = mt5.symbol_info_tick(SYMBOL)
    if current_tick.ask > upper_band:
        print(f"[QUANTUM-BOT] Breakout confirmed at {current_tick.ask}. Executing Buy Order...")
        # Send FIX order to MetaTrader server

if __name__ == "__main__":
    run_quantum_strategy()`
        },
        titan: {
            fileName: 'TITAN_HFT.cs',
            code: `using System;
using cAlgo.API;
using cAlgo.API.Indicators;

namespace QuantumFX.Robots
{
    [Robot(TimeZone = TimeZones.UTC, AccessRights = AccessRights.None)]
    public class TitanHFTBot : Robot
    {
        [Parameter("Lot Size", DefaultValue = 1.0)]
        public double Quantity { get; set; }

        [Parameter("Take Profit Pips", DefaultValue = 30)]
        public double TakeProfitPips { get; set; }

        protected override void OnTick()
        {
            var currentSpread = Symbol.Spread / Symbol.PipSize;
            if (currentSpread > 1.5) return; // Spread Filter Guard

            if (MarketSeries.Close.Last(1) > MarketSeries.High.Last(2))
            {
                ExecuteMarketOrder(TradeType.Buy, SymbolName, Quantity, "TITAN_HFT", 15, TakeProfitPips);
                Print("[TITAN-HFT] Direct cTrader FIX Execution Triggered.");
            }
        }
    }
}`
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const botKey = tab.getAttribute('data-bot');
            if (botScripts[botKey]) {
                if (fileNameEl) fileNameEl.textContent = botScripts[botKey].fileName;
                if (codeBlockEl) codeBlockEl.textContent = botScripts[botKey].code;
            }
        });
    });

    if (copyBtn && codeBlockEl) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlockEl.textContent).then(() => {
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i data-lucide="check" style="color:var(--bullish-green);"></i>';
                if (window.lucide) lucide.createIcons();
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    if (window.lucide) lucide.createIcons();
                }, 2000);
            });
        });
    }

    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const originalText = runBtn.innerHTML;
            runBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Backtesting...';
            if (window.lucide) lucide.createIcons();
            
            setTimeout(() => {
                alert('🚀 Backtest Complete!\n\nStrategy: XAU/USD Specialist\nPeriod: 2024 - 2026\nWin Rate: 94.8%\nProfit Factor: 3.42\nMax Drawdown: 2.15%');
                runBtn.innerHTML = originalText;
                if (window.lucide) lucide.createIcons();
            }, 1200);
        });
    }
}

/* --------------------------------------------------------------------------
   5. Numerical Stats Counter Animation on Scroll
   -------------------------------------------------------------------------- */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateCounters() {
        if (animated) return;

        const triggerBottom = window.innerHeight * 0.85;
        statNumbers.forEach(numEl => {
            const rect = numEl.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                animated = true;
                const target = parseFloat(numEl.getAttribute('data-target'));
                const duration = 2000;
                const startTime = performance.now();

                function update(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                    
                    const current = (easeProgress * target).toFixed(target % 1 === 0 ? 0 : 1);
                    numEl.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        numEl.textContent = target;
                    }
                }

                requestAnimationFrame(update);
            }
        });
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Initial check
}
