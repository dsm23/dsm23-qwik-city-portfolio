import { component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { ClassNameValue } from "tailwind-merge";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import type { Maybe, Skill } from "~/generated/generated";

import styles from "./styles.module.css";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  class?: ClassNameValue;
  skills: Maybe<
    Skill & {
      svg: string;
    }
  >[];
}

const Skills = component$<Props>(({ skills = [], ...props }) => (
  <Section {...props}>
    <h2 class="text-5xl">Skills</h2>
    <div class="flex flex-wrap items-baseline print:gap-2">
      {skills.map((item) => (
        <Link
          href={`/skill/${item?.slug}`}
          class="group print:grid print:justify-items-center"
          key={`skills-${item?.skillName}`}
        >
          <div
            class={[
              styles.iconWrapper,
              "h-16 w-16 text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400",
            ]}
            dangerouslySetInnerHTML={item?.svg}
          />

          <div class="sr-only print:not-sr-only print:block">
            {item?.skillName}
          </div>

          <Tooltip>{item?.skillName}</Tooltip>
        </Link>
      ))}
    </div>
  </Section>
));

export default Skills;
