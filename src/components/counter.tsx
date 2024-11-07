import type { ComponentProps } from "react";

import { useCallback, useMemo, useState } from "react";

import { double, usePrevious } from "~/utils/misc";

type Props = Omit<ComponentProps<"button">, "onClick">;

export default function Counter(props: Props) {
  const [count, setCount] = useState<number>(0);

  const previous = usePrevious(count);

  const handleCount = useCallback(() => setCount((p) => p + 1), []);

  const doubledCount = useMemo(() => double(count), [count]);

  return (
    <button {...props} onClick={handleCount}>
      previous: {previous}
      <hr />
      current: {count}
      <hr />
      doubled: {doubledCount}
    </button>
  );
}
