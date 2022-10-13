import {
   Typography,
   Grid,
   TextField,
   FormControl,
   Box,
   Button,
   Select,
   MenuItem,
} from "@mui/material";
import { ShopLayout } from "../../components/layout";

const AddressPage = () => {
   return (
      <ShopLayout
         title="Dirección"
         pageDescription="Confirmar dirección de envío"
      >
         <Typography variant="h1" component="h1">
            Dirección
         </Typography>
         <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
               <TextField label="Nombre" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label="Apellido" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label="Dirección" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                  label="Dirección 2 (opcional)"
                  variant="filled"
                  fullWidth
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label="Código Postal" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label="Ciudad" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
               <FormControl fullWidth>
                  <Select variant="filled" label="pais" value={7}>
                     <MenuItem value={1}>Argentina</MenuItem>
                     <MenuItem value={2}>Brasil</MenuItem>
                     <MenuItem value={3}>Chile</MenuItem>
                     <MenuItem value={4}>Colombia</MenuItem>
                     <MenuItem value={5}>Perú</MenuItem>
                     <MenuItem value={6}>Uruguay</MenuItem>
                     <MenuItem value={7}>México</MenuItem>
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField label="Teléfono" variant="filled" fullWidth />
            </Grid>
         </Grid>
         <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
            <Button color="secondary" className="circular-btn" size="large">
               Revisar pedido
            </Button>
         </Box>
      </ShopLayout>
   );
};

export default AddressPage;
