document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            content.classList.toggle('active');
        });
    }

    // 2. Mock Data
    const stats = [
        { label: 'Total Patients', value: '4,120', icon: 'bi-people', color: 'primary', trend: '+12% weekly' },
        { label: 'Active Appointments', value: '264', icon: 'bi-calendar2-check', color: 'success', trend: '+3% yesterday' },
        { label: 'Total Operations', value: '52', icon: 'bi-hospital', color: 'warning', trend: '+5 this month' },
        { label: 'Hospital Earnings', value: '$84,200', icon: 'bi-currency-dollar', color: 'danger', trend: '+15% profit' }
    ];

    const appointments = [
        { name: 'Alice Smith', doctor: 'Dr. Sarah Wilson', time: '10:30 AM', status: 'Confirmed', img: 'https://i.pravatar.cc/150?u=alice' },
        { name: 'Bob Johnson', doctor: 'Dr. Gregory House', time: '11:45 AM', status: 'Pending', img: 'https://i.pravatar.cc/150?u=bob' },
        { name: 'Charlie Brown', doctor: 'Dr. Lisa Cuddy', time: '01:15 PM', status: 'Confirmed', img: 'https://i.pravatar.cc/150?u=charlie' },
        { name: 'Diana Prince', doctor: 'Dr. Eric Foreman', time: '02:30 PM', status: 'Cancelled', img: 'https://i.pravatar.cc/150?u=diana' },
        { name: 'Ethan Hunt', doctor: 'Dr. Robert Chase', time: '04:00 PM', status: 'Confirmed', img: 'https://i.pravatar.cc/150?u=ethan' }
    ];

    const doctors = [
        { name: 'Dr. Sarah Wilson', spec: 'Cardiologist', available: true },
        { name: 'Dr. James Wilson', spec: 'Oncologist', available: false },
        { name: 'Dr. Robert Chase', spec: 'Surgeon', available: true },
        { name: 'Dr. Allison Cameron', spec: 'Immunologist', available: true }
    ];

    // 3. Render Stats
    const renderStats = () => {
        const container = document.getElementById('stats-container');
        if (!container) return;

        container.innerHTML = stats.map(s => `
            <div class="col-md-6 col-lg-3">
                <div class="card border-0 shadow-sm stat-card">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-box bg-${s.color}-soft text-${s.color} me-3">
                                <i class="bi ${s.icon}"></i>
                            </div>
                            <h3 class="fw-bold mb-0">${s.value}</h3>
                        </div>
                        <p class="text-muted small mb-1">${s.label}</p>
                        <span class="text-success small fw-medium">${s.trend}</span>
                    </div>
                </div>
            </div>
        `).join('');
    };

    // 4. Render Appointments
    const renderAppointments = () => {
        const tableBody = document.getElementById('appointment-table');
        if (!tableBody) return;

        tableBody.innerHTML = appointments.map(app => {
            const statusClass = app.status === 'Confirmed' ? 'success' : app.status === 'Pending' ? 'warning' : 'danger';
            return `
                <tr>
                    <td class="ps-4">
                        <div class="d-flex align-items-center">
                            <img src="${app.img}" class="patient-avatar me-2" alt="">
                            <span class="fw-medium">${app.name}</span>
                        </div>
                    </td>
                    <td>${app.doctor}</td>
                    <td>${app.time}</td>
                    <td><span class="badge badge-soft-${statusClass}">${app.status}</span></td>
                    <td class="text-end pe-4">
                        <button class="btn btn-sm btn-icon border-0"><i class="bi bi-three-dots"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    };

    // 5. Render Doctors
    const renderDoctors = () => {
        const list = document.getElementById('doctor-list');
        if (!list) return;

        list.innerHTML = doctors.map(doc => `
            <li class="list-group-item border-0 px-4 py-3 d-flex align-items-center">
                <div class="bg-primary-soft text-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <i class="bi bi-person-fill"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="mb-0 fw-bold small">${doc.name}</h6>
                    <small class="text-muted">${doc.spec}</small>
                </div>
                <span class="badge rounded-pill ${doc.available ? 'bg-success' : 'bg-secondary'} small">
                    ${doc.available ? 'Available' : 'Busy'}
                </span>
            </li>
        `).join('');
    };

    // 6. Charts Implementation
    const initCharts = () => {
        // Line Chart
        const lineCtx = document.getElementById('admissionsChart').getContext('2d');
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Admissions',
                    data: [12, 19, 15, 25, 22, 30, 24],
                    borderColor: '#0d6efd',
                    backgroundColor: 'rgba(13, 110, 253, 0.05)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });

        // Doughnut Chart
        const doughnutCtx = document.getElementById('deptChart').getContext('2d');
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cardiology', 'Neurology', 'Surgery', 'Pediatrics'],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: ['#0d6efd', '#6610f2', '#10b981', '#f59e0b'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                cutout: '75%',
                plugins: { legend: { display: false } }
            }
        });
    };

    // Run Initializers
    renderStats();
    renderAppointments();
    renderDoctors();
    initCharts();
});
