import React from 'react'
import { client, urlFor } from "@/lib/sanity";
async function getData() {
    const query = `*[_type == 'product'] | order(_createdAt asc) [0...4]{
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageURL": images[0].asset->url
      }`;
  
    const data = await client.fetch(query);
    return data;
  }
  
const Newest = () => {
  return (
    <div>
      
    </div>
  )
}
// 58:00
export default Newest
