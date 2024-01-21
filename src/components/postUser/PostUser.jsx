import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH WITH AN API
// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to get data");
//   }
//   return res.json();
// };

const PostUser = async ({ id }) => {
  // FETCH WITH AN API
  // const user = await getUser(userId);

  // FETCH WITHOUT AN API
  const user = await getUser(id);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        width={50}
        height={50}
        alt="avatar"
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.name}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
