import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid } from "@mui/material";

export default function BasicButtons() {
  return (
    <Stack
      spacing={2}
      direction="row"
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#59AE43",
              color: "white",
              padding: "10px",
              width: "98%",
              borderTopLeftRadius: "25px", // Redondear la esquina izquierda
              borderTopRightRadius: "25px", // Redondear la esquina derecha
              borderBottomLeftRadius: "25px", // Redondear la esquina izquierda
              borderBottomRightRadius: "25px", // Redondear la esquina derecha
            }}
            endIcon={<ArrowForwardIcon />}
          >
            YES - CLAIM MY DISCOUNT
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
