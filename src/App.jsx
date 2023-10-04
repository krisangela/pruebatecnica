import "./index.css";
import Container from "@mui/material/Container";
import { Footerb } from "./components/Footer.jsx";
import { Headerb } from "./components/Header.jsx";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Letterhead } from "./components/Letterhead";
import { HorizontalLinearStepper } from "./components/Wizard";
import { Logo } from "./components/Logo";
import { Grid } from "@mui/material";
import BasicCard from "./components/leftimage";
import RecipeReviewCard from "./components/Review";
import Certificado from "./components/Certificate";
import Payment from "./components/Payments";
import Claim from "./components/Claim";
import Percent from "./components/Percentsave";
import Benefits from "./components/Benefits";
import Ptitle from "./components/Producttitle";
import Pdescrip from "./components/Productdesc";

export default function App() {
  return (
    <>
      <Container sx={{ maxWidth: "none !important" }}>
        <Headerb
          position="top"
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}
        >
          {/* Header fijo en la parte superior */}
        </Headerb>
        <React.Fragment>
          <CssBaseline />
          <Container
            maxWidth="xl"
            style={{ position: "sticky", top: "64px" }}
          >
            <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
              <Logo></Logo>
              <Letterhead></Letterhead>
              <HorizontalLinearStepper
                style={{ marginTop: "500px" }}
              ></HorizontalLinearStepper>
            </Box>
          </Container>
        </React.Fragment>

        <Container
          maxWidth="xl"
          style={{ position: "relative", top: "70px", bottom: "100px" }}
        >
          <Container
            maxWidth="xl"
            className="graybg"
            style={{ zIndex: 0 }}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <BasicCard className="graybg"></BasicCard>

                <RecipeReviewCard></RecipeReviewCard>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Ptitle></Ptitle>
                <Pdescrip></Pdescrip>
                <Benefits></Benefits>
                <Percent></Percent>
                <Claim sx={{ width: "100%" }}></Claim>
                <Payment></Payment>
                <Certificado></Certificado>
              </Grid>
            </Grid>
          </Container>
        </Container>

        <Footerb position="bottom"></Footerb>
      </Container>
    </>
  );
}
