import { render } from '@testing-library/react';
import { it } from 'vitest';

import Counter from '~/components/counter';

it('Should be rendered', () => {
  render(<Counter />);
});
