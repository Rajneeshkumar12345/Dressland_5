 export const reducer = (state, action) => {
    if(action.type === 'INCREAMENT') {
let updatedCart = state.item.map((curElm) => {
    if(curElm.productID === action.payload){
        return {...curElm, quantity: curElm.quantity + 1};
    }
    return curElm;
})
    return {...state, item: updatedCart}
    }
    return state;
}