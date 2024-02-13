import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { fullproduct } from "@/app/interface";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"] [0] {
        _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
        }`;

  const data = await client.fetch(query);
  return data;
};

const productPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullproduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-primary">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-1">
                <span className="text-md">4.2</span>
                <CiStar className="text-2xl" />
              </Button>
              <span className="text-md text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                incl. VAT plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <MdOutlineLocalShipping className="text-3xl" />
              <span className="text-md">2-4 day shipping</span>
            </div>
            <div className="gap-2.5 flex">
              {/* <Button className="text-md">Add To Bag</Button> */}
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
                key={data._id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
                key={data._id}
              />

              {/* <Button variant={"secondary"} className="text-md">
                Checkout Now
              </Button> */}
            </div>
            <div className="mt-10 md:mt-16 lg:mt-10">
              <div className="mb-3 text-lg font-semibold text-gray-800">
                Description
                <p className="text-gray-500">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;
