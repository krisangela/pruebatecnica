import Grid from "@mui/material/Grid";
// import { HorizontalLinearStepper } from "./Wizard.jsx";

export function Letterhead() {
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
            xs={7}
            sm={7}
            md={7}
            lg={7}
            xl={7}
          >
            <img
              src="src\assets\clarifion-logo.svg"
              alt="logo"
              style={{ marginRight: 10 + "px" }}
            />
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              src="src\assets\mcafee.svg"
              alt="mcafee"
              style={{ marginRight: 10 + "px" }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
          >
            <img
              src="src\assets\norton-antivirus.svg"
              alt="norton"
              style={{ marginRight: 10 + "px" }}
            />
          </Grid>
        </Grid>
      </div>
      <div className="titulo">
        <h1>Wait ! your order in progress.</h1>
        <div className="subtitulo">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
        </div>
      </div>
      <div>{/* <HorizontalLinearStepper></HorizontalLinearStepper> */}</div>
    </>
  );
}
