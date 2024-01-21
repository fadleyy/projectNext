import React, { Suspense } from "react";
import styles from "./post.module.css";
import Image from "next/image";
import Gap from "@/components/gap/Gap";
import Link from "next/link";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

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

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const data = await getPost(slug);
  return {
    title: data.title,
    description: data.desc,
  };
};
const SingelBlogpage = async ({ params }) => {
  const { slug } = params;
  // FETCH WITH AN AP
  // const data = await GetData(slug);

  // FETCH WITHOUT AN API
  const data = await getPost(slug);
  return (
    <div className={styles.container}>
      {data.img && (
        <div className={styles.left}>
          <Image src={data.img} fill alt="blog banner" className={styles.img} />
        </div>
      )}
      <div className={styles.right}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.detail}>
          {data && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser id={data.userId} />
            </Suspense>
          )}
          <div className={styles.detailtext}>
            <span className={styles.textDetail}>Published</span>
            <span className={styles.detailValue}>
              {data.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{data.desc}</div>
        <Link href={"/blog"} className={styles.link}>
          Back
        </Link>
      </div>
      <Gap h="8" />
    </div>
  );
};

export default SingelBlogpage;
