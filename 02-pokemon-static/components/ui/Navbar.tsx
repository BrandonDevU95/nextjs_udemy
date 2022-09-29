import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

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
         <NextLink href="/" passHref>
            <Link>
               <Text color="white" h2>
                  P
               </Text>
               <Text color="white" h3>
                  okémon
               </Text>
            </Link>
         </NextLink>
         <Spacer css={{ flex: 1 }} />
         <NextLink href="/favorites" passHref>
            <Link>
               <Text color="white" h3>
                  Favoritos
               </Text>
            </Link>
         </NextLink>
      </div>
   );
};
