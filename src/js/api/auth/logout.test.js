import { logout } from './logout';
import { index } from '../../storage/index.test';

const storage = index;

const token = storage;
const profile = storage;

const data = { token, profile };

describe('Logout', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = logout(data);
    expect(item).toBe(null || undefined);
  });
});
