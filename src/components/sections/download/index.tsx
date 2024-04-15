import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { Form, globalAction$ } from "@builder.io/qwik-city";
import Section from "~/components/section";
import Transition from "~/components/transition";
import ArrowDownTray from "~/components/svgs/arrow-down-tray";
import ThreeDots from "~/components/svgs/three-dots";

import sleep from "~/utils/sleep";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  class?: ClassNameValue;
}

const fetchPDF = async () => {
  const response = await fetch(
    import.meta.env.PUBLIC_ORIGIN_URL + "/api/create-pdf",
  );

  return new Uint8Array(await response.arrayBuffer());
};

export const useDownload = globalAction$(async () => {
  const [pdf] = await Promise.all([fetchPDF(), sleep(300)]);

  return pdf;
});

const Download = component$<Props>((props) => {
  const action = useDownload();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    /* eslint-disable qwik/valid-lexical-scope */
    track(() => action.value);

    if (action.value instanceof Uint8Array) {
      const blob = new Blob([action.value], { type: "applicaton/pdf" });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.download = "DavidMurdochCV.pdf";
      link.href = url;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      /* eslint-enable qwik/valid-lexical-scope */
    }
  });

  return (
    <Section {...props} class={twMerge("print:hidden", props.class)}>
      <h2 class="text-5xl">Download</h2>

      <Form action={action}>
        <button
          class="mt-8 flex items-center gap-x-2 rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          type="submit"
          disabled={action.isRunning}
        >
          <ArrowDownTray class="h-5 w-5" />
          Download this page as .pdf
          <Transition
            show={action.isRunning}
            // eslint-disable-next-line qwik/no-react-props
            className="grid"
            enter="transition-[grid-template-columns] motion-reduce:transition-none duration-150"
            enterFrom="grid-cols-[0fr]"
            enterTo="grid-cols-[1fr]"
            leave="transition-[grid-template-columns] motion-reduce:transition-none duration-150"
            leaveFrom="grid-cols-[1fr]"
            leaveTo="grid-cols-[0fr]"
          >
            <div class="overflow-hidden">
              <ThreeDots class="h-5 w-5" />
            </div>
          </Transition>
        </button>
      </Form>

      <pre class="mt-4 whitespace-pre-wrap break-normal font-mono">
        gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen
        -dNOPAUSE -dQUIET -dBATCH
        -sOutputFile=DavidMurdochCV-postGhostscript.pdf DavidMurdochCV.pdf
      </pre>
    </Section>
  );
});

export default Download;
