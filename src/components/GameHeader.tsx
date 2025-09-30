import { Box, Typography } from "@mui/material";

export default function GameHeader() {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "1rem",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2.5rem" }}>
        Connect Four!
      </Typography>
      <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
        Get four of the same color in a row to win!
      </Typography>
    </Box>
  );
}
