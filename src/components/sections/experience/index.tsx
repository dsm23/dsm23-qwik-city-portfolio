import { component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import Section from "~/components/section";
import type { ExperienceCompany, Maybe } from "~/generated/generated";
import contentfulOptions from "~/utils/content-options";
import formatYears from "~/utils/format-years";
import { documentToQwikComponents } from "~/utils/rich-text-qwik-renderer";

import styles from "./styles.module.css";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  class?: string;
  experience?: Maybe<ExperienceCompany>[];
}

const Experience = component$<Props>(({ experience = [], ...props }) => (
  <Section {...props}>
    <h2 class="text-5xl">Experience</h2>

    {experience.map((company) => (
      <div class={styles.container} key={`experience-${company?.companyName}`}>
        <h3 class={styles.company}>{company?.companyName}</h3>
        <div class={styles.city}>{company?.city}</div>

        <div class={twMerge(styles.dates, "text-sky-900 dark:text-sky-300")}>
          {formatYears(
            company?.startDate as string,
            company?.endDate as string,
          )}
        </div>

        {company?.description && (
          <div class={styles.description}>
            {documentToQwikComponents(
              company.description.json,
              contentfulOptions,
            )}
          </div>
        )}
      </div>
    ))}
  </Section>
));

export default Experience;
