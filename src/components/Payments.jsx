import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const cardContent = (
  <React.Fragment>
    <CardContent>
      <Grid
        container
        spacing={2}
        alignItems="center"
        display="flex"
      >
        <Grid
          item
          xs={2.3}
          sm={2.3}
        >
          <Typography>Free Shipping</Typography>
        </Grid>

        <Grid
          item
          xs={5}
          sm={5}
        >
          <Typography>
            <img
              src="src\assets\lock-gray.svg"
              alt="candado"
              style={{ marginRight: 10 + "px" }}
            />
            Secure 256-bit SSL encryption.
          </Typography>
        </Grid>

        <Grid
          item
          xs={4.7}
          sm={4.7}
        >
          <img
            src="src\assets\visa.svg"
            alt="visa"
            style={{ marginRight: 10 + "px", height: "20px" }}
          />
          <img
            src="src\assets\shoppay.svg"
            alt="shoppay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="src\assets\paypal.svg"
            alt="paypal"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="src\assets\mastercard.svg"
            alt="mastercard"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="src\assets\gpay.svg"
            alt="gpay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="src\assets\applepay.svg"
            alt="applepay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="src\assets\amex.svg"
            alt="amex"
            style={{ marginRight: 10 + "px" }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <CardContent>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{cardContent}</Card>
        </Box>
        <Typography>NO THANKS, I DON’T WANT THIS.</Typography>
      </CardContent>
    </>
  );
}
