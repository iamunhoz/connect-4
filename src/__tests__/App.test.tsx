import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("can restart game", () => {
  render(<App />);
  const topCells = screen.getAllByRole("button");

  fireEvent.click(topCells[0]);
  fireEvent.click(screen.getByText(/Reset Board/i));
});

test("can win the game", () => {
  render(<App />);
  const topCells = screen.getAllByRole("button", { name: /piece-dropper/i });

  // alternate between red and black
  fireEvent.click(topCells[0]);
  fireEvent.click(topCells[1]);

  fireEvent.click(topCells[0]);
  fireEvent.click(topCells[1]);

  fireEvent.click(topCells[0]);
  fireEvent.click(topCells[1]);

  fireEvent.click(topCells[0]);
  fireEvent.click(topCells[1]);

  expect(screen.getByText(/Winner is/i)).toBeInTheDocument();
});
