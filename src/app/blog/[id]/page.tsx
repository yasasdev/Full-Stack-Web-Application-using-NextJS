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

// Define the type for the post data
interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getData(id: string): Promise<PostData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className={styles.author}>
            <Image
              src="/images/My-Image.jpg"
              alt="Author Avatar"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/websites.jpg"
            alt="Blog Post Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel
          justo vehicula, sit amet placerat turpis elementum. Praesent et justo
          ex. Suspendisse potenti. Donec vel risus in nunc semper finibus. Fusce
          ut metus vestibulum, convallis eros non, dapibus tellus.
          <br />
          <br />
          Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nibh,
          at pulvinar velit. Suspendisse eget diam sed risus gravida lobortis
          vel eget neque. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Cras tempor magna at risus
          vulputate, at congue tortor tristique. In hac habitasse platea
          dictumst. Integer quis lacus in urna sodales rutrum.
          <br />
          <br />
          Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan
          id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis
          porttitor volutpat. Cras ultricies ligula sed magna dictum porta.
          Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut
          libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
          nibh pulvinar a.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;