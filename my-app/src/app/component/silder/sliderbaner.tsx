'use client'; // Nếu bạn dùng Next.js 13+

import React, { useState, useEffect } from 'react';
import styles from './sliderBanner.module.css';
import Image from "next/image";

const images = [
  {
    src: '/slider1.png',
  },
  {
    src: '/slider2.png',
  },
  {
    src: '/slide3.png',
   
  },
];

export default function SliderBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const setSlide = (index: number) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((img, index) => (
        <div
          key={index}
          className={styles.mySlides}
          style={{ display: index === current ? 'block' : 'none' }}
        >
          {/* <div className={styles.numberText}>{index + 1} / {images.length}</div> */}
          <Image height={200} width={1200} src={img.src} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <a className={styles.prev} onClick={prevSlide}>❮</a>
      <a className={styles.next} onClick={nextSlide}>❯</a>

      <div style={{ textAlign: 'center', marginTop: 12 }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ''}`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
