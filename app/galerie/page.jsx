'use client';
import { useState } from 'react';
import styles from './gallerie.module.scss';
import RoundedSlideButton from '../components/buttons/RoundedSlideButton';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Galerie() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const getPositionClass = (index) => {
    const relativeIndex = (index - currentIndex + PROJECTS.length) % PROJECTS.length;
    return relativeIndex - 2;
  };

  return (
    <>
      <Navbar />
      <section className={styles.galleryPage}>
        <div className={styles.galleryWrap}>
          {PROJECTS.map((project, index) => {
            const position = getPositionClass(index);
            return (
              <div
                key={project.id}
                className={`${styles.cardGallery}`}
                style={{
                  transform: `translateX(${position === 0 ? 0 : position < 0 ? position * 100 - 20 : position * 100 + 20}%) scale(${position === 0 ? 1 : position === -2 || position === 2 ? 0.75 : 0.9})`,
                  opacity: position < -2 || position > 2 ? 0 : position === 0 ? 1 : position === -2 || position === 2 ? 0.1 : 0.2,
                  zIndex: position < -2 || position > 2 ? 0 : position === 0 ? 30 : position === -2 || position === 2 ? 10 : 20,
                  boxShadow: position === 0 ? "0px 0px 100px 1px rgba(255, 255, 255, 0.2)" : "none",
                  borderRadius: "35px",
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-auto max-w-[400px] transition-opacity duration-500 ease-in-out"
                />
                {position === 0 && (
                  <div className={styles.info}>
                    <p>
                      <span>&#123;</span>
                      {project.cat}
                      <span>&#125;</span>
                    </p>
                    <h3>{project.title}</h3>
                    <RoundedSlideButton text="voir le projet" link={project.link} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.controls}>
          <button onClick={handlePrev}><FaChevronLeft /></button>
          <button onClick={handleNext}><FaChevronRight /></button>
        </div>
      </section>
      <Footer />
    </>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: 'Delta Invested',
    img: '/img/accueil/gallery/delta.png',
    cat: 'application web',
    link: 'https://deltainvested.com/',
  },
  {
    id: 2,
    title: 'Ca va Smasher',
    img: '/img/accueil/gallery/cvs.png',
    cat: 'website',
    link: 'https://cava-smasher.fr/',
  },
  {
    id: 3,
    title: "L'arbre a Pains",
    img: '/img/accueil/gallery/larbre.png',
    cat: 'application web',
    link: 'https://www.larbreapains.fr/',
  },
  {
    id: 4,
    title: 'JBY Renovation',
    img: '/img/accueil/gallery/jby.png',
    cat: 'website',
    link: 'https://jbyrenovation.fr/',
  },
  {
    id: 5,
    title: 'Ornissa',
    img: '/img/accueil/gallery/ornissa.png',
    cat: 'e-commerce',
    link: 'https://ornissa.com/',
  },
  {
    id: 6,
    title: "Bill's Burger",
    img: '/img/accueil/gallery/bills.png',
    cat: 'website',
    link: 'https://bills-burger.fr/',
  },
  {
    id: 7,
    title: 'Like-Up',
    img: '/img/accueil/gallery/like-up.png',
    cat: 'application web',
    link: 'http://like-up.fr/',
  },
];
