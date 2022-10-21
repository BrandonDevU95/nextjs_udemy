import {
   Box,
   Button,
   CardActionArea,
   CardMedia,
   Grid,
   Link,
   Typography,
} from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";

import { CartContext } from "../../context";
import { ICartProduct } from "../../interfaces";
import { ItemCounter } from "../ui";
import NextLink from "next/link";

interface Props {
   editable: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
   const { cart, updateCartQuantity } = useContext(CartContext);
   const [hasMounted, setHasMounted] = useState(false);

   useEffect(() => {
      setHasMounted(true);
   }, []);

   const onNewCartQuantityValue = (
      product: ICartProduct,
      newQuantityValue: number
   ) => {
      product.quantity = newQuantityValue;
      updateCartQuantity(product);
   };

   return (
      <>
         {hasMounted &&
            cart.map((product) => (
               <Grid
                  spacing={2}
                  container
                  key={product.slug + product.sizes}
                  sx={{ mb: 1 }}
               >
                  <Grid item xs={3}>
                     <NextLink href={`/product/${product.slug}`} passHref>
                        <Link>
                           <CardActionArea>
                              <CardMedia
                                 image={`/products/${product.images}`}
                                 component="img"
                                 sx={{ borderRadius: "5px" }}
                              />
                           </CardActionArea>
                        </Link>
                     </NextLink>
                  </Grid>
                  <Grid item xs={7}>
                     <Box display="flex" flexDirection="column">
                        <Typography variant="body1">{product.title}</Typography>
                        <Typography variant="body1">
                           Talla: <strong>{product.sizes}</strong>
                        </Typography>
                        {editable ? (
                           <ItemCounter
                              currentValue={product.quantity}
                              maxValue={10}
                              updateQuantity={(value) => {
                                 onNewCartQuantityValue(product, value);
                              }}
                           />
                        ) : (
                           <Typography variant="h5">
                              {product.quantity}{" "}
                              {product.quantity > 1 ? "productos" : "producto"}
                           </Typography>
                        )}
                     </Box>
                  </Grid>
                  <Grid
                     item
                     xs={2}
                     display="flex"
                     alignItems="center"
                     flexDirection="column"
                  >
                     <Typography variant="subtitle1">{`$${product.price}`}</Typography>
                     {editable && (
                        <Button variant="text" color="secondary">
                           Remover
                        </Button>
                     )}
                  </Grid>
               </Grid>
            ))}
      </>
   );
};
