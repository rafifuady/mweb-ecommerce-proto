import { productsContants } from '../constant'

const initialState = {
}

 export function product(state = initialState, action) {
  let returnData = state

  Object.values(productsContants).map(ctx => {
      if (ctx == action.type) {
          returnData = { ...returnData, ...action.payload }
      }
  })

  return returnData
}