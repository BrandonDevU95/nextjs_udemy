import { Card, Grid } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
   pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
   const router = useRouter();

   const onFavoriteClick = () => {
      router.push(`/pokemon/${pokemonId}`);
   };

   return (
      <Grid
         xs={12}
         sm={6}
         md={4}
         lg={2}
         key={pokemonId}
         onClick={onFavoriteClick}
      >
         <Card isHoverable isPressable css={{ padding: 10 }}>
            <Card.Image
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
               width={"100%"}
               height={140}
            />
         </Card>
      </Grid>
   );
};
