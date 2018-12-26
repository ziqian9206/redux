//store.dispatch发起数据变化，定义方法，接收送到store的数据，触发store的数据更新
//是store数据更新的唯一来源  
export const ADD_TO_CART = 'ADD_TO_CART '
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'


export function addToCart(product,quantity,unitCost){
    return {
        type:ADD_TO_CART,
        payload:{product,quantity,unitCost}
    }
}

export function updateCart(product,quantity,unitCost){
    return {
        type: UPDATE_CART,
        payload: {
          product,
          quantity,
          unitCost
        }
      }
}

export function deleteCart(product,quantity,unitCost){
    return{
        type:DELETE_FROM_CART,
        payload:{
            product
        }
    }
}