import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import GitHub from ".";

test(`[GitHub Svg]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<GitHub />);

  expect(screen.outerHTML).toBeTruthy();
});
