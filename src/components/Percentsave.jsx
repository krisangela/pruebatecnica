import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Avatar, Grid, Typography } from "@mui/material";

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
            disabled
            sx={{
              backgroundColor: "#EDF3FD",
              color: "white",
              padding: "10px",
              width: "98%",
              borderTopLeftRadius: "10px", // Redondear la esquina izquierda
              borderTopRightRadius: "10px", // Redondear la esquina derecha
              borderBottomLeftRadius: "10px", // Redondear la esquina izquierda
              borderBottomRightRadius: "10px", // Redondear la esquina derecha
              textTransform: "none",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#2C7EF8",
                height: "30px",
                width: "30px",
                marginRight: "10px",
              }}
            >
              %
            </Avatar>
            <Typography
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              Save
              <span> Save </span>
              <span className="manrope-blue-regular-32"> 53$ </span>
              <span> and get </span>
              <span className="manrope-blue-regular-32">
                {" "}
                6 extra Clarifion{" "}
              </span>
              <span> for only </span>
              <span className="manrope-blue-regular-32"> $14 each. </span>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
