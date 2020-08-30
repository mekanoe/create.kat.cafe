import * as React from "react";
import { GamePhaseRouterProps } from "..";
import { CommonScreen } from "./Common";

export const EndingScreen = (props: GamePhaseRouterProps) => (
  <CommonScreen allowBack allowNext {...props} next={props.reset}>
    end
  </CommonScreen>
);
