import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Grid from "@mui/material/Grid";
import { Container, Grid, Typography } from "@mui/material";
export function Footerb() {
  return (
    <>
      <Box
        position="fixed"
        bottom="0"
        // zIndex="1000"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <AppBar position="static">
          <Toolbar className="dark-blue-regular">
            <Container maxWidth="xl">
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
                  <Typography
                    className="dark-blue-regular"
                    align="left"
                  >
                    Copyright (c) 2023 | Clarifionsupport@clarifion.com
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Typography
                    className="dark-blue-regular"
                    align="right"
                  >
                    <img
                      src="public\assets\lock-white.svg"
                      alt="candado"
                      style={{ marginRight: 10 + "px" }}
                    />
                    Secure 256-bit SSL encryption.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        position="fixed"
        bottom="0"
        // zIndex="1000"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <AppBar position="static">
          <Toolbar className="dark-blue-regular">
            <Container maxWidth="xl">
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
                  <Typography
                    className="dark-blue-regular"
                    align="center"
                  >
                    Copyright (c) 2023 | Clarifionsupport@clarifion.com
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Typography
                    className="dark-blue-regular"
                    align="center"
                  >
                    <img
                      src="public\assets\lock-white.svg"
                      alt="candado"
                      style={{ marginRight: 10 + "px" }}
                    />
                    Secure 256-bit SSL encryption.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
