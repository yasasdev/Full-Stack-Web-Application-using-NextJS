import React from 'react'
import styles from './page.module.css'

interface CategoryProps {
  params: {
    category: string;
  };
}

const Category = ({ params }: CategoryProps) => {
  console.log(params)
  return (
    <div className={styles.container}>
      category
    </div>
  )
}

export default Category