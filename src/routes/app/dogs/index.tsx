import Counter from '~/components/Counter';

export const clientLoader = () => {
	return null;
};

export default function AppDogsRoute() {
	return (
		<div>
			<h2>dogs</h2>
			<Counter />
		</div>
	);
}
