export type Player = "red" | "black" | null;
export const ROWS = 4;
export const COLS = 4;

export type Board = Player[][];

export function createEmptyBoard(): Board {
  return Array.from({ length: ROWS }, () => Array<Player>(COLS).fill(null));
}

export function dropPiece(
  board: Board,
  col: number,
  player: Exclude<Player, null>
) {
  const newBoard = board.map((row) => [...row]);
  for (let r = ROWS - 1; r >= 0; r--) {
    if (!newBoard[r][col]) {
      newBoard[r][col] = player;
      return { newBoard, row: r };
    }
  }
  return { newBoard, row: -1 };
}

export function checkWin(
  board: Board,
  row: number,
  col: number,
  player: Exclude<Player, null>
): boolean {
  const dirs = [
    [
      [0, 1],
      [0, -1],
    ],
    [
      [1, 0],
      [-1, 0],
    ],
    [
      [1, 1],
      [-1, -1],
    ],
    [
      [1, -1],
      [-1, 1],
    ],
  ];
  return dirs.some((direction) => {
    let count = 1;
    direction.forEach(([dr, dc]) => {
      let r = row + dr,
        c = col + dc;
      while (
        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS &&
        board[r][c] === player
      ) {
        count++;
        r += dr;
        c += dc;
      }
    });
    return count >= 4;
  });
}
