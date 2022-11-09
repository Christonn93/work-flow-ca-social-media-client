require('dotenv/config');

import { login } from './login';
import { index } from '../../storage/index.test';
index;

const userEmail = process.env.API_EMAIL;
const userPassword = process.env.API_PASSWORD;

const data = { email: userEmail, password: userPassword };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: 'All good! Take a nice coffee and relax',
    json: () => Promise.resolve(data),
  });
}

function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: 'Unauthorized',
  });
}

describe('Login', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const test = await login(data);
    expect(test).toBe(data);
  });

  /* it('Failure', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const test = await login(data);
    expect(test).toBe(response.statusText);
  }); */
});
