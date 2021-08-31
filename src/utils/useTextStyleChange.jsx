import { useState, useEffect } from "react";

const useTextStyleChange = (elemClass) => {
  const [randomNumbers, setRandomNumbers] = useState();

  useEffect(() => {
    const elems = document.querySelectorAll(elemClass);

    const body = document.querySelector(".body");
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top > window.innerHeight * 0.2 &&
          entry.boundingClientRect.top < window.innerHeight * 0.55
        ) {
          entry.target.classList.add("text-visible");
        } else {
          entry.target.classList.remove("text-visible");
        }
      }, {});
    });

    for (let i = 0; i < elems.length; i++) {
      observer.observe(elems[i]);
    }

    const generateRandomNumbers = () => {
      setRandomNumbers(Math.floor(Math.random() * 4));
    };

    body.addEventListener("scroll", generateRandomNumbers);
    return () => {
      body.removeEventListener("scroll", generateRandomNumbers);
    };
  }, [elemClass, randomNumbers]);

  return randomNumbers;
};

export default useTextStyleChange;
