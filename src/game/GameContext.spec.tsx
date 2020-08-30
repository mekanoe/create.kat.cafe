import * as React from "react";
import { Value } from ".";
import { calculateTotals, GameState } from "./GameContext";

const mockCard = {
  title: "AC",
  description: "AC",
  image: "AC",
  value: [Value.Animalism, Value.Cuteness],
};

it("calculates final score total", () => {
  const mockSelections: GameState["selections"] = [
    {
      ...mockCard,
      value: [Value.Animalism, Value.Cuteness],
    },
    {
      ...mockCard,
      value: [Value.Dominance, Value.Cuteness],
    },
    {
      ...mockCard,
      value: [Value.Cuteness, Value.Cuteness],
    },
  ];

  const totals = calculateTotals(mockSelections as GameState["selections"]);
  expect(totals).toMatchObject({
    [Value.Cuteness]: 4,
    [Value.Animalism]: 1,
    [Value.Dominance]: 1,
  });
});
