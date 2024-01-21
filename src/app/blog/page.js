import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import CardPost from "@/components/cardpost/CardPost";
import { getPosts } from "@/lib/data";

// FETCH WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // FETCH WITH AN API
  // const data = await getData();

  // FETCH WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.containerBlog}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <CardPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
