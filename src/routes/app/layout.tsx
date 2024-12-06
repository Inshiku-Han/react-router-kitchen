import { Link, Outlet, redirect, useNavigate } from 'react-router';
import Cookies from 'universal-cookie';

import { APP_BASE_ROUTE, APP_TYPE } from '~/config/env';

export const clientLoader = async () => {
	const cookies = new Cookies(null, { path: '/' });

	const accessToken = cookies.get('accessToken');

	if (!accessToken) {
		return redirect('/login');
	}

	return null;
};

export default function AppLayoutRoute() {
	const navigate = useNavigate();
	return (
		<div className="min-h-svh flex">
			<aside className="bg-red-400 flex flex-col justify-between w-sidebar">
				<div className="border-b">
					<h2>{APP_TYPE === 'dogs' ? 'Dog shop' : 'Cat shop'}</h2>
				</div>
				<div className="flex-1">
					<ul className="p-4">
						<li>
							<Link to={APP_BASE_ROUTE} className="flex w-full">
								{APP_TYPE === 'dogs' ? 'Dogs' : 'Cats'}
							</Link>
						</li>
						<li>
							<Link to="#" className="flex w-full">
								Link 2
							</Link>
						</li>
						<li>
							<Link to="#" className="flex w-full">
								Link 3
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="p-4">
						<li>
							<button
								type="button"
								className="flex w-full"
								onClick={() => {
									if (window.confirm('Logout?')) {
										const cookie = new Cookies(null, { path: '/' });
										cookie.remove('accessToken');

										navigate('/login');
									}
								}}
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</aside>
			<main className="flex-1 bg-blue-400 flex flex-col justify-between">
				<header className="bg-yellow-400">
					<nav>
						<Link to="#">Link 1</Link>
						<Link to="#">Link 2</Link>
						<Link to="#">Link 3</Link>
					</nav>
				</header>
				<div className="flex-1 bg-green-400">
					<Outlet />
				</div>
				<footer className="bg-indigo-400">Footer</footer>
			</main>
		</div>
	);
}
