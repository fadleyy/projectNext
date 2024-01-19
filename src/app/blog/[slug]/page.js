import React from "react";
import styles from "./post.module.css";
import Image from "next/image";
import Gap from "@/components/gap/Gap";
import Link from "next/link";

const SingelBlogpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={
            "https://images.pexels.com/photos/18028809/pexels-photo-18028809/free-photo-of-typical-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          alt="blog banner"
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            src={"/noavatar.png"}
            width={50}
            height={50}
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.detailtext}>
            <span className={styles.textDetail}>Author</span>
            <span className={styles.detailValue}>Muhamad Fadli</span>
          </div>

          <div className={styles.detailtext}>
            <span className={styles.textDetail}>Published</span>
            <span className={styles.detailValue}>1-1-202</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          placeat doloremque? Harum consequuntur ea repellat. Odit sapiente
          dolores tempore quos, quaerat doloremque consequuntur. Eius vitae
          magnam amet commodi odio dicta, unde hic, necessitatibus harum maxime,
          iste doloremque tenetur non velit.
        </div>
        <Link href={"/blog"} className={styles.link}>
          Back
        </Link>
      </div>
      <Gap h="8" />
    </div>
  );
};

export default SingelBlogpage;
