import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { cn, double, usePrevious } from './misc';

describe('cn function', () => {
	it('Should merge simple class names', () => {
		expect(cn(['w-2', 'p-4'])).toBe('w-2 p-4');
	});

	it('Should handle empty array', () => {
		expect(cn([])).toBe('');
	});

	it('Should handle array with empty strings', () => {
		expect(cn(['', 'p-4', '', 'm-2'])).toBe('p-4 m-2');
	});

	it('Should deduplicate class names', () => {
		expect(cn(['w-2', 'p-4', 'w-2'])).toBe('p-4 w-2');
	});

	it('Should handle undefined or null values in array', () => {
		expect(cn(['w-2', null, undefined, 'p-4'])).toBe('w-2 p-4');
	});

	it('Should handle mix of valid and invalid class names', () => {
		expect(cn(['w-2', '123invalid!', 'p-4'])).toBe('w-2 123invalid! p-4');
	});

	it('Should handle whitespace in input', () => {
		expect(cn([' w-2', ' p-4 ', 'm-2'])).toBe('w-2 p-4 m-2');
	});
});

describe('double function', () => {
	it('Should return', () => {
		expect(double(5)).equals(10);
	});
});

describe('usePrevious hook', () => {
	it('Should be return', () => {
		const { rerender, result } = renderHook(() => usePrevious(true));

		expect(result.current).toBeUndefined();

		rerender();

		expect(result.current).toBe(true);
	});
});
