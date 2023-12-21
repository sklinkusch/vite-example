# React + Typescript + Vite Example

## Implementation of Testing

1. Install the following packages:

- @testing-library/dom
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @vitest/ui
- vitest

2. Install the following scripts:

```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

3. Change your `vite.config.ts`:

```javascript
/// <reference types="vitest">
/// <reference types="vite/client">

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ...
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: false,
  },
});
```

4. Change your `tsconfig.json` that it contains:

```json
{
  "include": ["src", "@testing-library/jest-dom"]
}
```

5. Generate a file `src/setupTests.ts` with:

```javascript
/// <reference types="vitest-globals" />
import "@testing-library/jest-dom";
```

6. Generate a file `utils/test-utils.tsx` with

```jsx
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options
  });

  /* eslint-disable-next-line */
  export * from "@testing-library/react";
  export { default as userEvent } from "@testing-library/user-event";
  // overwrite render export
  export { customRender as render };
```

7. Try writing a test like in `MessageField.test.tsx`

## Implement fetching tests

Generate a file like `FetchField.test.tsx`:

```jsx
import { Mock, describe, expect, it, vi } from "vitest";
import FetchField from "./FetchField";
import { render } from "../../../utils/test-utils";

globalThis.fetch = vi.fn();

/* eslint-disable-next-line */
function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("tests on FetchField", () => {
  it("calls a fetch", () => {
    const mockResponse = [{ name: "Marchbrücke", id: "000", distance: 42 }];
    (globalThis.fetch as Mock).mockResolvedValue(
      createFetchResponse(mockResponse)
    );
    render(<FetchField />);
    expect(fetch).toHaveBeenCalled();
  });
});
```

Happy testing!
