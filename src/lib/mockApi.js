const NOTIFICATION_MESSAGES = [
  'New user signed up',
  'Report export complete',
  'Database backup finished',
  'API rate limit warning',
  'New comment on post #42',
  'Deployment pipeline succeeded',
  'Memory usage above 80%',
  'New support ticket opened',
  'Scheduled job completed',
  'SSL certificate renewed',
];

export const getRandomNotification = () => ({
  id: Date.now(),
  message: NOTIFICATION_MESSAGES[Math.floor(Math.random() * NOTIFICATION_MESSAGES.length)],
  timestamp: new Date().toLocaleTimeString(),
  type: Math.random() > 0.75 ? 'warning' : 'info',
});
