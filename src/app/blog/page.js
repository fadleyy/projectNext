import React from "react";
import styles from "./blog.module.css";

import CardPost from "@/components/cardpost/CardPost";

// FETCH WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH WITH AN API
  const posts = await getData();

  // FETCH WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.containerBlog}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <CardPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
