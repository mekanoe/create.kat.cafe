import * as React from "react";
import { GamePhase, GamePhaseRouterProps } from "./game";
import { IntroScreen, EndingScreen, GameScreen } from "./game/screens";

const GamePhaseRouter = (props: GamePhaseRouterProps) => {
  if (props.phase === GamePhase.Intro) {
    return <IntroScreen {...props} />;
  }

  if (props.phase === GamePhase.Ending) {
    return <EndingScreen {...props} />;
  }

  return <GameScreen {...props} />;
};

export const App = () => {
  const [gamePhase, setGamePhase] = React.useState<GamePhase>(0);
  const next = () => setGamePhase(gamePhase + 1);
  const reset = () => setGamePhase(GamePhase.Intro);

  return <GamePhaseRouter phase={gamePhase} next={next} reset={reset} />;
};
