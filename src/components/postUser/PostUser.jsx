import React from "react";
import styles from "./postUser.module.css";

const getUser = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

const PostUser = async ({ userId }) => {
  {
    userId;
  }
  const user = await getUser(userId);
  return (
    <div className={styles.Container}>
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{user.username}</span>
    </div>
  );
};

export default PostUser;
