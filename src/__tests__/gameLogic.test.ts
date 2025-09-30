import { describe, it, expect } from "vitest";
import {
  createEmptyBoard,
  dropPiece,
  checkWin,
  ROWS,
  COLS,
} from "../lib/gameLogic";

describe("gameLogic", () => {
  it("creates an empty board", () => {
    const board = createEmptyBoard();
    expect(board).toHaveLength(ROWS);
    expect(board[0]).toHaveLength(COLS);
    expect(board.flat().every((cell) => cell === null)).toBe(true);
  });

  it("drops a piece in the correct row", () => {
    const board = createEmptyBoard();
    const { newBoard, row } = dropPiece(board, 0, "red");
    expect(row).toBe(ROWS - 1);
    expect(newBoard[ROWS - 1][0]).toBe("red");
  });

  it("detects a horizontal win", () => {
    let board = createEmptyBoard();
    const lastRow = ROWS - 1;
    for (let c = 0; c < 4; c++) {
      ({ newBoard: board } = dropPiece(board, c, "red"));
    }
    expect(checkWin(board, lastRow, 3, "red")).toBe(true);
  });
});
