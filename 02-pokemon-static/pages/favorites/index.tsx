import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { FavoritesPokemon } from "../../components/pokemon";
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
            <FavoritesPokemon pokemons={favoritePokemos} />
         )}
      </Layout>
   );
};

export default FavoritePage;
