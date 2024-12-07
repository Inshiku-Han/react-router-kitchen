import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Form, redirect, useActionData } from 'react-router';
import Cookies from 'universal-cookie';

import { APP_BASE_ROUTE, APP_TITLE } from '~/config/env';
import { loginFormSchema } from '~/features/authentication/models/login';

import type { Route } from './+types/login';

export const meta: Route.MetaFunction = ({ matches }) => {
	const parentMeta = matches
		.flatMap((match) => match?.meta ?? [])
		.filter((meta) => !('title' in meta));

	return [
		...parentMeta,
		{
			title: `Login | ${APP_TITLE}`,
		},
		{
			name: 'description',
			content: 'You can login with email and password',
		},
	];
};

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
		lastResult,
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
		onValidate: ({ formData }) => {
			return parseWithZod(formData, { schema: loginFormSchema });
		},
	});

	return (
		<div className="min-h-svh grid place-items-center">
			<Form
				{...getFormProps(form)}
				method="post"
				className="border inline-grid gap-y-4 p-4 border-black"
			>
				<div>{form.errors}</div>
				<div className="flex flex-col gap-2">
					<label htmlFor={fields.email.id}>Email</label>
					<input
						{...getInputProps(fields.email, { type: 'email' })}
						autoComplete="username"
						placeholder="email"
						className="border aria-invalid:border-red-400 border-black"
					/>
					<small id={fields.email.errorId}>{fields.email.errors}</small>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor={fields.password.id}>Password</label>
					<input
						{...getInputProps(fields.password, { type: 'password' })}
						autoComplete="current-password"
						placeholder="password"
						className="border aria-invalid:border-red-400 border-black"
					/>
					<small id={fields.password.errorId}>{fields.password.errors}</small>
				</div>
				<button
					type="submit"
					disabled={!form.dirty}
					className="border border-black disabled:bg-gray-200"
				>
					Login
				</button>
			</Form>
		</div>
	);
}
