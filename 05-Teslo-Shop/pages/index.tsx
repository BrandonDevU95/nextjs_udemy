import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";
import { ProductList } from "../components/products";
import { FullScreenLoading } from "../components/ui";
import { useProducts } from "../hooks";

const Home: NextPage = () => {
   const { products, isLoading } = useProducts("/products");

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
         {isLoading ? (
            <FullScreenLoading />
         ) : (
            <ProductList products={products} />
         )}
      </ShopLayout>
   );
};

export default Home;
