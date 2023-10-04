import Stack from "@mui/material/Stack";
import { Avatar, Grid, Typography } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export function HorizontalLinearStepper() {
  return (
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
        {/* Primer paso */}
        <Grid
          item
          // xs={4}
        >
          <div style={{ display: "flex", alignItems: "left" }}>
            <Avatar
              sx={{
                bgcolor: "#FFFFFF",
                height: "30px",
                width: "30px",
                marginRight: "10px",
                marginLeft: "5px",
              }}
            >
              <CheckCircleSharpIcon
                sx={{
                  height: "31px",
                  width: "31px",
                  //  marginRight: "10px",
                  //  marginLeft: "5px",
                }}
                style={{ color: "#85BF55" }}
              />
            </Avatar>

            <Typography
              className="manrope-regular-20"
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
              alignContent={"center"}
            >
              Step 1: Cart Review
            </Typography>
          </div>
        </Grid>
        {/* Segundo paso */}
        <Grid
          item
          // xs={3}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#FFFFFF",
                height: "30px",
                width: "30px",
                marginRight: "10px",
                marginLeft: "5px",
              }}
            >
              <CheckCircleSharpIcon
                sx={{
                  height: "31px",
                  width: "31px",
                  //  marginRight: "10px",
                  //  marginLeft: "5px",
                }}
                style={{ color: "#85BF55" }}
              />
            </Avatar>
            <Typography
              className="manrope-regular-20"
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              Step 2: Payment
            </Typography>
          </div>
        </Grid>
        {/* Tercer paso */}
        <Grid
          item
          // xs={3}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                className: "manrope-regular-20",
                bgcolor: "#2C7EF8",
                height: "30px",
                width: "30px",
                marginRight: "10px",
              }}
            >
              3
            </Avatar>
            <Typography
              className="manrope-regular-20"
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              Step 3: Confirm
            </Typography>
          </div>
        </Grid>
        {/* Cuarto paso */}
        <Grid
          item
          // xs={3}
        >
          <div style={{ display: "flex", alignItems: "right" }}>
            <Avatar
              sx={{
                bgcolor: "#FFFFFF",
                borderColor: "#2C7EF8",
                height: "30px",
                width: "30px",
                marginRight: "10px",

                borderWidth: "8px", // Ancho del borde
                color: "#2C7EF8", // Color de fondo del Avatar

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%", // Hacerlo redondo
              }}
            >
              4
            </Avatar>
            <Typography
              className="manrope-regular-20"
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              Step 4: Complete
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}
