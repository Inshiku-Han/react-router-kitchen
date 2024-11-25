import Counter from '~/components/counter';

import type { Route } from './+types';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'About' },
    { content: 'This is About!', name: 'description' },
  ];
};

export default function About() {
  return (
    <div>
      <header>
        <h1>
          Welcome to <span>Remix</span>
        </h1>
        <div>
          <img alt="Remix" src="/logo-light.png" />
        </div>
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}
