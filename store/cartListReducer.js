import { createSlice } from "@reduxjs/toolkit";
import { myCreateSlice } from "../redux-tolkit";
const findIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const mySlice = myCreateSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItem = findIndex(state, action);
      if (existingItem !== -1) {
        state[existingItem].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItem = findIndex(state, action);
      state.splice(existingItem, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItem = findIndex(state, action);
      state[existingItem].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItem = findIndex(state, action);
      state[existingItem].quantity -= 1;
      if (state[existingItem].quantity === 0) {
        state.splice(existingItem, 1);
      }
    },
  },
});

// const slice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addCartItem(state, action) {
//       const existingItem = findIndex(state, action);
//       if (existingItem !== -1) {
//         state[existingItem].quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeCartItem(state, action) {
//       const existingItem = findIndex(state, action);
//       state.splice(existingItem, 1);
//     },
//     increaseCartItemQuantity(state, action) {
//       const existingItem = findIndex(state, action);
//       state[existingItem].quantity += 1;
//     },
//     decreaseCartItemQuantity(state, action) {
//       const existingItem = findIndex(state, action);
//       state[existingItem].quantity -= 1;
//       if (state[existingItem].quantity === 0) {
//         state.splice(existingItem, 1);
//       }
//     },
//   },
// });

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = mySlice.actions;
export default mySlice.reducer;

// export const CART_ITEM_ADD = "cartItems/addItem";
// export const CART_REMOVE_ADD = "cartItems/removeItem";
// const CART_ITEM_DECREASE_QUANTITY = "cartItem/decreaseQuantity";
// const CART_ITEM_INCREASE_QUANTITY = "cartItem/IncreaseQuantity";
// // Action Creater
// export function addCartItem(productId) {
//   return { type: CART_ITEM_ADD, payload: { ...productId } };
// }
// export function removeCartItem(productId) {
//   return { type: CART_REMOVE_ADD, payload: { productId } };
// }
// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId },
//   };
// }
// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId },
//   };
// }

// export default function cartListReducer(State = [], action) {
//
//     const existingItem = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case CART_ITEM_ADD:
//         if (existingItem) {
//           return state.map((cartItem) => {
//             if (cartItem.productId === existingItem.productId) {
//               return { ...cartItem, quantity: cartItem.quantity + 1 };
//             }
//             return cartItem;
//           });
//         }
//         return [...state, action.payload];

//       case CART_REMOVE_ADD:
//         return state.filter(
//           (cartItem) => cartItem.productId !== action.payload.productId
//         );
//       case CART_ITEM_DECREASE_QUANTITY:
//         return state
//           .map((cartItem) => {
//             if (cartItem.productId === action.payload.productId) {
//               return { ...cartItem, quantity: cartItem.quantity - 1 };
//             }
//             return cartItem;
//           })
//           .filter((cartItem) => cartItem.quantity > 0);
//       case CART_ITEM_INCREASE_QUANTITY:
//         return state.map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           }
//           return cartItem;
//         });
//       default:
//         return state;
//     }
//   });
// }

// Reducer

// export default function cartListReducer(orignalState = [], action) {
//   return produce(orignalState, (state) => {
//     const existingItem = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case CART_ITEM_ADD:
//         if (existingItem !== -1) {
//           state[existingItem].quantity += 1;
//           break;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         break;
//       case CART_REMOVE_ADD:
//         state.splice(existingItem, 1);
//       case CART_ITEM_DECREASE_QUANTITY:
//         state[existingItem].quantity -= 1;
//         if (state[existingItem].quantity === 0) {
//           state.splice(existingItem, 1);
//         }
//         break;
//       case CART_ITEM_INCREASE_QUANTITY:
//         state[existingItem].quantity += 1;
//     }
//     return state;
//   });
// }
