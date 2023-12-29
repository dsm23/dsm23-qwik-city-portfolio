import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import Qwik from ".";

test(`[Qwik Svg]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Qwik />);

  expect(screen.outerHTML).toBeTruthy();
});
