import { createPost } from './create';

const title = 'hello';
const body = 'Good bye';
const media = null;
const tags = ['tag-1', 'tag-2'];

const data = { title, body, media, tags };

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

describe('Create post', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await createPost(data);
    expect(item).toBe(data);
  });
});
