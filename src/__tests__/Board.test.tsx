import { render, screen, fireEvent } from "@testing-library/react";
import Board from "../components/Board";
import { createEmptyBoard } from "../lib/gameLogic";
import { expect, test, vi } from "vitest";

test("renders a clickable top row", () => {
  const mockClick = vi.fn();
  render(
    <Board
      currentPlayer={"red"}
      board={createEmptyBoard()}
      onColumnClick={mockClick}
    />
  );

  const clickableCells = screen.getAllByRole("button");
  fireEvent.click(clickableCells[0]);

  expect(mockClick).toHaveBeenCalledWith(0);
});
