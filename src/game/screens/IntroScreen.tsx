import * as React from "react";
import { GamePhaseRouterProps } from "..";
import { CommonScreen } from "./Common";

export const IntroScreen = (props: GamePhaseRouterProps) => (
  <CommonScreen
    {...props}
    allowBack={false}
    allowNext={true}
    pageTitle={<>🎨 Create your own Catgirl 🐈🌈</>}
  >
    nya
  </CommonScreen>
);
