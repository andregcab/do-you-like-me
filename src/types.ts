import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Answers {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
}

export type AnswerState = Answers | null;

export type SetAnswerType = Dispatch<SetStateAction<Answers | null>>;

export type PropsWithChildren = {
  children: ReactNode;
};
