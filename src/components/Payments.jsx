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
        alignItems="center"
        display="flex"
      >
        <Grid
          item
          xs={2}
          sm={2}
        >
          <Typography>Free Shipping </Typography>
        </Grid>
        <Grid
          item
          xs={0.2}
          sm={0.2}
        >
          <Typography> |</Typography>
        </Grid>
        <Grid
          item
          xs={4.5}
          sm={4.5}
        >
          <Typography>
            <img
              src="public\assets\lock-gray.svg"
              alt="candado"
              style={{ marginRight: 10 + "px" }}
            />
            Secure 256-bit SSL encryption.
          </Typography>
        </Grid>
        <Grid
          item
          xs={0.2}
          sm={0.2}
        >
          <Typography> |</Typography>
        </Grid>

        <Grid
          item
          xs={5}
          sm={5}
        >
          <img
            src="public\assets\visa.svg"
            alt="visa"
            style={{ marginRight: 10 + "px", height: "20px" }}
          />
          <img
            src="public\assets\shoppay.svg"
            alt="shoppay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="public\assets\paypal.svg"
            alt="paypal"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="public\assets\mastercard.svg"
            alt="mastercard"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="public\assets\gpay.svg"
            alt="gpay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="public\assets\applepay.svg"
            alt="applepay"
            style={{ marginRight: 10 + "px" }}
          />
          <img
            src="public\assets\amex.svg"
            alt="amex"
            style={{ marginRight: 10 + "px" }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);
const secondcardContent = (
  <React.Fragment>
    <CardContent>
      <Grid
        container
        alignItems="center"
        display="flex"
      >
        <Grid
          item
          xs={4}
          sm={4}
        >
          <Typography>Free Shipping </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          sm={8}
        >
          <Typography>
            <img
              src="public\assets\lock-gray.svg"
              alt="candado"
              style={{ marginRight: 10 + "px" }}
            />
            Secure 256-bit SSL encryption.
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          display="flex"
        >
          <Grid item>
            <Typography>
              {" "}
              <br />
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
          >
            <img
              src="public\assets\visa.svg"
              alt="visa"
              style={{ marginRight: 10 + "px", height: "20px" }}
            />
            <img
              src="public\assets\shoppay.svg"
              alt="shoppay"
              style={{ marginRight: 10 + "px" }}
            />
            <img
              src="public\assets\paypal.svg"
              alt="paypal"
              style={{ marginRight: 10 + "px" }}
            />
            <img
              src="public\assets\mastercard.svg"
              alt="mastercard"
              style={{ marginRight: 10 + "px" }}
            />
            <img
              src="public\assets\gpay.svg"
              alt="gpay"
              style={{ marginRight: 10 + "px" }}
            />
            <img
              src="public\assets\applepay.svg"
              alt="applepay"
              style={{ marginRight: 10 + "px" }}
            />
            <img
              src="public\assets\amex.svg"
              alt="amex"
              style={{ marginRight: 10 + "px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <CardContent
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{cardContent}</Card>
        </Box>
        <Typography alignContent={"center"}>
          <Box
            textAlign="center"
            marginTop="20px"
          >
            <span className="manrope-red-medium-18">
              NO THANKS, I DON’T WANT THIS.
            </span>
          </Box>
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{secondcardContent}</Card>
        </Box>
        <Typography alignContent={"center"}>
          <Box
            textAlign="center"
            marginTop="20px"
          >
            <span className="manrope-red-medium-18">
              NO THANKS, I DON’T WANT THIS.
            </span>
          </Box>
        </Typography>
      </CardContent>
    </>
  );
}
