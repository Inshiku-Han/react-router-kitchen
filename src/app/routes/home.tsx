import type { MetaFunction } from "react-router";

import Counter from "~/components/counter";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { content: "This is Home!", name: "description" }];
};

export default function Home() {
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
