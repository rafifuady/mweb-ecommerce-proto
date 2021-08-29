import { productsContants } from '../constant'

const initialState = {
    productBought: [],
    productWishlisted: []
}

 export function product(state = initialState, action) {
  let returnData = state

   // eslint-disable-next-line 
  Object.values(productsContants).map(ctx => {
      if (ctx === action.type) {
          returnData = { ...returnData, ...action.payload }
      }
  })

  return returnData
}