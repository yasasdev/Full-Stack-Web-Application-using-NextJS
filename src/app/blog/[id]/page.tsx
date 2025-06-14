import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the type for the params
interface BlogPostParams {
  params: {
    id: string;
  };
}

// Updated PostData interface to match your MongoDB schema
interface PostData {
  _id?: string; // MongoDB typically uses _id
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

async function getData(id: string): Promise<PostData> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store", // Disable caching to always fetch fresh data
  });

  if (!res.ok) {
    return notFound(); // Return a 404 page if the post is not found
  }

  return res.json();
}

// Make the component async and properly type the params
const BlogPost = async ({ params }: BlogPostParams) => {
  const data = await getData(params.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt="Author Avatar"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt="Blog Post Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;