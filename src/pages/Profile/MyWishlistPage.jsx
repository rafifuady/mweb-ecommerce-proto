import React from "react";
import { Typography } from "@material-ui/core";
import { HeaderContainer } from "../../container/Navigation";
import { ProductHomeContainer } from "../../container/Product";
import { useSelector } from "react-redux";

export function MyWishlistPage() {
  const { product, isLoading, productWishlisted } = useSelector(
    (state) => state.product
  );

  // let WishlistProduct = product.filter(val => (val.id === ))
  let prodWish = product ? [...product] : [];

  if (prodWish) {
    prodWish = prodWish.filter((val) => {
      let tmp;
      if (productWishlisted.includes(val.id)) {
        tmp = {
          ...val,
        };
      }
      return tmp;
    });
  }

  return (
    <>
      <HeaderContainer />
      <Typography variant="h5">My Wishlist</Typography>
      <ProductHomeContainer product={prodWish} isLoading={isLoading} productWishlisted={productWishlisted} />
    </>
  );
}
