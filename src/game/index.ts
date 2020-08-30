export enum GamePhase {
  Intro,
  BodyType,
  Breed,
  Physiological,
  Mindset,
  Psychological,
  Clothing,
  Training,
  Rules,
  Lifestyle,
  FosterOwner,
  Ending,
}

export enum Value {
  Dominance = "D",
  Submissiveness = "S",
  Cuteness = "C",
  Humanity = "H",
  Eroticism = "E",
  Animalism = "A",
}

export type Card = {
  title: string;
  description: string;
  image: string;
  value: Value[];
};

export const phases = GamePhase.Ending + 1;

export type GamePhaseRouterProps = {
  phase: GamePhase;
  next: () => void;
  reset: () => void;
};
