import React from 'react'
import styles from "./page.module.css";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData()
  return (
    <div className={styles.container}>
      Blog
    </div>
  )
}
