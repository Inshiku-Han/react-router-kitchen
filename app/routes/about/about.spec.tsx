import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { expect, it } from 'vitest';

import * as About from '~/routes/about';

it('About renders', async () => {
	const path = '/about';

	const Stub = createRoutesStub([
		{
			Component: About.default,
			path,
		},
	]);

	render(<Stub initialEntries={[path]} />);

	expect(screen.getByText('Remix')).toBeInTheDocument();
});
