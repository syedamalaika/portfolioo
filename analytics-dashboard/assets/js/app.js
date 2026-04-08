document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. STATE & THEME LOGIC
    // ---------------------------------------------------------
    const state = {
        theme: localStorage.getItem('nexus_theme') || 'light',
        charts: {}
    };

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.getElementById('themeIcon');
        if (theme === 'dark') {
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
        localStorage.setItem('nexus_theme', theme);

        // Refresh charts on theme change to update colors (Optional but better)
        Object.values(state.charts).forEach(chart => chart.update());
    };

    // Initialize Theme
    applyTheme(state.theme);

    document.getElementById('themeToggle').addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        applyTheme(state.theme);
    });

    // ---------------------------------------------------------
    // 2. MOCK DATA
    // ---------------------------------------------------------
    const kpiData = [
        { label: 'Total Revenue', value: '$2.4M', trend: '+12.5%', icon: 'bi-currency-dollar', color: 'primary' },
        { label: 'Monthly Sales', value: '18,452', trend: '+8.2%', icon: 'bi-cart-check', color: 'success' },
        { label: 'Active Users', value: '45.2k', trend: '+2.4%', icon: 'bi-people', color: 'warning' },
        { label: 'Conversion Rate', value: '3.42%', trend: '-0.5%', icon: 'bi-graph-up-arrow', color: 'danger' }
    ];

    const activityData = [
        { date: 'Oct 12, 2026', user: 'Sophia Miller', action: 'Payment received', status: 'Success', id: '#34.2' },
        { date: 'Oct 12, 2026', user: 'Liam Wilson', action: 'New subscription', status: 'Pending', id: '#39.1' },
        { date: 'Oct 11, 2026', user: 'Noah Garcia', action: 'Refund processed', status: 'Failed', id: '#22.5' },
        { date: 'Oct 11, 2026', user: 'Emma Davis', action: 'Account upgrade', status: 'Success', id: '#54.1' },
        { date: 'Oct 10, 2026', user: 'James Smith', action: 'Product review', status: 'Success', id: '#12.9' }
    ];

    // ---------------------------------------------------------
    // 3. UI RENDERING
    // ---------------------------------------------------------
    const renderKPIs = () => {
        const container = document.getElementById('kpi-container');
        if (!container) return;

        container.innerHTML = kpiData.map(kpi => `
            <div class="col-md-6 col-xl-3">
                <div class="card border-0 shadow-sm kpi-card">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="icon-box-kpi bg-soft-${kpi.color} text-${kpi.color}" style="background-color: var(--primary-soft)">
                                <i class="bi ${kpi.icon}"></i>
                            </div>
                            <span class="badge rounded-pill ${kpi.trend.includes('+') ? 'bg-success-light text-success' : 'bg-danger-light text-danger'} px-3">
                                ${kpi.trend}
                            </span>
                        </div>
                        <h3 class="fw-bold mb-1">${kpi.value}</h3>
                        <p class="text-muted small mb-0 fw-medium">${kpi.label}</p>
                    </div>
                </div>
            </div>
        `).join('');
    };

    const renderActivity = () => {
        const tableBody = document.getElementById('activity-table');
        if (!tableBody) return;

        tableBody.innerHTML = activityData.map(act => {
            const badge = act.status === 'Success' ? 'success' : act.status === 'Pending' ? 'warning' : 'danger';
            return `
                <tr>
                    <td class="ps-4 text-muted small">${act.date}</td>
                    <td>
                        <div class="fw-bold">${act.user}</div>
                    </td>
                    <td>${act.action}</td>
                    <td><span class="badge badge-soft-${badge} px-3">${act.status}</span></td>
                    <td class="text-end pe-4 text-muted font-monospace">${act.id}</td>
                </tr>
            `;
        }).join('');
    };

    // ---------------------------------------------------------
    // 4. CHARTS CONFIGURATION
    // ---------------------------------------------------------
    const initCharts = () => {
        const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';
        const getLabelColor = () => isDark() ? '#94a3b8' : '#64748b';
        const getGridColor = () => isDark() ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

        // Common Chart Defaults
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = getLabelColor();

        // LINE CHART: Revenue
        const revCtx = document.getElementById('revenueChart');
        if (revCtx) {
            state.charts.revenue = new Chart(revCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Revenue',
                        data: [65000, 59000, 80000, 81000, 56000, 95000],
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: getGridColor() },
                            ticks: { color: getLabelColor() }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: getLabelColor() }
                        }
                    }
                }
            });
        }

        // DONUT CHART: User Dist
        const userCtx = document.getElementById('userDistChart');
        if (userCtx) {
            state.charts.users = new Chart(userCtx, {
                type: 'doughnut',
                data: {
                    labels: ['New', 'Returning', 'Dormant'],
                    datasets: [{
                        data: [45, 35, 20],
                        backgroundColor: ['#6366f1', '#10b981', '#f59e0b'],
                        borderWidth: 0,
                        hoverOffset: 12
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: { legend: { display: false } }
                }
            });
        }

        // BAR CHART: Sales Volume
        const barCtx = document.getElementById('salesBarChart');
        if (barCtx) {
            state.charts.sales = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Sales Vol',
                        data: [1200, 1900, 1500, 2100],
                        backgroundColor: '#6366f1',
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: getGridColor() },
                            ticks: { color: getLabelColor() }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: getLabelColor() }
                        }
                    }
                }
            });
        }
    };

    // ---------------------------------------------------------
    // 5. SIDEBAR HANDLERS (MOBILE)
    // ---------------------------------------------------------
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('sidebarClose');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
        });
    }

    // ---------------------------------------------------------
    // INITIALIZATION
    // ---------------------------------------------------------
    renderKPIs();
    renderActivity();
    initCharts();

    // Responsive Legend for Donut (Manual rendering for premium feel)
    const renderLegend = () => {
        const legendContainer = document.getElementById('donut-legend');
        const data = state.charts.users.data;
        legendContainer.innerHTML = data.labels.map((label, i) => `
            <div class="d-flex align-items-center mb-2 small">
                <div class="me-2 rounded-circle" style="width: 10px; height: 10px; background: ${data.datasets[0].backgroundColor[i]}"></div>
                <span>${label}</span>
                <span class="ms-auto fw-bold">${data.datasets[0].data[i]}%</span>
            </div>
        `).join('');
    };
    renderLegend();
});
