class EventBus {
  constructor() {
    this._listeners = {};
  }

  subscribe(event, callback) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }
    this._listeners[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (!this._listeners[event]) return;
    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  publish(event, data) {
    (this._listeners[event] ?? []).forEach((cb) => cb(data));
  }

  listenerCount(event) {
    return (this._listeners[event] ?? []).length;
  }
}

export const eventBus = new EventBus();
