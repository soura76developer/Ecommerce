import { createSlice} from  '@reduxjs/toolkit';
import stacticData from '../components/product.json';

export const  store_slice=createSlice({
    name:'sslice',
    initialState:{values:stacticData},
    reducers: {
        increment:(InitialState,action)=>{ //This is function
            console.log(InitialState.values)
        }
    }
})

export const {increment}=store_slice.actions;
export default store_slice.reducer;