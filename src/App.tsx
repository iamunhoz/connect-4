import { useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import {
  type Board as BoardType,
  createEmptyBoard,
  dropPiece,
  checkWin,
  type Player,
} from "./lib/gameLogic";
import { Box } from "@mui/material";
import GameHeader from "./components/GameHeader";
import WinnerMessage from "./components/WinnerMessage";
import ThemeChanger from "./components/ThemeChanger";

export default function App() {
  const [board, setBoard] = useState<BoardType>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] =
    useState<Exclude<Player, null>>("red");
  const [winner, setWinner] = useState<Player>(null);

  const handleColumnClick = (col: number) => {
    if (winner) return;
    const { newBoard, row } = dropPiece(board, col, currentPlayer);
    if (row === -1) return; // column is full
    setBoard(newBoard);

    if (checkWin(newBoard, row, col, currentPlayer)) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === "red" ? "black" : "red");
    }
  };

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPlayer("red");
    setWinner(null);
  };

  return (
    <Box
      id="gamebox"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <GameHeader />

      <ThemeChanger />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WinnerMessage winner={winner} />
        <Board
          board={board}
          onColumnClick={handleColumnClick}
          currentPlayer={currentPlayer}
        />
        <Controls winner={winner} onReset={resetGame} />
      </Box>

      <Box />
    </Box>
  );
}
