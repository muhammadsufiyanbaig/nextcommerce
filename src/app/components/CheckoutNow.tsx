"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "../../../node_modules/use-shopping-cart/dist/react";


import { ProductCart } from "./AddToBag";

 const  CheckoutNow = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart)=> {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: any) {
   checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    priceid: price_id,
  };
  console.log(product.priceid);
  
  return (
    <Button
    variant="outline"
    onClick={() => {
      buyNow(product.priceid);
    }}
    >
      Checkout Now
    </Button>
  );

}
export default CheckoutNow;