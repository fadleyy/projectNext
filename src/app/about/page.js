import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/14801450/pexels-photo-14801450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about-banner"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
