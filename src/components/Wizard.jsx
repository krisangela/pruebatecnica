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
        <Grid item>
          <div
            style={{
              display: "flex",
              alignItems: "left",
              className: "manrope-regular-20",
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
                }}
                style={{ color: "#85BF55" }}
              />
            </Avatar>

            <Typography
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
              alignContent={"center"}
            >
              <span className=" manrope-regular-20">Step 1: Cart Review</span>
            </Typography>
          </div>
        </Grid>
        {/* Segundo paso */}
        <Grid item>
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
                }}
                style={{ color: "#85BF55" }}
              />
            </Avatar>
            <Typography
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              <span className=" manrope-regular-20">Step 2: Payment</span>
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
            <Avatar
              sx={{
                bgcolor: "#2C7EF8",
                height: "30px",
                width: "30px",
                marginRight: "10px",
              }}
            >
              <span className=" manrope-regular-20">3</span>
            </Avatar>
            <Typography
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              <span className="manrope-bold-20">Step 3: Confirm</span>
            </Typography>
          </div>
        </Grid>
        {/* Cuarto paso */}
        <Grid item>
          <div style={{ display: "flex", alignItems: "right" }}>
            <Avatar
              sx={{
                bgcolor: "#FFFFFF",
                borderColor: "#2C7EF8",
                height: "30px",
                width: "30px",
                marginRight: "10px",
                borderWidth: "8px",
                color: "#2C7EF8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              4
            </Avatar>
            <Typography
              sx={{ display: "inline" }}
              color="#000000"
              marginRight="5px"
            >
              <span className=" manrope-regular-20">Step 4: Complete</span>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}
