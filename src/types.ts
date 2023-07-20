import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Answers {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
  ASK = 'Ask someone if they like you',
  SEE = 'Preview the note page',
  WHO = 'Who made this thing anyway?',
  SECRET = 'A secret fourth thing',
}

export type AnswerState = Answers | null;

export type AppContextType = {
  responding: boolean;
  setResponding: SetResponding;
  selectedAnswer: Answers | null;
  setSelectedAnswer: SetAnswer;
};

export type Option = {
  label: Answers;
  actions: Array<() => void>;
};

export type Options = Array<Option>;

export type PropsWithChildren = {
  children: ReactNode;
};

export type SetAnswer = StateSetter<Answers | null>;

export type SetResponding = StateSetter<boolean>;

export type StateSetter<T> = Dispatch<SetStateAction<T>>;
