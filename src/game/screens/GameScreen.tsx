import * as React from "react";
import { GamePhaseRouterProps } from "..";
import { CommonScreen } from "./Common";

export const GameScreen = (props: GamePhaseRouterProps) => (
  <CommonScreen {...props} allowBack allowNext>
    nya phase: {props.phase}
  </CommonScreen>
);
