import {
  $,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";

type Props = SVGProps<SVGSVGElement>;

const Divisor = component$<Props>((props) => {
  const animationContainer = useSignal<SVGSVGElement>();
  const leftCurve = useSignal<SVGAnimateElement>();
  const rightCurve = useSignal<SVGAnimateElement>();
  const leftBall = useSignal<SVGAnimateMotionElement>();
  const rightBall = useSignal<SVGAnimateMotionElement>();

  const autoplay = useSignal<boolean>(false);

  const callback = $((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        autoplay.value = true;
      }
    });
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    if (animationContainer.value instanceof SVGSVGElement) {
      observer.observe(animationContainer.value);
    }

    return () => {
      observer.disconnect();
    };
  });

  useTask$(({ track }) => {
    track(() => autoplay.value);
    if (autoplay.value) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      leftCurve.value!.beginElement();
      rightCurve.value!.beginElement();
      leftBall.value!.beginElement();
      rightBall.value!.beginElement();
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
  });

  return (
    <svg
      {...props}
      ref={animationContainer}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 260 50"
      class={["w-full text-sky-200 lg:px-28 print:hidden", props.class]}
      stroke="currentColor"
    >
      <path
        stroke-dasharray="134"
        stroke-dashoffset="-134"
        d="
      M10,25
      C30,40
      30,10
      50,25
      70,40
      70,10
      90,25
      110,40
      110,10
      130,25
      "
      >
        <animate
          ref={leftCurve}
          attributeName="stroke-dashoffset"
          to="0"
          dur="2500ms"
          fill="freeze"
          begin="indefinite"
        />
      </path>
      <path
        stroke-dasharray="134"
        stroke-dashoffset="134"
        d="
      M130,25
      C150,40
      150,10
      170,25
      190,40
      190,10
      210,25
      230,40
      230,10
      250,25
  "
      >
        <animate
          ref={rightCurve}
          attributeName="stroke-dashoffset"
          to="0"
          dur="2500ms"
          fill="freeze"
          begin="indefinite"
        />
      </path>
      <circle
        cx="10"
        cy="25"
        r="4"
        fill="currentColor"
        class="text-blue-300"
        visibility={!autoplay.value ? "hidden" : "visible"}
      >
        <animateMotion
          ref={leftBall}
          dur="2500ms"
          repeatCount="1"
          begin="indefinite"
          path="M120,0 C100,-15
          100,15
          80,0
          60,-15
          60,15
          40,0
          20,-15
          20,15
          0,0"
        />
      </circle>
      <circle
        cx="250"
        cy="25"
        r="4"
        fill="currentColor"
        class="text-sky-500"
        visibility={!autoplay.value ? "hidden" : "visible"}
      >
        <animateMotion
          ref={rightBall}
          dur="2500ms"
          repeatCount="1"
          begin="indefinite"
          path="M-120,0 C-100,15
        -100,-15
        -80,0
        -60,15
        -60,-15
        -40,0
        -20,15
        -20,-15
        0,0"
        />
      </circle>
    </svg>
  );
});

export default Divisor;
