import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©{new Date().getFullYear()} • All rights reserved</div>
      <div className={styles.social}>
        <Image src="/images/1.png" width={20} height={20} className={styles.icon} alt="Facebook icon" />
        <Image src="/images/2.png" width={20} height={20} className={styles.icon} alt="Instagram icon" />
        <Image src="/images/3.png" width={20} height={20} className={styles.icon} alt="Twitter icon" />
        <Image src="/images/4.png" width={20} height={20} className={styles.icon} alt="Youtube icon" />
      </div>
    </div>
  );
};

export default Footer;
