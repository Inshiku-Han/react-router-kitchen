import { renderHook } from '@testing-library/react';
import { expect, it } from 'vitest';

import { usePrevious } from '~/utils/misc';

it('Should be return', () => {
	const { rerender, result } = renderHook(() => usePrevious(true));

	expect(result.current).toBeUndefined();

	rerender();

	expect(result.current).toBe(true);
});
