import { CartContext, cartReducer } from "./";
import { FC, ReactNode, useReducer } from "react";

import { ICartProduct } from "../../interfaces";

export interface CartState {
   cart: ICartProduct[];
}

interface Props {
   children?: ReactNode;
}

const CART_INITIAL_STATE: CartState = {
   cart: [],
};

export const CartProvider: FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

   const addProductToCart = (product: ICartProduct) => {
      const productInCart = state.cart.some((item) => item._id === product._id);
      if (!productInCart)
         return dispatch({
            type: "[Cart] - Update products in cart",
            payload: [...state.cart, product],
         });

      const productInCartButDifferentSize = state.cart.some(
         (item) => item._id === product._id && item.sizes === product.sizes
      );
      if (!productInCartButDifferentSize)
         return dispatch({
            type: "[Cart] - Update products in cart",
            payload: [...state.cart, product],
         });

      const updateProducts = state.cart.map((item) => {
         if (item._id !== product._id) return item;
         if (item.sizes !== product.sizes) return item;

         item.quantity += product.quantity;
         return item;
      });

      dispatch({
         type: "[Cart] - Update products in cart",
         payload: updateProducts,
      });
   };

   return (
      <CartContext.Provider value={{ ...state, addProductToCart }}>
         {children}
      </CartContext.Provider>
   );
};
