import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'

const getData = (category: string) => {
  const data = items[category as keyof typeof items]

  if(data){
    return data
  }

  return notFound();
}

const Category = ({params}: {params: {category: string}}) => {
  const data = getData(params.category) //Using the word category because the folder name is [category]
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img}
              fill={true} 
              src={item.image}
              alt="Portfolio Image" 
            />
          </div>
        </div>
      ))}         
    </div>
  );
}

export default Category