import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

export function Headerb() {
  const [activeGrid, setActiveGrid] = useState(1);

  // Función para cambiar el Grid activo
  const handleGridChange = (gridNumber) => {
    if (gridNumber > 4) {
      // Si el número del grid es mayor que 4, reiniciar a 1
      setActiveGrid(1);
    } else if (gridNumber < 1) {
      // Si el número del grid es menor que 1, avanzar al 4
      setActiveGrid(4);
    } else {
      //establecer el número del grid
      setActiveGrid(gridNumber);
    }
  };

  return (
    <>
      {/* header pantalla grande */}
      <Box
        position="fixed"
        top="0"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
          }}
        >
          <Toolbar className="dark-blue-medium">
            <Container maxWidth="xl">
              <Stack
                spacing={2}
                direction="row"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "252F3D",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  justifyContent={"space-between"}
                >
                  {/* Primer elemento */}
                  <Grid
                    item
                    backgroundColor="#252F3D"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "left",
                        className: "manrope-medium-12",
                      }}
                    >
                      <img
                        src="assets\check-flower.svg"
                        alt="icono"
                        style={{
                          marginRight: 10 + "px",
                          height: "22px",
                          width: "22px",
                          marginLeft: "5px",
                        }}
                      />

                      <Typography
                        sx={{ display: "inline" }}
                        color="#000000"
                        marginRight="5px"
                        alignContent={"center"}
                      >
                        <span className=" manrope-medium-12">
                          30-DAY SATISFACTION GUARANTEE
                        </span>
                      </Typography>
                    </div>
                  </Grid>
                  {/* Segundo grid */}
                  <Grid item>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="assets\truck.svg"
                        alt="icono"
                        style={{
                          marginRight: 10 + "px",
                          height: "22px",
                          width: "22px",
                          marginLeft: "5px",
                        }}
                      />
                      <Typography
                        sx={{ display: "inline" }}
                        color="#000000"
                        marginRight="5px"
                      >
                        <span className="manrope-medium-12">
                          FREE DELIVERY ON ORDERS OVER $40.00
                        </span>
                      </Typography>
                    </div>
                  </Grid>
                  {/* Tercer paso */}
                  <Grid item>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="assets\heart.svg"
                        alt="icono"
                        style={{
                          marginRight: 10 + "px",
                          height: "22px",
                          width: "22px",
                          marginLeft: "5px",
                        }}
                      />
                      <Typography
                        sx={{ display: "inline" }}
                        color="#000000"
                        marginRight="5px"
                      >
                        <span className="manrope-medium-12">
                          50.000+ HAPPY CUSTOMERS
                        </span>
                      </Typography>
                    </div>
                  </Grid>
                  {/* Cuarto grid */}
                  <Grid item>
                    <div style={{ display: "flex", alignItems: "right" }}>
                      <img
                        src="assets\check-cicle.svg"
                        alt="icono"
                        style={{
                          marginRight: 10 + "px",
                          height: "22px",
                          width: "22px",
                          marginLeft: "5px",
                        }}
                      />
                      <Typography
                        sx={{ display: "inline" }}
                        color="#000000"
                        marginRight="5px"
                      >
                        <span className="manrope-medium-12">
                          100% MONEY BACK GUARANTEE
                        </span>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      {/* header pantalla xs, sm, md */}
      <Box
        position="fixed"
        top="0"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
        }}
      >
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
          }}
        >
          <Toolbar className="dark-blue-medium">
            <Container maxWidth="xl">
              <Stack
                spacing={2}
                direction="row"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Grid
                  container
                  spacing={0}
                  justifyContent={"space-between"}
                >
                  <div>
                    <IconButton
                      onClick={() => handleGridChange(activeGrid - 1)}
                    >
                      <ArrowBackIosTwoToneIcon style={{ color: "white" }} />
                    </IconButton>
                  </div>
                  {/* Primer elemento */}
                  {activeGrid === 1 && (
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets\check-flower.svg"
                          alt="icono"
                          style={{
                            marginRight: 10 + "px",
                            height: "22px",
                            width: "22px",
                            marginLeft: "5px",
                          }}
                        />

                        <Typography
                          sx={{ display: "inline" }}
                          color="#000000"
                          marginRight="5px"
                          alignContent={"center"}
                        >
                          <span className=" manrope-medium-12">
                            30-DAY SATISFACTION GUARANTEE
                          </span>
                        </Typography>
                      </div>
                    </Grid>
                  )}

                  {/* Segundo grid */}
                  {activeGrid === 2 && (
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets\truck.svg"
                          alt="icono"
                          style={{
                            marginRight: 10 + "px",
                            height: "22px",
                            width: "22px",
                            marginLeft: "5px",
                          }}
                        />
                        <Typography
                          sx={{ display: "inline" }}
                          color="#000000"
                          marginRight="5px"
                        >
                          <span className="manrope-medium-12">
                            FREE DELIVERY ON ORDERS OVER $40.00
                          </span>
                        </Typography>
                      </div>
                    </Grid>
                  )}

                  {/* Tercer paso */}
                  {activeGrid === 3 && (
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets\heart.svg"
                          alt="icono"
                          style={{
                            marginRight: 10 + "px",
                            height: "22px",
                            width: "22px",
                            marginLeft: "5px",
                          }}
                        />
                        <Typography
                          sx={{ display: "inline" }}
                          color="#000000"
                          marginRight="5px"
                        >
                          <span className="manrope-medium-12">
                            50.000+ HAPPY CUSTOMERS
                          </span>
                        </Typography>
                      </div>
                    </Grid>
                  )}

                  {/* Cuarto grid */}
                  {activeGrid === 4 && (
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets\check-cicle.svg"
                          alt="icono"
                          style={{
                            marginRight: 10 + "px",
                            height: "22px",
                            width: "22px",
                            marginLeft: "5px",
                          }}
                        />
                        <Typography
                          sx={{ display: "inline" }}
                          color="#000000"
                          marginRight="5px"
                        >
                          <span className="manrope-medium-12">
                            100% MONEY BACK GUARANTEE
                          </span>
                        </Typography>
                      </div>
                    </Grid>
                  )}

                  <div>
                    <IconButton
                      onClick={() => handleGridChange(activeGrid + 1)}
                      // disabled={activeGrid === 1}
                    >
                      <ArrowForwardIosTwoToneIcon style={{ color: "white" }} />
                    </IconButton>
                  </div>
                </Grid>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
