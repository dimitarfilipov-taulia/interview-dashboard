import { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { eventBus } from './lib/eventBus';
import { getRandomNotification } from './lib/mockApi';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PasswordChecker from './pages/PasswordChecker';
import QuoteGenerator from './pages/QuoteGenerator';
import PaginatedGalleryPage from './pages/PaginatedGalleryPage';

const sections = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/password-checker', label: 'Password Checker' },
  { path: '/quote-generator', label: 'Quote Generator' },
  { path: '/paginated-gallery', label: 'Paginated Gallery' },
];

export default function App() {
  // Simulate backend pushing notifications every 3 s
  useEffect(() => {
    const interval = setInterval(() => {
      eventBus.publish('notification', getRandomNotification());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-brand">
          <span className="app-name">Interview Questions</span>
        </div>
        <nav className="app-nav">
          {sections.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/paginated-gallery" element={<PaginatedGalleryPage />} />
      </Routes>
    </div>
  );
}
