import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { expect, it } from 'vitest';

import * as Home from '~/routes/home';

it('Home renders', async () => {
  const path = '/';

  const Stub = createRoutesStub([
    {
      Component: Home.default,
      path,
    },
  ]);

  render(<Stub initialEntries={[path]} />);

  expect(screen.getByText('Remix')).toBeInTheDocument();
});
