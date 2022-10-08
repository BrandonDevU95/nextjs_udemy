import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";

const Home: NextPage = () => {
   return (
      <ShopLayout
         title="Teslo-Shop - Home"
         pageDescription="Encuentra los mejores productos"
      >
         <Typography variant="h1" component="h1">
            Tienda
         </Typography>
         <Typography variant="h2" sx={{ mb: 1 }} component="h2">
            Todos los productos
         </Typography>
      </ShopLayout>
   );
};

export default Home;
