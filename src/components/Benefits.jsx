import Grid from "@mui/material/Grid";

import CheckIcon from "@mui/icons-material/Check";

import { Avatar, Typography, useMediaQuery } from "@mui/material";

export default function InteractiveList() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:1200px)"
  );

  const height = isSmallScreen ? "3vw" : isMediumScreen ? "2.5vw" : "1.3vw";

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={1}
          lg={1}
          xl={1}
        >
          <Avatar
            sx={{
              bgcolor: "#fafafa",
              height: "30px",
              width: "30px",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          >
            <CheckIcon
              sx={{
                height: "31px",
                width: "31px",
              }}
              style={{ color: "#2C7EF8" }}
            />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
        >
          <Typography
            style={{ fontSize: height }}
            sx={{ display: "inline" }}
            color="#000000"
            marginRight="5px"
          >
            <span> Negative Ion Technology may </span>
            <span className="manropebold"> help with allergens</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={1}
          lg={1}
          xl={1}
        >
          <Avatar
            sx={{
              bgcolor: "#fafafa",
              height: "30px",
              width: "30px",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          >
            <CheckIcon
              sx={{
                height: "31px",
                width: "31px",
              }}
              style={{ color: "#2C7EF8" }}
            />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
        >
          <Typography
            style={{ fontSize: height }}
            sx={{ display: "inline" }}
            color="#000000"
            marginRight="5px"
          >
            <span> Designed for </span>
            <span className="manropebold"> air rejuvenation</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={1}
          lg={1}
          xl={1}
        >
          <Avatar
            sx={{
              bgcolor: "#fafafa",
              height: "30px",
              width: "30px",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          >
            <CheckIcon
              sx={{
                height: "31px",
                width: "31px",
              }}
              style={{ color: "#2C7EF8" }}
            />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
        >
          <Typography
            style={{ fontSize: height }}
            sx={{ display: "inline" }}
            color="#000000"
            marginRight="5px"
          >
            <span className="manropebold">
              {" "}
              Perfect for every room in all types of places.
            </span>
            <span> in all types of places. </span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
