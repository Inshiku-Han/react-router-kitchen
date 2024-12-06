import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Form, redirect, useActionData } from 'react-router';
import Cookies from 'universal-cookie';

import { APP_BASE_ROUTE } from '~/config/env';

import { loginFormSchema } from '~/features/authentication/models/login';

import type { Route } from './+types/login';

export const meta: Route.MetaFunction = () => [
	{
		title: 'Login',
	},
];

export const clientAction = async ({ request }: Route.ClientActionArgs) => {
	const formData = await request.formData();
	const submission = parseWithZod(formData, { schema: loginFormSchema });

	if (submission.status !== 'success') {
		return submission.reply();
	}

	const cookies = new Cookies(null, { path: '/' });

	cookies.set('accessToken', '1', {
		maxAge: 1000 * 60 * 24,
	});

	return redirect(APP_BASE_ROUTE);
};

export default function LoginRoute() {
	const lastResult = useActionData();
	const [form, fields] = useForm({
		shouldValidate: 'onSubmit',
		lastResult,
		onValidate: ({ formData }) => {
			return parseWithZod(formData, { schema: loginFormSchema });
		},
	});

	return (
		<Form
			method="post"
			id={form.id}
			onSubmit={form.onSubmit}
			className="border inline-grid"
		>
			<div>{form.errors}</div>
			<div>
				<label htmlFor="login.email">Username</label>
				<input
					id="login.email"
					type="email"
					autoComplete="username"
					required
					name={fields.email.name}
					className="border"
				/>
				<small>{fields.email.errors}</small>
			</div>
			<div>
				<label htmlFor="login.password">Password</label>
				<input
					id="login.password"
					type="password"
					autoComplete="current-password"
					required
					name={fields.password.name}
					className="border"
				/>
				<small>{fields.password.errors}</small>
			</div>
			<button type="submit">Login</button>
		</Form>
	);
}
