import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../_redux/action/product.action";

export function ButtonWishlistContainer({ id, loved }) {
  const dispatch = useDispatch();

  const { productWishlisted } = useSelector((state) => state.product);


  return (
    <>
      {productWishlisted.includes(id) ? (
        <IconButton
          color="primary"
          onClick={() =>
            dispatch(productsActions.addToWishlist(id, productWishlisted))
          }
        >
          <FavoriteOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          onClick={() =>
            dispatch(productsActions.addToWishlist(id, productWishlisted))
          }
        >
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </>
  );
}
