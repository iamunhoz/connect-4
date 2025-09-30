import { Box, Button, Grid } from "@mui/material";
import { type Player } from "../lib/gameLogic";
import { themeColorAtom } from "../lib/state";
import { useAtomValue } from "jotai";

interface CellProps {
  value: Player;
  onClick?: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  const color = value ? (value === "red" ? "red" : "black") : "lightgray";

  const themeColor = useAtomValue(themeColorAtom);

  return onClick ? (
    <Button
      variant="outlined"
      color="success"
      role="button"
      aria-label={`piece-dropper`}
      onClick={onClick}
      sx={{ mt: 1, flex: 1, border: "none" }}
    >
      <Box
        sx={{
          width: "1rem",
          height: "1rem",
          borderRadius: value && "50%",
          backgroundColor: color,
        }}
      />
    </Button>
  ) : (
    <Grid
      item
      sx={{
        border: `1px solid ${themeColor}`,
        borderRadius: "2px",
        padding: "8px 20px",
        flex: 1,
      }}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          width: "1rem",
          height: "1rem",
          borderRadius: value && "50%",
          backgroundColor: color,
        }}
      />
    </Grid>
  );
}
