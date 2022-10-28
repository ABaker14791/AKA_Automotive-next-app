import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroImg from "../../public/index_assets/hero-img.jpeg";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <Image src={heroImg} objectPosition="center" objectFit="cover" />
    </div>
  );
};

export default Hero;
