# use-throttle-callback

useThrottleCallback is a custom React hook designed to prevent a function from being executed repeatedly in quick succession. For instance, when using an asynchronous fetch function, triggering it multiple times within a single second can lead to undesirable results. In such cases, useThrottleCallback provides an effective solution to control the execution frequency.

## Installation

```bash
npm install use-throttle-callback
# or
yarn add use-throttle-callback
```

## Usage

```tsx
import React, { useState } from "react";
import useThrottle from "use-throttle-callback";

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const throttledIncrement = useThrottle(() => {
    setCount((prev) => prev + 1);
  }, 500);

  return <button onClick={throttledIncrement}>Click me ({count})</button>;
};

export default ExampleComponent;
```

## API

### `useThrottle`

```typescript
const throttledFunction = useThrottle(callback: Function, delay: number): Function;
```

- **callback**: Function to execute
- **delay**: Delay time of the function to execute (ms)

## License

MIT
