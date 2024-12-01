import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, it } from 'vitest';

import Counter from '~/components/Counter';

it('Should be rendered', async () => {
	const user = userEvent.setup();

	render(<Counter />);

	const button = screen.getByRole('button');

	await user.click(button);

	expect(button.textContent).includes('current: 1');
});
