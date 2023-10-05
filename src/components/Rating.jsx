import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating() {
  return (
    <Stack
      spacing={1}
      zIndex={0}
    >
      <Rating
        zIndex={0}
        name="half-rating"
        defaultValue={5}
        precision={0.5}
        readOnly
        justifyContent="center"
        alignItems="center"
      />
    </Stack>
  );
}
