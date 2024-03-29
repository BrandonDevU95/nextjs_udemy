import { Box, Typography, CircularProgress } from "@mui/material";

export const FullScreenLoading = () => {
   return (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
         height="calc(100vh - 200px)"
      >
         <Typography sx={{ mb: 3 }} variant="h2" fontWeight={200} fontSize={50}>
            Cargando...
         </Typography>
         <CircularProgress thickness={2} />
      </Box>
   );
};
