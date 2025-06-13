import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}: {params: {category: string}}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true} 
            src="/images/apps.jpg" 
            alt="Portfolio Image" 
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true} 
            src="/images/apps.jpg" 
            alt="Portfolio Image" 
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true} 
            src="/images/apps.jpg" 
            alt="Portfolio Image" 
          />
        </div>
      </div>

      
    </div>
  )
}

export default Category