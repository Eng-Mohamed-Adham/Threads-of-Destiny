import { ActionType } from "../TypeAction/Action-Type"

const initialState = {
    products:[]
}

export const ProductReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case ActionType.SET_PRODUCTS:
            return{
                ...state,
                products:payload

            }
            default: return state;
    }
}


export const selectProductReducer = (state = {}, {type,payload}) => {
    switch(type){
        case ActionType.SELECTED_PRODUCT:

        return{
            ...state,
            ...payload
        }
        default:return state
    }
}