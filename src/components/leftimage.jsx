import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="graybg">
        <img
          src="src\assets\product-full.svg"
          style={{ width: "100%", height: "100%" }}
          alt="Custom Icon"
        />
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
