import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import HalfRating from "./Rating";
import { Grid } from "@mui/material";

export default function BasicCard() {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          border: "none",
          boxShadow: "none",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Card
          sx={{
            padding: "5px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <CardContent
            sx={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "#FAFAFA",
            }}
          >
            <Grid
              container
              spacing={0}
            >
              {/* Grid de imagen             */}
              <Grid item>
                <img
                  width={"134px"}
                  height={"134px"}
                  src="assets\product-blue.svg"
                  alt="verified"
                />
              </Grid>
              {/* Grid de separacion             */}
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                lg={0.5}
                xl={0.5}
              ></Grid>
              {/* Grid de derecha             */}
              <Grid
                item
                xs={4}
                sm={4}
                md={6}
                lg={7}
                xl={12}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography
                      sx={{ display: "inline", marginRight: "10px" }}
                      variant="body1"
                      color="#333333"
                      style={{ fontSize: "1.5vw" }}
                    >
                      Clarifion Air Ionizer
                    </Typography>

                    <Typography
                      variant="body1"
                      color="#5BB59A"
                      sx={{ display: "inline" }}
                      style={{ fontSize: "1.5vw", textAlign: "right" }}
                      align="right"
                    >
                      $180 $84
                    </Typography>

                    <Grid
                      item
                      xs={12}
                    >
                      <HalfRating></HalfRating>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      //   sx={{ height: 12 }}
                    >
                      <Typography
                        sx={{ display: "inline", marginRight: "10px" }}
                        style={{ fontSize: "1.3vw" }}
                        variant="body1"
                        color="#333333"
                      >
                        <img
                          src="assets\left-in-stock.svg"
                          alt="verified"
                        />{" "}
                        12 left in Stock
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        sx={{ mb: 1.5, width: "100%" }}
                        style={{ fontSize: "1.3vw" }}
                      >
                        Simply plug a Clarifion into any standard outlet and
                        replace bulky, expensive air purifiers with a simple.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>{" "}
          </CardContent>
        </Card>
      </Card>

      <Card
        sx={{
          minWidth: 275,
          border: "none",
          boxShadow: "none",
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Card
          sx={{
            padding: "0px",
            backgroundColor: "#ffffff",
          }}
        >
          <CardContent
            sx={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "#ffffff",
            }}
          >
            <Grid
              container
              spacing={0}
            >
              {/* Grid de imagen             */}
              <Grid item>
                <img
                  width={"130px"}
                  height={"130px"}
                  src="assets\product-blue.svg"
                  alt="product"
                />
              </Grid>
              {/* Grid de separacion             */}
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                lg={0.5}
                xl={0.5}
              ></Grid>
              {/* Grid de derecha             */}
              <Grid
                item
                xs={4}
                sm={4}
                md={6}
                lg={7}
                xl={7}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography
                      sx={{ display: "inline", marginRight: "10px" }}
                      variant="body1"
                      color="#333333"
                      style={{ fontSize: "3vw" }}
                    >
                      Clarifion Air Ionizer
                    </Typography>

                    <Typography
                      variant="body1"
                      color="#5BB59A"
                      sx={{ display: "inline" }}
                      style={{ fontSize: "3vw", textAlign: "right" }}
                      align="right"
                    >
                      $180 $84
                    </Typography>

                    <Grid
                      item
                      xs={12}
                    >
                      <HalfRating></HalfRating>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      //   sx={{ height: 12 }}
                    >
                      <Typography
                        sx={{ display: "inline" }}
                        color="#333333"
                        style={{ fontSize: "3vw" }}
                      >
                        <img
                          src="assets\left-in-stock.svg"
                          alt="verified"
                        />{" "}
                        12 left in Stock
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Typography
                component="div"
                sx={{ mb: 1.5, marginTop: 2 }}
                style={{ fontSize: "3vw" }}
              >
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </Typography>
            </Grid>{" "}
          </CardContent>
        </Card>
      </Card>
    </>
  );
}
