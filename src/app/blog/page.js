import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import CardPost from "@/components/cardpost/CardPost";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BlogPage = async () => {
  const data = await getData();
  return (
    <div className={styles.containerBlog}>
      {data.map((post) => (
        <div className={styles.post} key={post.id}>
          <CardPost data={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
