import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import Main from ".";

test(`[Main Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Main>Hello, World!</Main>);

  expect(screen.outerHTML).toBeTruthy();
});
