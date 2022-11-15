import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "../Data/data-testimonials.json";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const mapDivRef = useRef(null);

  useEffect(() => {
    gsap.from(".testimonials-div", {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".testimonials-div",
        toggleActions: "restart pause resume none",
      },
    });
    gsap.to(".testimonials-div", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".testimonials-div",
        toggleActions: "restart pause resume none",
      },
    });
  }, []);
  return (
    <div className="testimonials-div">
      <img src="images/bg-quotes.png" alt="" className="quotes" />
      {data.map((item) => (
        <div key={item.id} className="bg-card">
          <div className="map-div">
            <p>{item.text}</p>
            <div className="map-row" ref={mapDivRef}>
              <div>
                <img src={item.avatar} alt="" />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p className="position">{item.position}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
