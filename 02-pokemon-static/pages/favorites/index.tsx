import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritePage = () => {
   const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

   useEffect(() => {
      setFavoritePokemos(localFavorites.pokemons());
   }, []);

   return (
      <Layout title="Pokemon">
         {favoritePokemos.length === 0 ? (
            <NoFavorites />
         ) : (
            <Grid.Container gap={2} direction="row" justify="flex-start">
               {favoritePokemos.map((pokemonId) => (
                  <Grid xs={12} sm={6} md={4} lg={2} key={pokemonId}>
                     <Card isHoverable isPressable css={{ padding: 10 }}>
                        <Card.Image
                           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                           width={"100%"}
                           height={140}
                        />
                     </Card>
                  </Grid>
               ))}
            </Grid.Container>
         )}
      </Layout>
   );
};

export default FavoritePage;
