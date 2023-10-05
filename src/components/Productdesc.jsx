import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import HalfRating from "./Rating";
import { Grid } from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, border: "none", boxShadow: "none" }}>
      <Card sx={{ padding: "16px", backgroundColor: "#FAFAFA" }}>
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
            <Grid
              item
              xs={3.5}
              sm={3.5}
              md={3.5}
              lg={2.5}
              xl={2.5}
            >
              <img
                width={"134px"}
                height={"134px"}
                src="src\assets\product-blue.svg"
                alt="verified"
              />
            </Grid>
            {/* Grid de separacion             */}
            <Grid
              item
              xs={0.5}
              sm={0.5}
              md={0.5}
              lg={0.5}
              xl={0.5}
            ></Grid>
            {/* Grid de derecha             */}
            <Grid
              item
              xs={9}
              sm={9}
              md={9}
              lg={9}
              xl={9}
            >
              <Grid
                container
                spacing={2}
                // sx={{ height: 48 }}
              >
                <Grid
                  item
                  xs={12}
                  //   sx={{ height: 10 }}
                >
                  <Grid
                    item
                    xs={12}
                    //   sx={{ height: 12 }}
                  >
                    <Typography
                      sx={{ display: "inline", marginRight: "10px" }}
                      variant="body1"
                      color="#333333"
                    >
                      Clarifion Air Ionizer
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#5BB59A"
                      sx={{ display: "inline" }}
                    >
                      $180 $84
                    </Typography>
                  </Grid>
                  <Grid
                    zIndex={0}
                    item
                    xs={12}
                    //   sx={{ height: 10 }}
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
                      variant="body1"
                      color="#333333"
                    >
                      <img
                        src="src\assets\left-in-stock.svg"
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
            >
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </Typography>
          </Grid>{" "}
        </CardContent>
      </Card>
    </Card>
  );
}
