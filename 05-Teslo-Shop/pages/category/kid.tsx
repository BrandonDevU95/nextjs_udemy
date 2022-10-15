import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const KidPage = () => {
   const { products, isLoading } = useProducts("/products?gender=kid");

   return (
      <ShopLayout
         title="Teslo-Shop - Kids"
         pageDescription="Encuentra los mejores productos para niños"
      >
         <Typography variant="h1" component="h1">
            Tienda
         </Typography>
         <Typography variant="h2" sx={{ mb: 1 }} component="h2">
            Categoria - Kids
         </Typography>
         {isLoading ? (
            <FullScreenLoading />
         ) : (
            <ProductList products={products} />
         )}
      </ShopLayout>
   );
};

export default KidPage;
