import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "../Data/data-perks.json";

gsap.registerPlugin(ScrollTrigger);

export default function PerksComponent() {
  const perksRef = useRef(null);

  useEffect(() => {
    gsap.from(".perks", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".perks-map-data",
        toggleActions: "restart pause resume none",
      },
    });
    gsap.to(".perks", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".perks-map-data",
        toggleActions: "restart pause resume none",
      },
    });
  }, []);
  return (
    <div className="perks">
      {data.map((item) => (
        <div key={item.id} className="perks-map-data" ref={perksRef}>
          <img src={item.icon} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
