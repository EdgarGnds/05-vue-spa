/* eslint-disable @typescript-eslint/no-explicit-any */
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import type { RouteLocationNormalized } from 'vue-router';

describe('is-aunthenticated.guard', () => {
  const to: RouteLocationNormalized = {
    name: undefined,
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    meta: {},
    path: '/home-screen',
    params: {},
  };

  const from: any = {};
  const next = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  test('should block if not authenticated', async () => {
    await isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({
      name: 'login',
    });
  });

  test('should called localstorage set item lastPath', async () => {
    await isAuthenticatedGuard(to, from, next);

    const lastPath = localStorage.getItem('lastPath');

    expect(lastPath).toBe(to.path);
  });

  test('should block if not authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    await isAuthenticatedGuard(to, from, next);

    expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path);
  });

  test('should pass if authenticated', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('ABC-123456');

    await isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith();
  });
});
