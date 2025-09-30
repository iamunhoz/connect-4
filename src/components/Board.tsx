import { Grid } from "@mui/material";
import Cell from "./Cell";
import { COLS, type Board as BoardType, type Player } from "../lib/gameLogic";

interface BoardProps {
  board: BoardType;
  onColumnClick: (col: number) => void;
  currentPlayer: Player;
}

export default function Board({
  board,
  onColumnClick,
  currentPlayer,
}: BoardProps) {
  return (
    <Grid
      container
      direction="column"
      alignItems={"stretch"}
      width={"100%"}
      paddingX={2}
    >
      {/* @ts-expect-error component is not needed */}
      <Grid container item justifyContent="stretch">
        {Array.from({ length: COLS }).map((_, cIdx) => (
          <Cell
            key={cIdx}
            value={currentPlayer}
            onClick={() => onColumnClick(cIdx)}
          />
        ))}
      </Grid>
      {board.map((row, rIdx) => (
        /* @ts-expect-error component is not needed */
        <Grid key={rIdx} container item justifyContent="stretch">
          {row.map((cell: Player, cIdx: number) => (
            <Cell value={cell} key={cIdx} />
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
