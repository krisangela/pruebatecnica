import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Typography } from "@mui/material";

export default function BasicButtons() {
  return (
    <Stack
      spacing={2}
      direction="row"
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
        >
          <Button
            disabled // Desactiva el botón
            sx={{
              backgroundColor: "#59AE43",
              color: "white",
              padding: "10px",
              width: "98%",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              "&:hover": {
                backgroundColor: "#59AE43",
              },
            }}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  color: "white",
                }}
              />
            }
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "inherit",
              }}
            >
              YES - CLAIM MY DISCOUNT
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
