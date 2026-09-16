import { useState, useEffect } from 'react';

export function StatsCounter() {
  const [uptime, setUptime] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [errorRate, setErrorRate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const incomingRequests = Math.floor(Math.random() * 15) + 1;
      const errors = Math.random() < 0.1 ? 1 : 0;

      setUptime((prev) => prev + 1);
      setRequestCount(requestCount + incomingRequests);
      setErrorRate(errorRate + errors);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const errorPct = requestCount > 0
    ? ((errorRate / requestCount) * 100).toFixed(2)
    : '0.00';

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Uptime</span>
        <span className="stat-value">{uptime}s</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Total Requests</span>
        <span className="stat-value">{requestCount.toLocaleString()}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Error Rate</span>
        <span className="stat-value" style={{ color: errorRate > 0 ? '#ef4444' : 'inherit' }}>
          {errorPct}%
        </span>
      </div>
    </div>
  );
}
