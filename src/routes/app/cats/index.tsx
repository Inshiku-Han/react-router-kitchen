import Counter from '~/components/Counter';

export const clientLoader = () => {
	return null;
};

export default function AppCatsRoute() {
	return (
		<div>
			<h2>cats</h2>
			<Counter />
		</div>
	);
}
