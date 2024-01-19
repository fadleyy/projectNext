import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./cardPost.module.css";

const cardPost = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.containerImg}>
          <Image
            src={
              "https://images.pexels.com/photos/18028809/pexels-photo-18028809/free-photo-of-typical-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>{data.id}</span>
      </div>
      <div className={styles.buttom}>
        <div className={styles.title}>
          <h1>{data.title}</h1>
          <span className={styles.dateMobile}>1.1.2024</span>
        </div>
        <p>{data.body}</p>
        <Link href={`/blog/${data.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default cardPost;
