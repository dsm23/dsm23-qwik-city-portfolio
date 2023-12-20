import { component$ } from "@builder.io/qwik";
import { Main, StyledGoBack } from "~/components";

const MathML = component$(() => (
  <Main class="w-full px-6 py-8">
    <StyledGoBack class="mb-4" href="/#projects" />

    <h1 class="text-4xl uppercase tracking-widest text-sky-600">
      MathML Core example
    </h1>
    <p>An example of MathML core supported in Chrome from v109+</p>

    <p class="container mx-auto">
      The infinite sum
      <math display="block">
        <mrow>
          <munderover>
            <mo>∑</mo>
            <mrow>
              <mi>n</mi>
              <mo>=</mo>
              <mn>1</mn>
            </mrow>
            <mrow>
              <mo>+</mo>
              <mn>∞</mn>
            </mrow>
          </munderover>
          <mfrac>
            <mn>1</mn>
            <msup>
              <mi>n</mi>
              <mn>2</mn>
            </msup>
          </mfrac>
        </mrow>
      </math>
      is equal to the real number
      <math display="inline">
        <mfrac>
          <msup>
            <mi>π</mi>
            <mn>2</mn>
          </msup>
          <mn>6</mn>
        </mfrac>
      </math>
      .
    </p>
  </Main>
));

export default MathML;