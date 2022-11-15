import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductiveComponent() {
  const divImageRef = useRef(null);
  const divTextRef = useRef(null);

  useEffect(() => {
    gsap.from(".productive", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".productive",
        toggleActions: "restart pause resume none",
      },
    });
    gsap.to(".productive", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".productive",
        toggleActions: "restart pause resume none",
      },
    });
    gsap.from(".div-text", {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".productive",
        toggleActions: "restart pause resume none",
      },
    });
    gsap.to(".div-text", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".productive",
        toggleActions: "restart pause resume none",
      },
    });
  }, []);

  return (
    <section className="productive">
      <div ref={divImageRef}>
        <img
          src="images/illustration-stay-productive.png"
          alt=""
          id="productive"
        />
      </div>
      <div ref={divTextRef} className="div-text">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your life storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="productive-row">
          <button>See how Fylo works</button>
          <div>
            <img src="images/icon-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
