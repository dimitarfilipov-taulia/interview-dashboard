import { useState, useEffect } from 'react';
import { StatsCounter } from './components/Dashboard/StatsCounter';
import { NotificationFeed } from './components/Dashboard/NotificationFeed';
import PasswordStrengthChecker from './components/PasswordStrengthChecker/PasswordStrengthChecker';
import RandomQuoteGenerator from './components/RandomQuoteGenerator/RandomQuoteGenerator';
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
          <span className="app-name">Interview Questions</span>
        </div>
        <nav className="app-nav">
          <button
            className={view === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={view === 'password-checker' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('password-checker')}
          >
            Password Checker
          </button>
          <button
            className={view === 'quote-generator' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setView('quote-generator')}
          >
            Quote Generator
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

      {view === 'password-checker' && (
        <main className="settings-page">
          <img
            alt="Password Strength Checker — Real-Time Validation demo"
            className="size-full object-cover"
            style={{width: 500}}
            src="/gifs/react-coding-problem-40.gif"
          />
          <h2>Password Strength Checker</h2>
          <PasswordStrengthChecker />
        </main>
      )}

      {view === 'quote-generator' && (
        <main className="settings-page">
          <img
            alt="Password Strength Checker — Real-Time Validation demo"
            className="size-full object-cover"
            style={{width: 500}}
            src="/gifs/react-coding-problem-47.gif"
          />
          <h2>Random Quote Generator</h2>
          <RandomQuoteGenerator />
        </main>
      )}
    </div>
  );
}
