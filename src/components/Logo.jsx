import { Grid } from "@mui/material";

export function Logo() {
  return (
    <>
      <div
        className="white"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <img
              src="assets\clarifion-logo.svg"
              alt="logo"
              style={{
                marginRight: 10 + "px",
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <Grid
              container
              justifyContent="flex-end"
            >
              <img
                src="assets\mcafee.svg"
                alt="mcafee"
                style={{
                  marginRight: 10 + "px",
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
              <img
                src="assets\norton-antivirus.svg"
                alt="norton"
                style={{
                  marginRight: 10 + "px",
                  maxWidth: "30%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
