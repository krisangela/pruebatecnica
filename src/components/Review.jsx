import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import HalfRating from "./Rating";

export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "none",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Card sx={{ padding: "16px", backgroundColor: "#FAFAFA" }}>
        <CardContent
          sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          className="white"
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
                  className="manropebold-14"
                  item
                  xs={12}
                  sx={{ height: 12 }}
                >
                  <Typography
                    className="manropebold-14"
                    sx={{
                      fontSize: "14px",
                      display: "inline",
                      marginRight: "10px",
                    }}
                    color="#333333"
                  >
                    <span style={{ fontWeight: "bold" }}>Ken T.</span>{" "}
                  </Typography>
                  <Typography
                    color="#5BB59A"
                    fontSize={"12px"}
                    sx={{ display: "inline" }}
                  >
                    <img
                      src="src\assets\verified-check.svg"
                      alt="verified"
                      style={{ marginRight: 10 + "px" }}
                    />
                    Verified Customer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography
            color="#4D5254"
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
