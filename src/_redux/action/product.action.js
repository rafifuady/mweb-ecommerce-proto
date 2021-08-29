import { productService } from "../../_services/productService";
import { productsContants } from "../constant";

export const productsActions = {
  getCategory,
  checkout,
  addToWishlist,
};

const productServiceInstance = new productService();

function getCategory() {
  return async (dispatch) => {
    dispatch({
      type: productsContants.HOME_REQUEST,
      payload: {
        isLoading: true,
      },
    });

    const { data, isError } = await productServiceInstance.getHome();

    if (isError === true) {
      //check if failed service instance
      dispatch({
        type: productsContants.HOME_FAILED,
        payload: {
          isError: true,
          isLoading: false,
        },
      });
    } else {
      console.log(data[0].data.productPromo.filter((val) => val.loved === 1));

      let wish = [];
      data[0].data.productPromo.filter((val) => {
        if (val.loved === 1) {
          wish.push(val.id);
        }
        return val.id;
      });
      // action success
      return dispatch({
        type: productsContants.HOME_SUCCESS,
        payload: {
          isError: false,
          isLoading: false,
          responseData: data[0].data,
          category: data[0].data.category,
          product: data[0].data.productPromo,
          productWishlisted: wish,
        },
      });
    }
  };
}

function checkout(payload, productBought) {
  return (dispatch) => {
    dispatch({
      type: productsContants.BUY_REQUEST,
      payload: {
        isLoading: true,
      },
    });

    const success = () => {
      productBought.push(payload);
      alert("Purchased");
      return dispatch({
        type: productsContants.BUY_SUCCESS,
        payload: {
          isLoading: false,
          productBought: [...productBought],
        },
      });
    };

    setTimeout(success, 1000);
  };
}

function addToWishlist(payload, productWishlisted) {
  return (dispatch) => {
    if (productWishlisted.includes(payload)) {
      const index = productWishlisted.indexOf(payload);
      if (index > -1) {
        productWishlisted.splice(index, 1);
      }
      return dispatch({
        type: productsContants.REMOVE_WISHILIST,
        payload: {
          isLoading: false,
          productWishlisted: [...productWishlisted],
        },
      });
    } else {
      const success = () => {
        productWishlisted.push(payload);
        return dispatch({
          type: productsContants.ADD_WISHILIST,
          payload: {
            isLoading: false,
            productWishlisted: [...productWishlisted],
          },
        });
      };

      setTimeout(success, 1000);
    }
  };
}
