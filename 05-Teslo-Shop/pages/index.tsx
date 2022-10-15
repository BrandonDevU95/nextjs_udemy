import { Typography } from "@mui/material";
import type { NextPage } from "next";
import useSWR from "swr";
import { ShopLayout } from "../components/layout";
import { ProductList } from "../components/products";

const fetcher = (...args: [key: string]) =>
   fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
   const { data, error } = useSWR("/api/products", fetcher);

   if (error) return <div>failed to load</div>;
   if (!data) return <div>loading...</div>;

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
         <ProductList products={data} />
      </ShopLayout>
   );
};

export default Home;
