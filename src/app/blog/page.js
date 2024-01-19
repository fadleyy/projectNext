import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import CardPost from "@/components/cardpost/CardPost";

const BlogPage = () => {
  return (
    <div className={styles.containerBlog}>
      <div className={styles.post}>
        <CardPost />
      </div>
      <div className={styles.post}>
        <CardPost />
      </div>
      <div className={styles.post}>
        <CardPost />
      </div>
    </div>
  );
};

export default BlogPage;
