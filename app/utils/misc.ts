import { useEffect, useRef } from 'react';

export const double = (amount: number): number => amount * 2;

export const usePrevious = <T>(state: T): T | undefined => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = state;
	});

	return ref.current;
};
