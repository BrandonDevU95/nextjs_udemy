import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layout";

function Custom404() {
   return (
      <ShopLayout
         title="Page Not Found"
         pageDescription="No hay nada que mostrar"
      >
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 200px)"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
         >
            <Typography
               variant="h1"
               component="h1"
               fontSize={80}
               fontWeight={200}
            >
               400 |
            </Typography>
            <Typography marginLeft={2}>Articulo no encontrado</Typography>
         </Box>
      </ShopLayout>
   );
}

export default Custom404;
