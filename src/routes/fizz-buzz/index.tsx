import { component$ } from "@builder.io/qwik";
import { Main, StyledGoBack } from "~/components";

const FizzBuzz = component$(() => {
  const listItems = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;

    switch (true) {
      case num % 3 === 0 && num % 5 === 0: {
        return "FizzBuzz";
      }
      case num % 5 === 0: {
        return "Buzz";
      }
      case num % 3 === 0: {
        return "Fizz";
      }
      default:
        return num;
    }
  });

  return (
    <Main class="w-full px-6 py-8">
      <StyledGoBack class="mb-4" href="/#projects" />

      <h1 class="text-4xl uppercase tracking-widest text-sky-600">FizzBuzz</h1>

      <div class="flex justify-center">
        <pre class="whitespace-pre-wrap break-normal font-mono">
          {`
            switch (true) {
              case num % 3 === 0 && num % 5 === 0: {
                return 'FizzBuzz';
              }
              case num % 5 === 0: {
                return 'Buzz';
              }
              case num % 3 === 0: {
                return 'Fizz';
              }
              default:
                return num;
            }
          `}
        </pre>
      </div>

      <ul role="list" class="space-y-3">
        {listItems.map((num, index) => (
          <li
            class="elevation overflow-hidden rounded-md bg-white px-6 py-4 text-center text-gray-900"
            key={`list-${num}-${index}`}
          >
            {num}
          </li>
        ))}
      </ul>
    </Main>
  );
});

export default FizzBuzz;
