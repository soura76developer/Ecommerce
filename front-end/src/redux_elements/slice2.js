//Json ecommerce data

import { createSlice} from  '@reduxjs/toolkit';
import stacticData from '../components/product.json';

export const  store_slice2=createSlice({
    name:'sslice2',
    initialState:{
        values:stacticData
    },
    reducers: {
        increment:(InitialState,action)=>{ //This is function and an action
            InitialState.values=[...InitialState.values,action.payload]
            console.log(InitialState.values)
        }
    }
})

export const {increment}=store_slice2.actions;
export default store_slice2.reducer;

