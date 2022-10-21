import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ShopLayout } from "../../components/layout";
import { ProductSlidesHow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
   product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
   return (
      <ShopLayout title={product.title} pageDescription={product.description}>
         <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
               <ProductSlidesHow images={product.images} />
            </Grid>
            <Grid item xs={12} sm={5}>
               <Box display="flex" flexDirection="column">
                  <Typography variant="h1" component="h1">
                     {product.title}
                  </Typography>
                  <Typography variant="subtitle1" component="h1">
                     {`$${product.price}`}
                  </Typography>
                  {/* Cantidad */}
                  <Box sx={{ my: 2 }}>
                     <Typography variant="subtitle2">Cantidad</Typography>
                     <ItemCounter />
                     <SizeSelector
                        selectedSize={product.sizes[0]}
                        sizes={product.sizes}
                     />
                  </Box>

                  {product.inStock > 0 ? (
                     <Button color="secondary" className="circular-btn">
                        Agregar al carrito
                     </Button>
                  ) : (
                     <Chip
                        label="No hay disponible"
                        color="error"
                        variant="outlined"
                     />
                  )}

                  <Box sx={{ mt: 3 }}>
                     <Typography variant="subtitle2">Descripción</Typography>
                     <Typography variant="body2">
                        {product.description}
                     </Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ShopLayout>
   );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
   const productSlugs = await dbProducts.getAllProductsSlugs();

   return {
      paths: productSlugs.map(({ slug }) => ({
         params: {
            slug,
         },
      })),
      fallback: "blocking",
   };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { slug = "" } = params as { slug: string };
   const product = await dbProducts.getProductsBySlug(slug);

   if (!product) {
      return {
         redirect: {
            destination: "/",
            permanent: false,
         },
      };
   }

   return {
      props: {
         product,
      },
      revalidate: 60 * 60 * 24,
   };
};

// SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//    const { slug = "" } = params as { slug: string };
//    const product = await dbProducts.getProductsBySlug(slug);

// if (!product) {
//    return {
//       redirect: {
//          destination: "/",
//          permanent: false,
//       },
//    };
// }

//    return {
//       props: {
//          product,
//       },
//    };
// };
