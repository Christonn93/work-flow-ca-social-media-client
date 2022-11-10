require('dotenv/config');

import { login } from './login';
import * as storage from '../../storage/index.js';

// Correct login details
const userEmail = process.env.API_EMAIL;
const userPassword = process.env.API_PASSWORD;
const userToken =
  'gdfsgfdsgs2eysadfasaJhbGciOiJdfdsfdsfsdfwqrfIUdfdsfzI1NidfsfdsfIsInsdfdsfdsgfsdgR5c';
const data = { email: userEmail, password: userPassword };

const mockResponse = {
  name: 'Christopher',
  email: process.env.API_EMAIL,
  banner: null,
  avatar: null,
  accessToken: userToken,
  password: process.env.API_PASSWORD,
};

// Mock login details
const mockEmail = 'email@email.com';
const mockPassword = '1234';
const mockData = { email: mockEmail, password: mockPassword };

// Function to retrieve a success login
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'All good! Take a nice coffee and relax',
    json: () => Promise.resolve(data),
  });
}

// Function to retrieve a fail login
function fetchFailure(status, statusText) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

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

describe('Authorization of user', () => {
  it('Login is a success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await login(data);
    const token = storage.save('token', userToken);
    const profile = storage.save('profile', data);
    localStorage.setItem(token, profile);
    console.log(localStorage);
    expect(response).toBe(mockResponse);
  });

  it('Login is a failure', async () => {
    global.fetch = jest.fn(() => fetchFailure(401, 'Unauthorized'));
    await expect(login(mockData)).rejects.toThrow('Unauthorized');
  });
});
