import { useState, useEffect } from 'react';
import { eventBus } from '../lib/eventBus';

export function NotificationFeed() {
  const [notifications, setNotifications] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const handleNotification = (notification) => {
      setNotifications((prev) => [notification, ...prev].slice(0, 5));
    };

    eventBus.subscribe('notification', handleNotification);
  }, [isPaused]);

  return (
    <div>
      <div className="feed-controls">
        <button
          className={isPaused ? 'btn-primary' : 'btn-secondary'}
          onClick={() => setIsPaused((p) => !p)}
        >
          {isPaused ? '▶ Resume' : '⏸ Pause'}
        </button>
        <button className="btn-ghost" onClick={() => setNotifications([])}>
          Clear
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="empty-state">Waiting for notifications…</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((n, i) => (
            <li key={n.id} className={`notification-item ${n.type}`}>
              <span className="notification-message">{n.message}</span>
              <span className="notification-time">{n.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
