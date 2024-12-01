import { type ClassValue, clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const double = (amount: number): number => amount * 2;

export const usePrevious = <T>(state: T): T | undefined => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = state;
	});

	return ref.current;
};
