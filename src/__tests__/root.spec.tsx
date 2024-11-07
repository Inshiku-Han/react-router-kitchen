import { render } from '@testing-library/react';
import { it } from 'vitest';

import App from '~/app/root';

it('Should be rendered', () => {
  render(<App />);
});
