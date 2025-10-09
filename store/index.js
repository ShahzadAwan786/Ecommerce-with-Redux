import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";

import wishListReducer from "./wishListReducer";
import cartListReducer from "./cartListReducer";
import { addCartItem } from "./cartListReducer";
import { configureStore } from "@reduxjs/toolkit";
// const initialState = {
//   product: productlist,
//   cartitems: [],
//   wishlist: [],
// };

// const CART_ITEM_QUANTITY = " cart/increaseitem";
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CART_ITEM_ADD:
//       return { ...state, cartitems: [...state.cartitems, action.payload] };
//     case CART_ITEM_QUANTITY:
//       return {
//         ...state,
//         cartitems: state.cartitems.map((cartitem) =>
//           cartitem.productID == action.payload.productID
//             ? { ...cartitem, quantity: cartitem.quantity + 1 }
//             : cartitem
//         ),
//       };

//     case CART_REMOVE_ADD:
//       return {
//         ...state,
//         cartitems: state.cartitems.filter(
//           (cartitem) => cartitem.productID !== action.payload.productID
//         ),
//       };

//     case WISHLIST_ITEM_ADD:
//       return { ...state, wishlist: [...state.wishlist, action.payload] };
//     case WISHLIST_REMOVE_ITEM:
//       return console.log({
//         ...state,
//         wishlist: state.wishlist.filter(
//           (wishlist) => wishlist.productID !== action.payload.productID
//         ),
//       });
//     default:
//       return state;
//   }
// }

export const store = configureStore({
  reducer: {
    product: productReducer,
    wishList: wishListReducer,
    cartlist: cartListReducer,
  },
});

// store.dispatch({ type: CART_ITEM_ADD, payload: { productID: 2 } });
// store.dispatch({ type: CART_ITEM_ADD, payload: { productID: 2 } });
// store.dispatch({ type: WISHLIST_ITEM_ADD, payload: { productID: 21 } });
// store.dispatch({ type: WISHLIST_ITEM_ADD, payload: { productID: 121 } });
// store.dispatch({ type: WISHLIST_ITEM_ADD, payload: { productID: 321 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productID: 21 } });
// store.dispatch(addCartItem(1));
// store.dispatch(addCartItem(21));
// store.dispatch(addCartItem(81));
