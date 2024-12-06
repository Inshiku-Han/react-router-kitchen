import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from '@react-router/dev/routes';

const appRoutes: RouteConfig = [
	layout('./routes/app/layout.tsx', [
		index('./routes/app/index.tsx'),
		...(process.env.APP_TYPE === 'dogs'
			? prefix('dogs', [index('./routes/app/dogs/index.tsx')])
			: prefix('cats', [index('./routes/app/cats/index.tsx')])),
		route('*?', './routes/app/404.tsx'),
	]),
];

export default [
	route('login', './routes/login.tsx'),
	...appRoutes,
] satisfies RouteConfig;
