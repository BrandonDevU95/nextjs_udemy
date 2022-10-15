import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const MenPage = () => {
   const { products, isLoading } = useProducts("/products?gender=men");

   return (
      <ShopLayout
         title="Teslo-Shop - Men"
         pageDescription="Encuentra los mejores productos para hombres"
      >
         <Typography variant="h1" component="h1">
            Tienda
         </Typography>
         <Typography variant="h2" sx={{ mb: 1 }} component="h2">
            Categoria - Men
         </Typography>
         {isLoading ? (
            <FullScreenLoading />
         ) : (
            <ProductList products={products} />
         )}
      </ShopLayout>
   );
};

export default MenPage;
