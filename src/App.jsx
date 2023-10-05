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
import { Grid, useMediaQuery } from "@mui/material";
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
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isMediumScreen = useMediaQuery("(max-width:1200px)");
  return (
    <>
      <Container
        sx={{
          maxWidth: "none !important",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Headerb
          position="top"
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}
        >
          {/* Header fijo en la parte superior */}
        </Headerb>
        <Container
          maxWidth="xl"
          style={{ paddingTop: "64px", paddingBottom: "64px" }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              style={{
                position: "sticky",
                top: "64px",
                zIndex: 1,
                backgroundColor: "#fff",
              }}
            >
              <Logo></Logo>
              <Letterhead></Letterhead>
              <HorizontalLinearStepper
                style={{ marginTop: "500px" }}
              ></HorizontalLinearStepper>
            </Grid>
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
                className="graybg"
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
          </Grid>
        </Container>
        <Footerb position="bottom"></Footerb>
      </Container>

      {/* telefonos */}
      <Container
        sx={{
          maxWidth: "none !important",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Headerb
          position="top"
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}
        >
          {/* Header fijo en la parte superior */}
        </Headerb>
        <Container
          maxWidth="xl"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              style={{
                position: "sticky",
                top: "80px",
                zIndex: 1,
                backgroundColor: "#fff",
              }}
            >
              <Logo></Logo>
              <Letterhead></Letterhead>
              <HorizontalLinearStepper
                style={{ marginTop: "500px" }}
              ></HorizontalLinearStepper>
            </Grid>
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
                <Ptitle></Ptitle>
                <BasicCard sx={{ className: "white" }}></BasicCard>

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
                <Pdescrip></Pdescrip>
                <Benefits></Benefits>
                <Percent></Percent>
                <Claim sx={{ width: "100%" }}></Claim>
                <Payment></Payment>
                <Certificado></Certificado>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footerb position="bottom"></Footerb>
      </Container>
    </>
  );
}
