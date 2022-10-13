import { Divider, Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
   return (
      <Grid container>
         <Grid item xs={6}>
            <Typography>No. Productos</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>3 Items</Typography>
         </Grid>
         <Grid item xs={6}>
            <Typography>Sub Total</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>{`$${105.5}`}</Typography>
         </Grid>
         <Grid item xs={6}>
            <Typography>Impuestos (16%)</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography>{`$${35.34}`}</Typography>
         </Grid>
         <Divider sx={{ my: 1 }} />
         <Grid item xs={6}>
            <Typography variant="subtitle1">Total:</Typography>
         </Grid>
         <Grid item xs={6} display="flex" justifyContent="end">
            <Typography variant="subtitle1">{`$${186.84}`}</Typography>
         </Grid>
      </Grid>
   );
};
