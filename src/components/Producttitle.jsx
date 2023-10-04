import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard() {
  return (
    <>
      <CardContent>
        <Box sx={{ minWidth: 275 }}></Box>
        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}> ONE TIME ONLY</span>
          special price for 6 extra Clarifion for only{" "}
          <span style={{ fontWeight: "bold" }}>$14 each</span> ($84.00 total!)
        </Typography>
      </CardContent>
    </>
  );
}
