import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const WomenPage = () => {
   const { products, isLoading } = useProducts("/products?gender=women");

   return (
      <ShopLayout
         title="Teslo-Shop - Women"
         pageDescription="Encuentra los mejores productos para mujeres"
      >
         <Typography variant="h1" component="h1">
            Tienda
         </Typography>
         <Typography variant="h2" sx={{ mb: 1 }} component="h2">
            Categoria - Women
         </Typography>
         {isLoading ? (
            <FullScreenLoading />
         ) : (
            <ProductList products={products} />
         )}
      </ShopLayout>
   );
};

export default WomenPage;
