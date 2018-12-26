import {createStore,combineReducers} from 'redux'

const productsReducer = function(state=[], action) {
    return state;
}

const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
    cart:[
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

const cartReducer = function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:{
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        default:
         return state;
    }
   
}

function addToCart(product,quantity,unitCost){
    return {
        type:ADD_TO_CART,
        payload:{product,quantity,unitCost}
    }
}


const allReducers = {
    products:productsReducer,
    shoppingCart:cartReducer
}

const rootReducer = combineReducers(allReducers)

const store = createStore(rootReducer)

console.log("initial state: ", store.getState());
let num = 1
//监听更改
let unsubscribe = store.subscribe(()=>{
    console.log(num++)
    console.log(store.getState())
})
//dispatch在store中执行，action发起数据变化
store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));


unsubscribe()



//从redux中引入createStore方法
//创建reducer方法，第一个参数是保存在store中的数据，第二个action是个容器，存type(字符串常量)，payload(更新状态的数据)
//创建redux存储区用createStore方法，reducer做参数，存储区的数据可以直接背访问，但是reducer进行更新

//一个reducer需要处理不同的action类型，switch
//定义action 作为store.dispatch的参数 ，action 是js对象，必须有type payload