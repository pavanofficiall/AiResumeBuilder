import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function HorizontalScroll() {
  const comp = useRef(null);
  const textRef = useRef(null); // Reference for the h1

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger:0.3,
        delay:2
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="relative">
      <h1 id="text-1" ref={textRef} className="text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, velit.
        Aut ratione dolores dolor similique accusantium dignissimos, aliquam
        nemo sequi!
      </h1>
    </div>
  );
}

export default HorizontalScroll;
