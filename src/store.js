import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";


const rootReducer = createSlice({
    name:'zappos',
    initialState:{
        sidebar : false,
        searchSidebar : false,
        openSection : null,
    },
    reducers:{
        sidebar : (state)=> {state.sidebar = !state.sidebar},
        searchSidebarToggle : (state)=> {state.searchSidebar = !state.searchSidebar},
        toggleSection : (state,action) => {state.openSection = state.openSection === action.payload?null:action.payload},
    }
})

export const {sidebar,searchSidebarToggle,toggleSection} = rootReducer.actions


const store = configureStore({
    reducer:rootReducer.reducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store