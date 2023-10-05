import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard() {
  return (
    <>
      <CardContent>
        <Box sx={{ minWidth: 275 }}></Box>
        <Typography style={{ fontSize: "3vw" }}>
          <span className="manrope-blue-regular-32"> ONE TIME ONLY</span>
          <span className="manrope-black-regular-32">
            {" "}
            special price for 6 extra Clarifion for only{" "}
          </span>
          <span className="manrope-blue-regular-32">$14 each</span>
          <span className="manrope-black-regular-32"> ($84.00 total!) </span>
        </Typography>
      </CardContent>
    </>
  );
}
