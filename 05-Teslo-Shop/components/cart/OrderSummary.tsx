import { Divider, Grid, Typography } from "@mui/material";

import { CartContext } from "../../context";
import { currency } from "../../utils";
import { useContext } from "react";

export const OrderSummary = () => {
   const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

   return (
      <Grid container>
         <Grid item xs={6}>
            <Typography>No. Productos</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>
               {numberOfItems} {numberOfItems > 1 ? "productos" : "producto"}
            </Typography>
         </Grid>
         <Grid item xs={6}>
            <Typography>Sub Total</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>{currency.format(subTotal)}</Typography>
         </Grid>
         <Grid item xs={6}>
            <Typography>
               Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)
            </Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>{currency.format(tax)}</Typography>
         </Grid>
         <Divider sx={{ my: 1 }} />
         <Grid item xs={6}>
            <Typography variant="subtitle1">Total:</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography variant="subtitle1">
               {currency.format(total)}
            </Typography>
         </Grid>
      </Grid>
   );
};
