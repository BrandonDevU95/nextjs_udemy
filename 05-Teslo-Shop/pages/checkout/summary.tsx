import {
   Button,
   Card,
   Grid,
   Typography,
   CardContent,
   Divider,
   Link,
   Box,
} from "@mui/material";
import NextLink from "next/link";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layout";

const SummaryPage = () => {
   return (
      <ShopLayout
         title="resumen de orden"
         pageDescription="Resumen de la orden"
      >
         <Typography variant="h1" component="h1">
            Resumen de la orden
         </Typography>

         <Grid container>
            <Grid item xs={12} sm={7}>
               <CartList editable={false} />
            </Grid>
            <Grid item xs={12} sm={5}>
               <Card className="summary-card">
                  <CardContent>
                     <Typography variant="h2">Resumen (3 Productos)</Typography>
                     <Divider sx={{ my: 1 }} />

                     <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">
                           Dirección de entrega
                        </Typography>
                        <NextLink href="/checkout/address" passHref>
                           <Link underline="always">Editar</Link>
                        </NextLink>
                     </Box>

                     <Typography>Brandon Vargas</Typography>
                     <Typography>323 Calle Luna</Typography>
                     <Typography>Still Village, HYA 23S</Typography>
                     <Typography>E.U.</Typography>
                     <Typography>+1 32987415</Typography>

                     <Divider sx={{ my: 1 }} />

                     <Box display="flex" justifyContent="end">
                        <NextLink href="/cart" passHref>
                           <Link underline="always">Editar</Link>
                        </NextLink>
                     </Box>

                     <OrderSummary />

                     <Box sx={{ mt: 3 }}>
                        <Button
                           color="secondary"
                           className="circular-btn"
                           fullWidth
                        >
                           Confirmar Orden
                        </Button>
                     </Box>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </ShopLayout>
   );
};

export default SummaryPage;
