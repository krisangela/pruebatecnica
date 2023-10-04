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
            </Typography>
            <Typography
              marginRight="5px"
              color="#2C7EF8"
              sx={{ display: "inline" }}
            >
              53%
            </Typography>
            <Typography
              marginRight="5px"
              sx={{ display: "inline" }}
              color="#000000"
            >
              and get
            </Typography>
            <Typography
              marginRight="5px"
              sx={{ display: "inline" }}
              color="#2C7EF8"
            >
              6 extra Clarifision
            </Typography>
            <Typography
              marginRight="5px"
              sx={{ display: "inline" }}
              color="#000000"
            >
              for only
            </Typography>
            <Typography
              marginRight="5px"
              sx={{ display: "inline" }}
              color="#2C7EF8"
            >
              $14 Each.
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
