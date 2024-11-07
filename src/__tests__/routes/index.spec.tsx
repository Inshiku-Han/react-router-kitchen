import { render } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { it } from 'vitest';

import Home from '~/app/routes/home';

const initialPath = '/';

it('Should be rendered', () => {
  const Stub = createRoutesStub([
    {
      Component: Home,
      path: initialPath,
    },
  ]);

  render(<Stub initialEntries={[initialPath]} />);
});
