import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Grid from "@mui/material/Grid";

import CheckIcon from "@mui/icons-material/Check";

const textArray = [
  "Negative Ion Technology may help with allergens",
  "Designed for air rejuvenation",
  "Perfect for every room in all types of places.",
];

export default function InteractiveList() {
  const [dense] = React.useState(false);
  //   const [secondary, setSecondary] = React.useState(false);

  const generate = () => {
    return textArray.map((text, index) => (
      <ListItem key={index}>
        <ListItemIcon>
          <CheckIcon style={{ color: "#2C7EF8" }} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <List dense={dense}>{generate()}</List>
        </Grid>
      </Grid>
    </Box>
  );
}
