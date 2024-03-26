//Api Data Fetch
//=============================
import { createSlice,createAsyncThunk} from  '@reduxjs/toolkit';
import stacticData from '../components/product.json';
//Here we will declare creteaAsyncThunk  and this will retuen as an "Action"
//Action
export const  fetchApiData = createAsyncThunk('fetch_A_Data', async () =>{
    const response = await fetch('https://reqres.in/api/users?page=2').then((res)=>res.json());
    return response;
})//Now we created the action/But after featch the data the data should go to the store so we will use extraReducers

export const  store_slice=createSlice({
    name:'sslice',
    // initialState:{values:stacticData},
    initialState:{
        isLoading : false ,
        data:null,
        
        // values:stacticData
    },
    extraReducers:(builder)=>{ //This is a thunk fron official document
            builder.addCase(fetchApiData.pending, (state, action) => {
                state.isLoading = true;
                // console.log("Pending...")
            })
            builder.addCase(fetchApiData.fulfilled, (state, action) => {
                state.isLoading =false ;
                state.data=action.payload;
                // console.log("Data Loaded...");
                // console.log(state.data);
            })
            builder.addCase(fetchApiData.rejected, (state, action) => {
                state.isLoading =false ;
                alert("Error Occured");
            })
    }, //This is used only for async thunk
    // reducers: {
    //     increment:(InitialState,action)=>{ //This is function
    //         InitialState.values=[...InitialState.values,action.payload]
    //         console.log(InitialState.values)
    //     }
    // }
})

// export const {increment}=store_slice.actions;
export default store_slice.reducer;

// Two in a reducer one is reducer another is action .Action inside the reducer