import * as React from "react";
import { Card, Value } from ".";

export type GameState = {
  selections: Card[];
};

export const defaultGameState: GameState = {
  selections: [],
};

export const GameContext = React.createContext<GameState>(defaultGameState);

export const calculateTotals = (selections: GameState["selections"]) => {
  let values = {
    [Value.Animalism]: 0,
    [Value.Cuteness]: 0,
    [Value.Dominance]: 0,
    [Value.Eroticism]: 0,
    [Value.Humanity]: 0,
    [Value.Submissiveness]: 0,
  };

  for (let selection of selections) {
    for (let selectionValue of selection.value) {
      values[selectionValue] += 1;
    }
  }

  return values;
};
