import styles from './Designs/Home.module.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import {HomeHTML} from './HomeHTML';

export function Home() {
  useEffect(() => {
    function startLoader() {
      const counterElement = document.querySelector(`.${styles.counter}`);
      let num = 0;
      const time = setInterval(() => {
        num += 1;
        counterElement.textContent = num;
        if (num >= 100) {
          clearInterval(time);
        }
      }, 60);
    }

    startLoader();

    gsap.to(`.${styles.counter}`, {
      delay: 3.5,
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(`.${styles.bar}`, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <>
      <HomeHTML />
    </>
  );
}