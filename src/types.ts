import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Answers {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
  ASK = 'Ask someone if they like you',
  SEE = 'See the note page',
  WHO = 'Who made this thing anyway?',
  SECRET = 'A secret fourth thing',
}

export type Option = {
  label: Answers;
  actions: Array<() => void>;
};

export type Options = Array<Option>;

export type AnswerState = Answers | null;

export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export type SetAnswer = StateSetter<Answers | null>;

export type setResponding = StateSetter<boolean>;

export type PropsWithChildren = {
  children: ReactNode;
};

export type AppContextType = {
  responding: boolean;
  setResponding: setResponding;
  selectedAnswer: Answers | null;
  setSelectedAnswer: SetAnswer;
};
