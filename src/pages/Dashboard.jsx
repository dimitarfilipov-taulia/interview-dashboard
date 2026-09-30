import { useState } from 'react';
import { StatsCounter, NotificationFeed } from '../components';

export default function Dashboard() {
  const [showFeed, setShowFeed] = useState(true);

  return (
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
  );
}
