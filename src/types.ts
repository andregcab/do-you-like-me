import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Answers {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
  ASK = 'Ask someone if they like you',
  SEE = 'See the questions page',
  WHO = 'Who made this thing anyway?',
  SECRET = 'A secret fourth thing',
}

export type AnswerState = Answers | null;

export type SetAnswerType = Dispatch<SetStateAction<Answers | null>>;

export type PropsWithChildren = {
  children: ReactNode;
};
