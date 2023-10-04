import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Certificado() {
  return (
    <Card sx={{ minWidth: 275, boxShadow: "none" }}>
      <Card sx={{ padding: "16px", backgroundColor: "#FAFAFA" }}>
        <CardContent
          sx={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Grid
            container
            spacing={0}
          >
            <Grid
              item
              xs={2.5}
              sm={2.5}
              md={5}
              lg={2}
              xl={2}
            >
              <img
                width={"88px"}
                height={"88px"}
                src="src\assets\guarantee.svg"
                alt="verified"
              />
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={9}
              lg={9}
              xl={9}
            >
              <Grid
                container
                spacing={2}
                sx={{ height: 48 }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ height: 12 }}
                >
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                    }}
                    variant="body1"
                    color="#4D5254"
                  >
                    If you are not completely thrilled with your Clarifion - We
                    have a
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#4D5254"
                    sx={{ display: "inline" }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      30 day satisfaction guarantee.
                    </span>{" "}
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline",
                      marginRight: "10px",
                    }}
                    variant="body1"
                    color="#4D5254"
                  >
                    Please refer to our return policy at the bottom of the page
                    for more details. Happy Shopping!
                  </Typography>
                  <Typography variant="body1">
                    Esto es un ejemplo de{" "}
                    <span style={{ fontWeight: "bold" }}>texto en negrita</span>{" "}
                    dentro de un párrafo normal.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
}
