import Image from "next/image";
import styles from "./home.module.css";
import Gap from "@/components/gap/Gap";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <Image
          src={"/hero.gif"}
          alt="hero-banner"
          className={styles.heroImgMobile}
          width={300}
          height={300}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis
          fuga excepturi ab iure explicabo, tempore minus alias delectus eaque.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            fill
            alt="brands"
            className={styles.brands}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/hero.gif"}
          alt="hero-banner"
          fill
          className={styles.heroImg}
        />
      </div>
      <Gap h="4" />
    </div>
  );
};

export default Home;
