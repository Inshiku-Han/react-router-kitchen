import { redirect } from 'react-router';

import { APP_BASE_ROUTE } from '~/config/env';

export const clientLoader = () => {
	return redirect(APP_BASE_ROUTE);
};

export default function AppRoute() {
	return null;
}
