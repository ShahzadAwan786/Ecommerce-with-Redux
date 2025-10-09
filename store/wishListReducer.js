export const WISHLIST_ITEM_ADD = "wishitems/additem";
export const WISHLIST_REMOVE_ITEM = "wishitems/removeitem";
export function addWishListItem(productId) {
  return { type: WISHLIST_ITEM_ADD, payload: { productId } };
}
export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId } };
}

export default function (state = [], action) {
  switch (action.type) {
    case WISHLIST_ITEM_ADD:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishlist) => wishlist.productID !== action.payload.productID
      );

    default:
      return state;
  }
}
