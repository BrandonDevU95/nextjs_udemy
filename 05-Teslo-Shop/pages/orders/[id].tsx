import { CreditCardOutlined, CreditScoreOutlined } from "@mui/icons-material";
import {
   Button,
   Card,
   Chip,
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

const OrderPage = () => {
   return (
      <ShopLayout
         title="Resumen de la Orden 676465148486"
         pageDescription="Resumen de la orden 676465148486"
      >
         <Typography variant="h1" component="h1">
            Orden: 676465148486
         </Typography>

         <Chip
            sx={{ my: 2 }}
            label="Pendiente"
            variant="outlined"
            color="error"
            icon={<CreditCardOutlined />}
         />

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
                        {/* TODO: Pay */}
                        <h1>Pagar</h1>

                        <Chip
                           sx={{ my: 2 }}
                           label="Pagada"
                           variant="outlined"
                           color="success"
                           icon={<CreditScoreOutlined />}
                        />
                     </Box>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </ShopLayout>
   );
};

export default OrderPage;
