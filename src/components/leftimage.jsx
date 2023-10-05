import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMediaQuery } from "@mui/material";

export default function BasicCard() {
  // Verifica si la pantalla es pequeña (por ejemplo, menor o igual a 600px)
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  // Verifica si la pantalla es mediana (por ejemplo, entre 601px y 960px)
  //const isMediumScreen = useMediaQuery("(min-width:601px) and (max-width:960px)");

  // Determina el color de fondo según la resolución
  let backgroundColor = "#FAFAFA"; // Valor predeterminado

  if (isSmallScreen) {
    backgroundColor = "white"; // Color para pantallas pequeñas
  }
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: backgroundColor,
        border: "none",
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ backgroundColor: backgroundColor, border: "none" }}>
        <img
          src="src\assets\product-full.svg"
          style={{ width: "100%", height: "100%" }}
          alt="Custom Icon"
        />
      </CardContent>
    </Card>
  );
}
