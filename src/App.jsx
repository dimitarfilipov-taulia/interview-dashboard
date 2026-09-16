import { useState, useEffect } from 'react';
import { StatsCounter } from './components/StatsCounter';
import { NotificationFeed } from './components/NotificationFeed';
import { eventBus } from './lib/eventBus';
import { getRandomNotification } from './lib/mockApi';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [showFeed, setShowFeed] = useState(true);

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
          <span className="app-logo">◈</span>
          <span className="app-name">AdminDash</span>
        </div>
        <nav className="app-nav">
          <button
            className={view === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={view === 'settings' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('settings')}
          >
            Settings
          </button>
        </nav>
      </header>

      {view === 'dashboard' && (
        <main className="dashboard">
          <section className="card">
            <h2 className="card-title">Live Stats</h2>
            <StatsCounter />
          </section>

          <section className="card">
            <div className="card-header">
              <h2 className="card-title">Notifications</h2>
              <button
                className="btn-ghost"
                onClick={() => setShowFeed((v) => !v)}
              >
                {showFeed ? 'Hide' : 'Show'}
              </button>
            </div>
            {showFeed && <NotificationFeed />}
          </section>
        </main>
      )}

      {view === 'settings' && (
        <main className="settings-page">
          <h2>Settings</h2>
          <p>Nothing to configure yet.</p>
        </main>
      )}
    </div>
  );
}
