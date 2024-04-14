import { component$, useComputed$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import Anchor from "~/components/anchor";
import Section from "~/components/section";
import SectionHeader from "~/components/section-header";
import {
  ArrowTopRightOnSquare,
  CodeSandbox,
  Gatsby,
  GitHub,
  Solid,
} from "~/components/svgs";
import Next from "~/components/svgs/next";
import Nuxt from "~/components/svgs/nuxt";
import Qwik from "~/components/svgs/qwik";
import type { Maybe, Person } from "~/generated/generated";

interface Props extends HTMLAttributes<HTMLElement> {
  author?: Maybe<Person>;
  // TODO: change later
  class?: string;
}

const Home = component$<Props>(({ author, ...props }) => {
  const firstName = useComputed$(() => author?.firstName);
  const lastName = useComputed$(() => author?.lastName);
  const email = useComputed$(() => author?.email);
  const phone = useComputed$(() => author?.phone);
  const codesandbox = useComputed$(() => author?.codesandbox);
  const github = useComputed$(() => author?.github);
  const shortBio = useComputed$(() => author?.shortBio);
  const gatsbyPortfolio = useComputed$(() => author?.gatsbyPortfolio);
  const nextPortfolio = useComputed$(() => author?.nextPortfolio);
  const nuxtPortfolio = useComputed$(() => author?.nuxtPortfolio);
  const qwikCityPortfolio = useComputed$(() => author?.qwikCityPortfolio);
  const solidStartPortfolio = useComputed$(() => author?.solidStartPortfolio);

  return (
    <Section {...props}>
      <SectionHeader>
        <span class="text-gray-900 dark:text-white">{firstName.value}</span>{" "}
        <span class="text-sky-900 dark:text-sky-300">{lastName.value}</span>
      </SectionHeader>
      <address>
        London-based · {phone.value} ·{" "}
        {
          // TODO: just why?
        }
        <Anchor href={`mailto:${email.value}`} class="">
          {email.value}
        </Anchor>
      </address>
      <p class="mt-4 text-gray-900 dark:text-white">{shortBio.value}</p>
      <div class="ml-6 mt-4 grid justify-start space-y-4">
        <a
          href={github.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub aria-hidden="true" />
          GitHub/dsm23
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={codesandbox.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CodeSandbox aria-hidden="true" />
          CodeSandbox/dsm23
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={gatsbyPortfolio.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Gatsby aria-hidden="true" />
          Gatsby portfolio
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={nextPortfolio.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Next aria-hidden="true" />
          Next portfolio
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={nuxtPortfolio.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Nuxt aria-hidden="true" />
          Nuxt portfolio
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={qwikCityPortfolio.value ?? ""}
          class="hidden transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900 print:flex"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Qwik aria-hidden="true" />
          Qwik City portfolio
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={solidStartPortfolio.value ?? ""}
          class="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Solid aria-hidden="true" />
          Solid Start portfolio
          <ArrowTopRightOnSquare class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
});

export default Home;
