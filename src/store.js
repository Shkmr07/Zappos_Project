import { configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "./productData";
import logger from "redux-logger";

const rootReducer = createSlice({
  name: "zappos",
  initialState: {
    sidebar: false,
    searchSidebar: false,
    openSection: null,
    isAuth: {
      status: false,
      info: null,
    },
    products: data,
    cart: false,
    cartItems: [],
  },
  reducers: {
    sidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    searchSidebarToggle: (state) => {
      state.searchSidebar = !state.searchSidebar;
    },
    toggleSection: (state, action) => {
      state.openSection =
        state.openSection === action.payload ? null : action.payload;
    },
    isAuthentication: (state, action) => {
      (state.isAuth.status = !state.isAuth.status),
        (state.isAuth.info = !state.isAuth.info ? action.payload : null);
    },
    toggleCart: (state) => {
      state.cart = !state.cart;
    },
    setCartItems: (state, action) => {
      const exitsItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!exitsItem) {
        state.cartItems.push(action.payload);
      }
    },
    deleteCartItems : (state,action) => {state.cartItems = state.cartItems.filter(item=>item.id != action.payload)},
    clearItems : (state) => {state.cartItems = []}
  },
});

export const {
  sidebar,
  searchSidebarToggle,
  setCartItems,
  toggleSection,
  isAuthentication,
  toggleCart,
  deleteCartItems,
  clearItems
} = rootReducer.actions;

const store = configureStore({
  reducer: rootReducer.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
