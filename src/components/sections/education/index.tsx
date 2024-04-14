import { component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";
import Section from "~/components/section";
import type { EducationSchool, Maybe } from "~/generated/generated";
import contentfulOptions from "~/utils/content-options";
import formatYears from "~/utils/format-years";
import { documentToQwikComponents } from "~/utils/rich-text-qwik-renderer";

import styles from "./styles.module.css";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  class?: ClassNameValue;
  education?: Maybe<EducationSchool>[];
}

const Education = component$<Props>(({ education = [], ...props }) => (
  <Section {...props}>
    <h2 class="text-5xl">Education</h2>

    {education.map((school) => (
      <div class={styles.container} key={`education-${school?.schoolName}`}>
        <h3 class={styles.school}>{school?.schoolName}</h3>

        <div class={twMerge(styles.dates, "text-sky-900 dark:text-sky-300")}>
          {formatYears(school?.startDate as string, school?.endDate as string)}
        </div>

        {school?.description && (
          <div class={styles.description}>
            {documentToQwikComponents(
              school.description.json,
              contentfulOptions,
            )}
          </div>
        )}
      </div>
    ))}
  </Section>
));

export default Education;
