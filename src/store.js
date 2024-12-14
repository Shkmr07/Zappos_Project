import { configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "./productData";
import logger from "redux-logger";


const rootReducer = createSlice({
    name:'zappos',
    initialState:{
        sidebar : false,
        searchSidebar : false,
        openSection : null,
        isAuth : {
            status : false,
            info : null
        },
        products : data
    },
    reducers:{
        sidebar : (state)=> {state.sidebar = !state.sidebar},
        searchSidebarToggle : (state)=> {state.searchSidebar = !state.searchSidebar},
        toggleSection : (state,action) => {state.openSection = state.openSection === action.payload?null:action.payload},
        isAuthentication : (state,action) => {state.isAuth.status = !state.isAuth.status,state.isAuth.info = !state.isAuth.info?action.payload:null}
    }
})

export const {sidebar,searchSidebarToggle,toggleSection,isAuthentication} = rootReducer.actions


const store = configureStore({
    reducer:rootReducer.reducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store