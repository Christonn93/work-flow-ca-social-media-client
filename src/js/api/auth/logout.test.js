import { logout } from './logout';
import * as storage from '../../storage/index.js';

// Mock localstorage
class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(token) {
    return this.value[token] || null;
  }

  setItem(token, value) {
    this.value[token] = String(value);
  }

  removeItem(token) {
    delete this.value[token];
  }
}

global.localStorage = new LocalStorageMock();

describe('Logout the user', () => {
  it('Logout is a success', () => {
    logout();
    const token = localStorage.getItem('token');
    expect(token).toBe(null);
  });
});
