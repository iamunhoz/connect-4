import { Box, Button } from "@mui/material";
import { type Player } from "../lib/gameLogic";
import { themeColorAtom } from "../lib/state";
import { useAtomValue } from "jotai";

interface ControlsProps {
  winner: Player;
  onReset: () => void;
}

export default function Controls({ winner, onReset }: ControlsProps) {
  const themeColor = useAtomValue(themeColorAtom);
  return (
    <Box textAlign="center" mb={2}>
      <Button
        variant="text"
        onClick={onReset}
        sx={{ mt: 1, color: themeColor }}
      >
        {winner ? "New Game" : "Reset Board"}
      </Button>
    </Box>
  );
}
