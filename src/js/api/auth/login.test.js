/* global _:readonly */

import { login } from './login';

function fetchSuccess(
  status = 201,
  statusText = 'All good! Take a nice coffee and relax'
) {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
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
    const data = await login();
    expect(data).toBe('ChrTon31899@stud.noroff.no', 'VolvoXc70');
  });
});

describe('Login', () => {
  it('Fail', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const data = await login();
    expect(data).toBe('ChrTon31899@stud.noroff.no', 'VolvoXc70');
  });
});
