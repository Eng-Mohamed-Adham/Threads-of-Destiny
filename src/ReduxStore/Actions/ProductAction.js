import { ActionType } from "../TypeAction/Action-Type";

export const setProducts = (products) => {
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,

    }
}


export const selectedProduct = (product) => {
    return{
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
        
    }
}


export const removeProuct = (product) => {
    return{
        type: ActionType.REMOVE_SELECTED_PRODUCT,
        payload: product,
        
    }
}