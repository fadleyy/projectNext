import React, { Suspense } from "react";
import styles from "./post.module.css";
import Image from "next/image";
import Gap from "@/components/gap/Gap";
import Link from "next/link";
import PostUser from "@/components/postUser/PostUser";

// FETCH WITH AN API
// const GetData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const SingelBlogpage = async ({ params }) => {
  const { slug } = params;
  // const data = await GetData(slug);
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
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.detail}>
          <Image
            src={"/noavatar.png"}
            width={50}
            height={50}
            alt="avatar"
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={data.userId} />
          </Suspense>
          <div className={styles.detailtext}>
            <span className={styles.textDetail}>Published</span>
            <span className={styles.detailValue}>1-1-202</span>
          </div>
        </div>
        <div className={styles.content}>{data.body}</div>
        <Link href={"/blog"} className={styles.link}>
          Back
        </Link>
      </div>
      <Gap h="8" />
    </div>
  );
};

export default SingelBlogpage;
