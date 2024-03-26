import { configureStore } from '@reduxjs/toolkit';
import reducer_element from '../redux_elements/slice';
import reducer_element2 from '../redux_elements/slice2';

const store = configureStore({
    reducer:{
        reducerKey:reducer_element,
        reducerKey2:reducer_element2,
    }
})

export default store; 