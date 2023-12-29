import { createDOM } from "@builder.io/qwik/testing";
import { test, expect, vi } from "vitest";
import Divisor from ".";

test(`[Divisor Component]: Should render`, async () => {
  const { screen, render } = await createDOM();

  const mockObserver = vi.fn();
  const mockSvg = vi.fn();

  vi.stubGlobal("IntersectionObserver", mockObserver);
  vi.stubGlobal("SVGSVGElement", mockSvg);

  await render(<Divisor />);

  expect(screen.outerHTML).toBeTruthy();
});
