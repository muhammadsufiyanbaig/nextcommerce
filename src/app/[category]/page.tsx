import React from 'react'
import { client, urlFor } from "@/lib/sanity";
import { smiplifiedproduct } from '../interface';
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';
import category from '../../../sanity/schemas/category';
async function getData(category:string) {
    const query = `*[_type == "product" && category->name == "${category}"] {
        id,
        "imageURL": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
      }
      `;
  
    const data = await client.fetch(query);
    return data;
  }
  
const Categorypage = async ({ params }: { params: { category: string } }) => {
    const data: smiplifiedproduct[] = await getData(params.category);
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Products for {params.category} </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple
           filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
    
    <div className='grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4'>
    {
      data.map((product)=>(
        <div key={product._id}>
    
      <Link
        href={`/product/${product.slug}`}
        className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
      >
        <Image
        width={500}
        height={500}
          src={product.imageURL}
          loading="lazy"
          alt="Photo by Austin Wade"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>
      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex flex-col">
          <Link
            href={`/product/${product.slug}`}
            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {product.name}
          </Link>
          <span className="text-gray-500">{product.categoryName}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">${product.price}</span>
        </div>
      </div>
    
    
        </div>
      ))
    }
    </div>
          </div>
        </div>
      )
}

export default Categorypage;
