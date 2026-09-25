import { useState, useEffect } from 'react';
import {
  StatsCounter,
  NotificationFeed,
  PasswordStrengthChecker,
  RandomQuoteGenerator,
  PaginatedGallery,
} from './components';
import { eventBus } from './lib/eventBus';
import { getRandomNotification } from './lib/mockApi';

const sections = [
  'home',
  'dashboard',
  'password-checker',
  'quote-generator',
  'paginated-gallery',
];

export default function App() {
  const [view, setView] = useState('home');
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
          <span className="app-name">Interview Questions</span>
        </div>
        <nav className="app-nav">
          {sections.map(section => (
            <button
              key={section}
              className={view === section ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setView(section)}
            >
              {section
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </button>
          ))}
        </nav>
      </header>

      {view === 'home' && (
        <main className="home-page">
          <div className="home-content">
            <img src="/gifs/cat.png" alt="Cat" className="cat-image" />
            <h2 className="good-luck">Good Luck!</h2>
          </div>
        </main>
      )}

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
                onClick={() => setShowFeed(v => !v)}
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
            style={{ width: 500 }}
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
            style={{ width: 500 }}
            src="/gifs/react-coding-problem-47.gif"
          />
          <h2>Random Quote Generator</h2>
          <RandomQuoteGenerator />
        </main>
      )}

      {view === 'paginated-gallery' && (
        <main className="settings-page">
          <img
            alt="Password Strength Checker — Real-Time Validation demo"
            className="size-full object-cover"
            style={{ width: 500 }}
            src="/gifs/react-coding-problem-35.gif"
          />
          <h2>Paginated Gallery</h2>
          <PaginatedGallery />
        </main>
      )}
    </div>
  );
}
