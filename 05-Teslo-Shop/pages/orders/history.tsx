import { Typography, Chip, Grid, Link } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layout";
import NextLink from "next/link";

const columns: GridColDef[] = [
   { field: "id", headerName: "ID", width: 100 },
   { field: "fullName", headerName: "Nombre Completo", width: 300 },
   {
      field: "paid",
      headerName: "Pagada",
      width: 200,
      description: "Muestra si la orden esta pagada",
      renderCell: (params: GridRenderCellParams) => {
         return params.row.paid ? (
            <Chip label="Pagada" color="success" variant="outlined" />
         ) : (
            <Chip label="No pagada" color="error" variant="outlined" />
         );
      },
   },
   {
      field: "orden",
      headerName: "Ver Orden",
      width: 200,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
         return (
            <NextLink href={`/orders/${params.row.id}`} passHref>
               <Link underline="always">Ver Orden</Link>
            </NextLink>
         );
      },
   },
];

const rows = [
   { id: 1, paid: true, fullName: "John Doe" },
   { id: 2, paid: false, fullName: "Jane Doe" },
   { id: 3, paid: true, fullName: "Joe Doe" },
   { id: 4, paid: false, fullName: "Jack Doe" },
];

const HistoryPage = () => {
   return (
      <ShopLayout
         title="Historial de ordenes"
         pageDescription="Historial de ordenes del cliente"
      >
         <Typography variant="h1" component="h1">
            historial de ordenes
         </Typography>
         <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
               <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
               />
            </Grid>
         </Grid>
      </ShopLayout>
   );
};

export default HistoryPage;
