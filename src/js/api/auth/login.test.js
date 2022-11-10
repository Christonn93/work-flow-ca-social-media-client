require('dotenv/config');

import { login } from './login';
import * as storage from '../../storage/index.js';

// Mock login details
const mockEmail = 'email@email.com';
const mockPassword = '1234';
const mockResponse = {
  name: 'The ultimate code master',
  email: 'email@email.com',
  avatar:
    'https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg',
  banner: 'https://media.snl.no/media/178025/standard_Grumpy_Cat.jpg',
  accessToken: 'gdfsgfdsgs2eysadfasaJhbGciOiJdfdsfdsfsdfwqrfIUdfdsfz',
  password: '1234',
};
const mockData = { email: mockEmail, password: mockPassword };

// Function to retrieve a success login
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'All good! Take a nice coffee and relax',
    json: () => Promise.resolve(mockResponse),
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
    const response = await login(mockEmail, mockPassword);
    const token = storage.save('token', mockResponse.mockToken);
    const profile = storage.save(
      'profile',
      mockResponse.name,
      mockResponse.avatar,
      mockResponse.banner,
      mockResponse.email
    );
    localStorage.setItem(token, profile);
    expect(response).toEqual(mockResponse);
  });

  it('Login is a failure', async () => {
    global.fetch = jest.fn(() => fetchFailure(401, 'Unauthorized'));
    await expect(login(mockData)).rejects.toThrow('Unauthorized');
  });
});
