import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layout";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";
import conffeti from "canvas-confetti";

interface Props {
   pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
   const [isInFavorites, setIsInFavorites] = useState(
      localFavorites.existInFavorites(pokemon.id)
   );

   const onToggleFavorite = () => {
      localFavorites.toggleFavorites(pokemon.id);
      setIsInFavorites(!isInFavorites);
      if (isInFavorites) return;

      conffeti({
         zIndex: 999,
         particleCount: 100,
         spread: 160,
         angle: -100,
         origin: {
            x: 1,
            y: 0,
         },
      });
   };

   return (
      <Layout title={pokemon.name}>
         <Grid.Container css={{ marginTop: "5px" }} gap={2}>
            <Grid xs={12} md={4}>
               <Card isHoverable css={{ padding: "30px" }}>
                  <Card.Body>
                     <Card.Image
                        src={
                           pokemon.sprites.other?.dream_world.front_default ||
                           "/no-image.png"
                        }
                        alt={pokemon.name}
                        width="100%"
                        height={200}
                     />
                  </Card.Body>
               </Card>
            </Grid>
            <Grid xs={12} sm={8}>
               <Card>
                  <Card.Header
                     css={{ display: "flex", justifyContent: "space-between" }}
                  >
                     <Text h1 transform="capitalize">
                        {pokemon.name}
                     </Text>
                     <Button
                        color="gradient"
                        ghost={!isInFavorites}
                        onPress={onToggleFavorite}
                     >
                        {isInFavorites
                           ? "En favoritos"
                           : "Guardar en favoritos"}
                     </Button>
                  </Card.Header>
                  <Card.Body>
                     <Text size={30}>Sprites:</Text>
                     <Container display="flex" direction="row" gap={0}>
                        <Image
                           src={pokemon.sprites.front_default}
                           alt={pokemon.name}
                           width={100}
                           height={100}
                        />
                        <Image
                           src={pokemon.sprites.back_default}
                           alt={pokemon.name}
                           width={100}
                           height={100}
                        />
                        <Image
                           src={pokemon.sprites.front_shiny}
                           alt={pokemon.name}
                           width={100}
                           height={100}
                        />
                        <Image
                           src={pokemon.sprites.back_shiny}
                           alt={pokemon.name}
                           width={100}
                           height={100}
                        />
                     </Container>
                  </Card.Body>
               </Card>
            </Grid>
         </Grid.Container>
      </Layout>
   );
};

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await pokeApi.get<PokemonListResponse>(
      "/pokemon?limit=151"
   );
   const pokemonName: string[] = data.results.map((pokemon) => pokemon.name);

   return {
      paths: pokemonName.map((name) => ({
         params: { name },
      })),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { name } = params as { name: string };

   return {
      props: {
         pokemon: await getPokemonInfo(name),
      },
   };
};

export default PokemonByNamePage;