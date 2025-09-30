import { Box, Button, Typography } from "@mui/material";
import { COLORS, themeColorAtom } from "../lib/state";
import { useAtom } from "jotai";

export default function ThemeChanger() {
  const [themeColor, setThemeColor] = useAtom(themeColorAtom);
  return (
    <Button
      variant="text"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        scale: "0.8",
      }}
      onClick={() =>
        setThemeColor(
          // @ts-expect-error state changing works
          themeColor === COLORS.green ? COLORS.purple : COLORS.green
        )
      }
    >
      <Typography variant="button">Theme:</Typography>
      <Box
        sx={{
          width: "0.9rem",
          height: "0.9rem",
          borderRadius: "50%",
          marginTop: "-2px",
          marginLeft: "4px",
          backgroundColor: themeColor,
        }}
      />
    </Button>
  );
}
