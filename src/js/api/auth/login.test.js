require('dotenv/config');

import { login } from './login';
import { index } from '../../storage/index.test';

const userEmail = process.env.API_EMAIL;
const userPassword = process.env.API_PASSWORD;

const data = { email: userEmail, password: userPassword };

const storage = index;

function fetchSuccess(
  status = 201,
  statusText = 'All good! Take a nice coffee and relax'
) {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(data),
  });
}

function fetchFailure(
  status = 404,
  statusText = 'All is not good! Take a nice coffee and start working on it'
) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('Login', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(data);
    expect(item).toBe(data);
  });
});

// THIS should test if the function for failure. By adding this a error comes up. Issue on this is create.
/*describe('Login', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const item = await login(data);
    expect(item).toBe(data);
  });
}); */
