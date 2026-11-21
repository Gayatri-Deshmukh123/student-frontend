import { useState } from 'react'
import './App.css'

const Icon = ({ name, size = 18 }) => {
  const icons = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 16 4-4 3 3 5-7"/></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-1.42 1.42-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V20h-2v-.08a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-1.42-1.42.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.51-1H7v-2h.09A1.65 1.65 0 0 0 8.6 11a1.65 1.65 0 0 0-.33-1.82l-.06-.06 1.42-1.42.06.06A1.65 1.65 0 0 0 11.51 7a1.65 1.65 0 0 0 1-1.51V5h2v.49A1.65 1.65 0 0 0 15.49 7a1.65 1.65 0 0 0 1.82-.33l.06-.06 1.42 1.42-.06.06A1.65 1.65 0 0 0 19.4 11a1.65 1.65 0 0 0 1.51 1H21v2h-.09A1.65 1.65 0 0 0 19.4 15z"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>
}

const students = [
  { name: 'Alex Johnson', id: 'STU-2401', email: 'alex.j@student.edu', course: 'Computer Science', year: 'Year 3', status: 'Active', initials: 'AJ', color: 'blue' },
  { name: 'Sarah Chen', id: 'STU-2402', email: 'sarah.c@student.edu', course: 'Data Science', year: 'Year 2', status: 'Active', initials: 'SC', color: 'pink' },
  { name: 'Marcus Brown', id: 'STU-2403', email: 'marcus.b@student.edu', course: 'Information Tech', year: 'Year 4', status: 'Active', initials: 'MB', color: 'orange' },
  { name: 'Emma Wilson', id: 'STU-2404', email: 'emma.w@student.edu', course: 'Cyber Security', year: 'Year 1', status: 'On leave', initials: 'EW', color: 'purple' },
]

const navItems = [
  ['grid', 'Overview'], ['users', 'Students'], ['book', 'Courses'],
  ['chart', 'Reports'], ['server', 'Infrastructure'], ['settings', 'Settings'],
]

function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [search, setSearch] = useState('')
  const [studentRows, setStudentRows] = useState(students)
  const [notice, setNotice] = useState('')

  const visibleRows = studentRows.filter((student) =>
    `${student.name} ${student.id} ${student.course}`.toLowerCase().includes(search.toLowerCase())
  )

  const addStudent = () => {
    setStudentRows((rows) => [
      {
        name: 'New Student', id: `STU-${2405 + rows.length - 4}`, email: 'new.student@student.edu',
        course: 'Computer Science', year: 'Year 1', status: 'Active', initials: 'NS', color: 'green',
      },
      ...rows,
    ])
    setNotice('Student added successfully')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><span>SM</span></div>
          <span>StudentHub</span>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          {navItems.map(([icon, label]) => (
            <button
              key={label}
              className={`nav-item ${activeNav === label ? 'active' : ''}`}
              onClick={() => setActiveNav(label)}
              type="button"
            >
              <Icon name={icon} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="cluster-status">
          <div className="cluster-heading"><span>Cluster status</span><span className="live-dot"></span></div>
          <div className="cluster-name">prod-cluster-01</div>
          <div className="cluster-meta"><span>4 / 4 tiers</span><strong>Healthy</strong></div>
        </div>
        <div className="profile">
          <div className="avatar admin">GD</div>
          <div><strong>Gayatri D.</strong><span>Administrator</span></div>
          <Icon name="more" />
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">STUDENT MANAGEMENT</p>
            <h1>{activeNav}</h1>
          </div>
          <div className="header-actions">
            <label className="search-box">
              <Icon name="search" size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search students..."
                aria-label="Search students"
              />
            </label>
            <button className="icon-button" type="button" aria-label="Notifications"><Icon name="bell" /></button>
            <button className="add-button" type="button" onClick={addStudent}><Icon name="plus" /> Add student</button>
          </div>
        </header>

        {notice && <div className="notice" role="status">{notice}<button type="button" onClick={() => setNotice('')} aria-label="Dismiss">×</button></div>}

        <section className="stats-grid" aria-label="Student summary">
          <article className="stat-card"><div className="stat-icon blue"><Icon name="users" /></div><div><span>Total students</span><strong>1,248</strong><small className="up">↗ 12.5% <b>this month</b></small></div></article>
          <article className="stat-card"><div className="stat-icon green"><Icon name="book" /></div><div><span>Active courses</span><strong>48</strong><small><b>Across 8 departments</b></small></div></article>
          <article className="stat-card"><div className="stat-icon purple"><Icon name="chart" /></div><div><span>Avg. attendance</span><strong>94.2%</strong><small className="up">↗ 2.1% <b>this month</b></small></div></article>
          <article className="stat-card"><div className="stat-icon orange"><Icon name="server" /></div><div><span>System uptime</span><strong>99.99%</strong><small><b>Last 30 days</b></small></div></article>
        </section>

        <section className="content-grid">
          <article className="panel student-panel">
            <div className="panel-heading">
              <div><h2>Recent students</h2><p>Latest registrations</p></div>
              <button type="button" className="text-button" onClick={() => setActiveNav('Students')}>View all</button>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Student</th><th>Course</th><th>Year</th><th>Status</th><th aria-label="Actions"></th></tr></thead>
                <tbody>
                  {visibleRows.map((student) => (
                    <tr key={student.id}>
                      <td><div className="student-name"><div className={`avatar ${student.color}`}>{student.initials}</div><div><strong>{student.name}</strong><span>{student.id} · {student.email}</span></div></div></td>
                      <td>{student.course}</td><td>{student.year}</td>
                      <td><span className={`status ${student.status === 'Active' ? 'active' : 'leave'}`}>{student.status}</span></td>
                      <td><button className="row-menu" type="button" aria-label={`Actions for ${student.name}`}><Icon name="more" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visibleRows.length === 0 && <div className="empty-state">No students match your search.</div>}
            </div>
          </article>

          <article className="panel tier-panel">
            <div className="panel-heading"><div><h2>Kubernetes tiers</h2><p>Platform health</p></div><span className="healthy-badge">All systems healthy</span></div>
            <div className="tier-list">
              {[
                ['01', 'Frontend', 'React / Vite', '3 pods', 'green'],
                ['02', 'API Gateway', 'Node / Express', '4 pods', 'blue'],
                ['03', 'Application', 'Student Service', '6 pods', 'purple'],
                ['04', 'Database', 'PostgreSQL', '2 pods', 'orange'],
              ].map(([number, name, tech, pods, color]) => (
                <div className="tier-row" key={number}>
                  <div className={`tier-number ${color}`}>{number}</div>
                  <div className="tier-copy"><strong>{name}</strong><span>{tech}</span></div>
                  <div className="tier-pods"><span className="live-dot"></span>{pods}</div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
