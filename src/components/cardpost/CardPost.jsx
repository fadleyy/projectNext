import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./cardPost.module.css";

const cardPost = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.containerImg}>
            <Image src={post.img} alt="post" fill className={styles.img} />
          </div>
        )}
        {/* <span className={styles.date}>{post.userId}</span> */}
      </div>
      <div className={styles.buttom}>
        <div className={styles.title}>
          <h1>{post.title}</h1>
          {/* <span className={styles.dateMobile}>{post.userId}</span> */}
        </div>
        <p>{post.desc}</p>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default cardPost;
