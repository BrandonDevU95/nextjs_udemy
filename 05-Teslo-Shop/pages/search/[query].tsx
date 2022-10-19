import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const SearchPage: NextPage = () => {
   const { products, isLoading } = useProducts("/products");

   return (
      <ShopLayout
         title="Teslo-Shop - Search"
         pageDescription="Encuentra los mejores productos"
      >
         <Typography variant="h1" component="h1">
            Buscar
         </Typography>
         <Typography variant="h2" sx={{ mb: 1 }} component="h2">
            ABC -- 123
         </Typography>
         {isLoading ? (
            <FullScreenLoading />
         ) : (
            <ProductList products={products} />
         )}
      </ShopLayout>
   );
};

export default SearchPage;
