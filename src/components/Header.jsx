import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export function Headerb() {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        sx={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      >
        <Toolbar className="dark-blue-medium">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
            >
              <img
                src="src\assets\check-flower.svg"
                alt="icono"
                style={{ marginRight: 10 + "px" }}
              />
              30-DAY SATISFACTION GUARANTEE
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
            >
              <img
                src="src\assets\truck.svg"
                alt="camion"
                style={{ marginRight: 10 + "px" }}
              />
              Free delivery on orders over $40.00
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
            >
              <img
                src="src\assets\heart.svg"
                alt="corazon"
                style={{ marginRight: 10 + "px" }}
              />
              50.000+ HAPPY CUSTOMERS
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
            >
              <img
                src="src\assets\check-cicle.svg"
                alt="Icono"
                style={{ marginRight: 10 + "px" }}
              />
              100% Money Back Guarantee
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </>
  );
}
