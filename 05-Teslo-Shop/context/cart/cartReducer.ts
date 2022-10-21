import { CartState } from "./";
import { ICartProduct } from "../../interfaces";

type CartActionType =
   | {
        type: "[Cart] - LoadCart from cookies | storage";
        payload: ICartProduct[];
     }
   | { type: "[Cart] - Update products in cart"; payload: ICartProduct[] }
   | { type: "[Cart] - Change cart quantity"; payload: ICartProduct }
   | { type: "[Cart] - Remove product in cart"; payload: ICartProduct };

export const cartReducer = (
   state: CartState,
   action: CartActionType
): CartState => {
   switch (action.type) {
      case "[Cart] - LoadCart from cookies | storage":
         return {
            cart: action.payload,
         };
      case "[Cart] - Update products in cart":
         return {
            cart: [...action.payload],
         };
      case "[Cart] - Change cart quantity":
         return {
            ...state,
            cart: state.cart.map((product) => {
               if (product._id !== action.payload._id) return product;
               if (product.sizes !== action.payload.sizes) return product;

               return action.payload;
            }),
         };
      case "[Cart] - Remove product in cart":
         return {
            ...state,
            cart: state.cart.filter(
               (product) =>
                  !(
                     product._id === action.payload._id &&
                     product.sizes === action.payload.sizes
                  )
            ),
         };
      default:
         return state;
   }
};
