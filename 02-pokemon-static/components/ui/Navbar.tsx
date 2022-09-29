import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
   const { theme, isDark } = useTheme();

   return (
      <div
         style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            padding: "0px 20px",
            backgroundColor: theme?.colors.gray200.value,
         }}
      >
         <Image
            width="70"
            height="70"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Pokemon Icon"
         />
         <Text color="white" h2>
            P
         </Text>
         <Text color="white" h3>
            okémon
         </Text>
         <Spacer css={{ flex: 1 }} />
         <Text color="white" h3>
            Favoritos
         </Text>
      </div>
   );
};
