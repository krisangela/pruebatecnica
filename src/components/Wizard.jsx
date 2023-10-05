import Stack from "@mui/material/Stack";
import { Avatar, Grid, Typography } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export function HorizontalLinearStepper() {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        style={{ marginTop: "20px", marginBottom: "20px" }}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
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
                  border: "0.1px solid  #2C7EF8",
                  height: "30px",
                  width: "30px",
                  marginRight: "10px",
                  borderWidth: "1px",
                  color: "#2C7EF8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
      {/* pantallas pequenas */}
      <Stack
        spacing={2}
        direction="row"
        style={{ marginTop: "20px", marginBottom: "20px" }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
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
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#FFFFFF",
                  height: "30px",
                  width: "30px",
                  marginBottom: "5px",
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
              >
                <span className="manrope-regular-20">Cart Review</span>
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
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#FFFFFF",
                  height: "30px",
                  width: "30px",
                  marginBottom: "5px",
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
              >
                <span className="manrope-regular-20">Payment</span>
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
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#2C7EF8",
                  height: "30px",
                  width: "30px",
                  marginBottom: "5px",
                }}
              >
                <span className="manrope-regular-20">3</span>
              </Avatar>
              <Typography
                sx={{ display: "inline" }}
                color="#000000"
              >
                <span className="manrope-bold-20">Confirm</span>
              </Typography>
            </div>
          </Grid>
          {/* Cuarto paso */}
          <Grid item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "0.1px solid  #2C7EF8",
                  height: "30px",
                  width: "30px",
                  marginRight: "10px",
                  borderWidth: "1px",
                  color: "#2C7EF8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                4
              </Avatar>
              <Typography
                sx={{ display: "inline" }}
                color="#000000"
              >
                <span className="manrope-regular-20">Complete</span>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
