import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.MainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/illustration.png"
            alt="Blog Image"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/illustration.png"
            alt="Blog Image"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/illustration.png"
            alt="Blog Image"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog