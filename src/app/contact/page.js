import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"/contact.png"}
          fill
          alt={"contact-banner"}
          className={styles.img}
        />
      </div>
      <div className={styles.inputContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and username" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="massage"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
