import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import HalfRating from "./Rating";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Card
        sx={{ padding: "16px" }}
        className="prueba"
      >
        <CardContent
          sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          className="prueba"
        >
          <Grid
            container
            spacing={0}
          >
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              lg={1.5}
              xl={1.5}
            >
              <Avatar
                sx={{ width: 48, height: 48 }}
                aria-label="recipe"
                src="src\assets\user.svg"
              ></Avatar>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10.5}
            >
              <Grid
                container
                spacing={2}
                sx={{ height: 48 }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ height: 10 }}
                >
                  <HalfRating></HalfRating>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ height: 12 }}
                >
                  <Typography
                    sx={{ display: "inline", marginRight: "10px" }}
                    variant="body1"
                    color="#333333"
                  >
                    Ken T.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#5BB59A"
                    sx={{ display: "inline" }}
                  >
                    <img
                      src="src\assets\verified-check.svg"
                      alt="verified"
                    />
                    Verified Customer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography
            component="div"
            sx={{ mb: 1.5, marginTop: 2 }}
          >
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
}
