import { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "../api";
import { Layout } from "../components/layout";
import { PokemonListResponse, SmalllPokemon } from "../interfaces";

interface Props {
   pokemons: SmalllPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
   return (
      <Layout title="Listado de pokemos">
         <Grid.Container gap={2} justify="flex-start">
            {pokemons.map(({ id, name, img, url }) => (
               <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                  <Card isHoverable isPressable>
                     <Card.Body
                        css={{
                           p: 1,
                        }}
                     >
                        <Card.Image src={img} width="100%" height={140} />
                     </Card.Body>
                     <Card.Footer>
                        <Row justify="space-between">
                           <Text transform="capitalize">{name}</Text>
                           <Text>#{id}</Text>
                        </Row>
                     </Card.Footer>
                  </Card>
               </Grid>
            ))}
         </Grid.Container>
      </Layout>
   );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await pokeApi.get<PokemonListResponse>(
      "/pokemon?limit=151"
   );

   const pokemons: SmalllPokemon[] = data.results.map((pokemon, index) => {
      const id = index + 1;
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      return { ...pokemon, id, img };
   });

   return {
      props: {
         pokemons,
      },
   };
};

export default HomePage;
