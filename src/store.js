import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";


const rootReducer = createSlice({
    name:'zappos',
    initialState:{
        sidebar : false,
        searchSidebar : false,
    },
    reducers:{
        sidebar : (state)=> {state.sidebar = !state.sidebar},
        searchSidebarToggle : (state)=> {state.searchSidebar = !state.searchSidebar}
    }
})

export const {sidebar,searchSidebarToggle} = rootReducer.actions


const store = configureStore({
    reducer:rootReducer.reducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store