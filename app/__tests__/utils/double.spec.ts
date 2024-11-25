import { expect, it } from 'vitest';

import { double } from '~/utils/misc';

it('Should return', () => {
  expect(double(5)).equals(10);
});
