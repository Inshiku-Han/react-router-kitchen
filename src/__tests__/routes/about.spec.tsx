import { render } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { it } from 'vitest';

import About from '~/app/routes/about';

const initialPath = '/about';

it('Should be rendered', () => {
  const Stub = createRoutesStub([
    {
      Component: About,
      path: initialPath,
    },
  ]);

  render(<Stub initialEntries={[initialPath]} />);
});
