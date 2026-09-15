/* ==========================================================================
   SHAKURO TRADING PLATFORM DASHBOARD - Theme Switcher & Sparkline Renderer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();

    initThemeToggle();
    initSparklines();
    initDashboardChart();
    initOrderExecution();
    initPositionsTable();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Light & Dark Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('shakuro_theme') || 'dark';
    setTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('shakuro_theme', theme);

        if (themeLabel) {
            themeLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }

        if (themeIcon) {
            themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
            if (window.lucide) lucide.createIcons();
        }
    }
}

/* --------------------------------------------------------------------------
   2. Mini Sparkline Canvas Renderer for Summary Cards
   -------------------------------------------------------------------------- */
function initSparklines() {
    ['spark-1', 'spark-2', 'spark-3', 'spark-4'].forEach((id, idx) => {
        const canvas = document.getElementById(id);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width = 90;
        const height = canvas.height = 40;

        const points = [];
        let base = 20 + idx * 5;
        for (let i = 0; i < 12; i++) {
            base += (Math.random() - 0.45) * 3;
            points.push(base);
        }

        const min = Math.min(...points);
        const max = Math.max(...points);
        const step = width / (points.length - 1);

        ctx.beginPath();
        points.forEach((val, i) => {
            const x = i * step;
            const y = height - ((val - min) / (max - min || 1)) * (height - 8) - 4;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.strokeStyle = idx % 2 === 0 ? '#10B981' : '#EAB308';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

/* --------------------------------------------------------------------------
   3. Main Candlestick Chart Workspace
   -------------------------------------------------------------------------- */
function initDashboardChart() {
    const canvas = document.getElementById('dashboard-chart-canvas');
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

    let base = 2742.65;
    const candles = [];
    const numCandles = 36;

    for (let i = 0; i < numCandles; i++) {
        const open = base + (Math.random() - 0.48) * 1.5;
        const close = open + (Math.random() - 0.47) * 2.2;
        const high = Math.max(open, close) + Math.random() * 1.2;
        const low = Math.min(open, close) - Math.random() * 1.2;
        candles.push({ open, high, low, close });
        base = close;
    }

    setInterval(() => {
        const last = candles[candles.length - 1];
        const newClose = last.close + (Math.random() - 0.48) * 0.8;
        last.close = newClose;
        last.high = Math.max(last.high, newClose);
        last.low = Math.min(last.low, newClose);
    }, 1000);

    function drawChart() {
        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)';
        const bullishColor = isDark ? '#10B981' : '#059669';
        const bearishColor = isDark ? '#EF4444' : '#DC2626';

        const minP = Math.min(...candles.map(c => c.low)) - 1.0;
        const maxP = Math.max(...candles.map(c => c.high)) + 1.0;
        const range = maxP - minP;

        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        const rows = 5;
        for (let i = 0; i <= rows; i++) {
            const y = (height / rows) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        const candleWidth = (width / numCandles) * 0.65;
        const gap = width / numCandles;

        candles.forEach((c, idx) => {
            const x = idx * gap + gap / 2;
            const openY = height - ((c.open - minP) / range) * (height - 40) - 20;
            const closeY = height - ((c.close - minP) / range) * (height - 40) - 20;
            const highY = height - ((c.high - minP) / range) * (height - 40) - 20;
            const lowY = height - ((c.low - minP) / range) * (height - 40) - 20;

            const isBullish = c.close >= c.open;
            const color = isBullish ? bullishColor : bearishColor;

            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, highY);
            ctx.lineTo(x, lowY);
            ctx.stroke();

            ctx.fillStyle = color;
            const bodyY = Math.min(openY, closeY);
            const bodyH = Math.max(Math.abs(closeY - openY), 2);
            ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyH);
        });

        requestAnimationFrame(drawChart);
    }

    drawChart();
}

/* --------------------------------------------------------------------------
   4. Order Execution Drawer Logic
   -------------------------------------------------------------------------- */
function initOrderExecution() {
    const btnBuy = document.getElementById('tab-buy');
    const btnSell = document.getElementById('tab-sell');
    const btnExecute = document.getElementById('btn-execute-trade');
    let tradeType = 'BUY';

    if (btnBuy && btnSell && btnExecute) {
        btnBuy.addEventListener('click', () => {
            btnBuy.classList.add('active');
            btnSell.classList.remove('active');
            btnExecute.className = 'btn-execute buy';
            btnExecute.textContent = 'EXECUTE BUY ORDER';
            tradeType = 'BUY';
        });

        btnSell.addEventListener('click', () => {
            btnSell.classList.add('active');
            btnBuy.classList.remove('active');
            btnExecute.className = 'btn-execute sell';
            btnExecute.textContent = 'EXECUTE SELL ORDER';
            tradeType = 'SELL';
        });

        btnExecute.addEventListener('click', () => {
            const vol = document.getElementById('order-volume').value || '1.00';
            const sl = document.getElementById('order-sl').value || '2722.65';
            const tp = document.getElementById('order-tp').value || '2787.65';

            alert(`✅ Order Executed Successfully!\n\nType: ${tradeType}\nSymbol: XAU/USD\nVolume: ${vol} Lot\nSL: ${sl} | TP: ${tp}`);

            const tbody = document.getElementById('positions-tbody');
            if (tbody) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>XAU/USD</strong></td>
                    <td><span class="badge ${tradeType.toLowerCase()}">${tradeType}</span></td>
                    <td>${vol} Lot</td>
                    <td>2,742.65</td>
                    <td>2,742.65</td>
                    <td style="color:var(--bullish);">$0.00</td>
                    <td><button class="btn-close-pos">Close</button></td>
                `;
                tbody.prepend(tr);
                initPositionsTable();
            }
        });
    }
}

/* --------------------------------------------------------------------------
   5. Positions Table Action Handlers
   -------------------------------------------------------------------------- */
function initPositionsTable() {
    const closeBtns = document.querySelectorAll('.btn-close-pos');
    closeBtns.forEach(btn => {
        btn.onclick = (e) => {
            const row = e.target.closest('tr');
            if (row) {
                row.style.opacity = '0';
                setTimeout(() => row.remove(), 250);
            }
        };
    });
}
