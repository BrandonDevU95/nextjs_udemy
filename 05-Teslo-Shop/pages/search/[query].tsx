import { Typography } from "@mui/material";
import type { NextPage, GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
   products: IProduct[];
   foundProducts: boolean;
   query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
   return (
      <ShopLayout
         title="Teslo-Shop - Search"
         pageDescription="Encuentra los mejores productos"
      >
         <Typography variant="h1" component="h1">
            Buscar productos
         </Typography>
         {foundProducts ? (
            <Typography
               textTransform="capitalize"
               variant="h2"
               sx={{ mb: 1 }}
               component="h2"
            >
               Resultados para: {query}
            </Typography>
         ) : (
            <Typography variant="h2" sx={{ mb: 1 }} component="h2">
               Productos sugeridos
            </Typography>
         )}
         <ProductList products={products} />
      </ShopLayout>
   );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const { query } = params as { query: string };

   if (query.length === 0) {
      return {
         redirect: {
            destination: "/",
            permanent: true,
         },
      };
   }

   let products = await dbProducts.getProductsByTerm(query);
   const foundProducts = products.length > 0;

   if (!foundProducts) {
      products = await dbProducts.getAllProducts();
   }

   return {
      props: { products, foundProducts, query },
   };
};
