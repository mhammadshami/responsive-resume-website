import React, { useEffect, useState } from "react";

// import icon
import { RiArrowUpSLine } from "react-icons/ri";

// import react scroll
import { animateScroll as scroll } from "react-scroll";
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="btn bg-accent h-14 w-14 fixed bottom-[10%] right-[10%] z-50 transition-all "
      >
        <div className="text-3xl ">
          <RiArrowUpSLine />
        </div>
      </button>
    )
  );
};

export default ScrollToTop;
