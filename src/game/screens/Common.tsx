import * as React from "react";
import { GamePhaseRouterProps, phases } from "..";
import styled from "styled-components";

export type CommonScreenProps = GamePhaseRouterProps & {
  pageTitle?: React.ReactNode;
  pageDescription?: React.ReactNode;
  children: React.ReactNode;
  allowNext: boolean;
  allowBack: boolean;
};

export const CommonScreen = (props: CommonScreenProps) => (
  <div>
    {props.pageTitle && <h1>{props.pageTitle}</h1>}
    {props.pageDescription && <p>{props.pageDescription}</p>}
    <div>{props.children}</div>
    <div>
      {props.allowBack && <button>⬅</button>}
      <ProgressDots maxPhases={phases} currentPhase={props.phase} />
      {props.allowNext && <button onClick={props.next}>➡</button>}
    </div>
  </div>
);

enum CircleState {
  Past = -1,
  Current = 0,
  Future = 1,
}

const Circle = styled.div<{ state: CircleState }>`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.state === -1 ? `#aaaaaa` : props.state === 0 ? "#aaffaa" : "#888888"};
`;

const CircleContainer = styled.div`
  display: flex;
`;

const ProgressDots = (props: { maxPhases: number; currentPhase: number }) => (
  <CircleContainer>
    {"a"
      .repeat(props.maxPhases)
      .split("")
      .map((_, i) => {
        let state: CircleState = CircleState.Past;

        if (i === props.currentPhase) {
          state = CircleState.Current;
        } else if (i < props.currentPhase) {
          state = CircleState.Past;
        } else if (i > props.currentPhase) {
          state = CircleState.Future;
        }

        return <Circle key={`pr` + i} state={state} />;
      })}
  </CircleContainer>
);
