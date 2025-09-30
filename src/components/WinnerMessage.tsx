import { Box, Typography } from "@mui/material";
import type { Player } from "../lib/gameLogic";

export default function WinnerMessage({ winner }: { winner: Player }) {
  if (!winner) return null;

  return (
    <Typography
      variant="h3"
      sx={{ fontSize: "1rem", textAlign: "center" }}
      display={"flex"}
      alignItems={"center"}
    >
      Winner is
      <Box
        sx={{
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          backgroundColor: winner,
          marginLeft: "2px",
        }}
      />
      !
    </Typography>
  );
}
