import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import NextLink from "next/link";

const EmptyPage = () => {
   return (
      <ShopLayout
         title="Carrito Vacio"
         pageDescription="No hay articulos en el carrito de compras"
      >
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 200px)"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
         >
            <RemoveShoppingCartOutlined sx={{ fontSize: 80 }} />
            <Box display="flex" flexDirection="column" alignItems="center">
               <Typography>Su carrito esta vació</Typography>
               <NextLink href="/" passHref>
                  <Link typography="h4" color="secondary">
                     Regresar
                  </Link>
               </NextLink>
            </Box>
         </Box>
      </ShopLayout>
   );
};

export default EmptyPage;
