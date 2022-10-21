import { CartContext, cartReducer } from "./";
import { FC, ReactNode, useEffect, useReducer } from "react";

import Cookie from "js-cookie";
import { ICartProduct } from "../../interfaces";

export interface CartState {
   cart: ICartProduct[];
}

interface Props {
   children?: ReactNode;
}

const CART_INITIAL_STATE: CartState = {
   cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : [],
};

export const CartProvider: FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

   useEffect(() => {
      try {
         const cookieProducts = Cookie.get("cart")
            ? JSON.parse(Cookie.get("cart")!)
            : [];
         dispatch({
            type: "[Cart] - LoadCart from cookies | storage",
            payload: cookieProducts,
         });
      } catch (error) {
         dispatch({
            type: "[Cart] - LoadCart from cookies | storage",
            payload: [],
         });
      }
   }, []);

   useEffect(() => {
      Cookie.set("cart", JSON.stringify(state.cart));
   }, [state.cart]);

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

   const updateCartQuantity = (product: ICartProduct) => {
      dispatch({ type: "[Cart] - Change cart quantity", payload: product });
   };

   const removeCartProduct = (product: ICartProduct) => {
      dispatch({ type: "[Cart] - Remove product in cart", payload: product });
   };

   return (
      <CartContext.Provider
         value={{
            ...state,
            addProductToCart,
            updateCartQuantity,
            removeCartProduct,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
