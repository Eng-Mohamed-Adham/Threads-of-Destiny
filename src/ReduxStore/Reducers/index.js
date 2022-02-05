import{combineReducers} from 'redux';
import { ProductReducer, selectProductReducer } from './ProductReducer';


export const rootReducer = combineReducers({
    allProducts:ProductReducer,
    product:selectProductReducer

})


// export default rootReducer;