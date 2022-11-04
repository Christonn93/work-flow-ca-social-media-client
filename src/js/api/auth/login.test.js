import { login } from './login';

const userEmail = 'ChrTon31899@stud.noroff.no';
const userPassword = 'VolvoXc70';

const data = { email: userEmail, password: userPassword };

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
