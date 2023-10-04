import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "#FAFAFA",
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ backgroundColor: "#FAFAFA", border: "none" }}>
        <img
          src="src\assets\product-full.svg"
          style={{ width: "100%", height: "100%" }}
          alt="Custom Icon"
        />
      </CardContent>
    </Card>
  );
}
