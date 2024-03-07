import { configureStore } from '@reduxjs/toolkit';
import reducer_element from '../redux_elements/slice';

const store = configureStore({
    reducer:{
        reducerKey:reducer_element,
    }
})

export default store; 