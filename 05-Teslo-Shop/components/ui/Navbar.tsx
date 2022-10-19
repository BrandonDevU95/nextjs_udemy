import { useContext, useState } from "react";
import {
   ClearOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
} from "@mui/icons-material";
import {
   AppBar,
   Toolbar,
   Typography,
   Link,
   Box,
   Button,
   IconButton,
   Badge,
   Input,
   InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { UiContext } from "../../context";

export const Navbar = () => {
   const { asPath, push } = useRouter();
   const { toggleSideMenu } = useContext(UiContext);
   const [isSearchVisible, setIsSearchVisible] = useState(false);

   const [searchTerm, setSearchTerm] = useState("");

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      push(`/search/${searchTerm}`);
   };

   return (
      <AppBar>
         <Toolbar>
            <NextLink href="/" passHref>
               <Link display="flex" alignItems="center">
                  <Typography variant="h6">Teslo |</Typography>
                  <Typography sx={{ ml: 0.5 }}>Shop</Typography>
               </Link>
            </NextLink>

            <Box flex={1} />

            <Box
               className="fadeIn"
               sx={{
                  display: isSearchVisible
                     ? "none"
                     : { xs: "none", sm: "block" },
               }}
            >
               <NextLink href="/category/men">
                  <Link>
                     <Button
                        color={asPath === "/category/men" ? "primary" : "info"}
                     >
                        Hombres
                     </Button>
                  </Link>
               </NextLink>
               <NextLink href="/category/women">
                  <Link>
                     <Button
                        color={
                           asPath === "/category/women" ? "primary" : "info"
                        }
                     >
                        Mujeres
                     </Button>
                  </Link>
               </NextLink>
               <NextLink href="/category/kid">
                  <Link>
                     <Button
                        color={asPath === "/category/kid" ? "primary" : "info"}
                     >
                        Niños
                     </Button>
                  </Link>
               </NextLink>
            </Box>

            <Box flex={1} />

            {isSearchVisible ? (
               <Input
                  type="text"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                  className="fadeIn"
                  autoFocus
                  value={searchTerm}
                  onKeyPress={(e) => e.key === "Enter" && onSearchTerm()}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar..."
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton onClick={() => setIsSearchVisible(false)}>
                           <ClearOutlined />
                        </IconButton>
                     </InputAdornment>
                  }
               />
            ) : (
               <IconButton
                  className="fadeIn"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                  onClick={() => setIsSearchVisible(true)}
               >
                  <SearchOutlined />
               </IconButton>
            )}

            <IconButton
               sx={{ display: { xs: "flex", sm: "none" } }}
               onClick={toggleSideMenu}
            >
               <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref>
               <Link>
                  <IconButton>
                     <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined />
                     </Badge>
                  </IconButton>
               </Link>
            </NextLink>

            <Button onClick={toggleSideMenu}>Menu</Button>
         </Toolbar>
      </AppBar>
   );
};
