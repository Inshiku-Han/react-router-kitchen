import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().email({
		message: 'Check email format',
	}),
	password: z.string().min(8, {
		message: 'Password must contain at least 8 character(s)',
	}),
});
