import { component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import type { Maybe, Skill } from "~/generated/generated";

import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  skills: Maybe<
    Skill & {
      svg: string;
    }
  >[];
}

const Skills = component$<Props>(({ skills = [], ...props }) => (
  // TODO: change this
  // @ts-ignore
  <Section {...props}>
    <h2 class="text-5xl">Skills</h2>
    <div class="flex flex-wrap items-baseline">
      {skills.map((item) => (
        <Link
          href={`/skill/${item?.slug}`}
          class="group"
          key={`skills-${item?.skillName}`}
        >
          <span class="sr-only">{item?.skillName}</span>

          <div
            class={[
              styles.iconWrapper,
              "h-16 w-16 text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400",
            ]}
            dangerouslySetInnerHTML={item?.svg}
          />

          <Tooltip>{item?.skillName}</Tooltip>
        </Link>
      ))}
    </div>
  </Section>
));

export default Skills;
