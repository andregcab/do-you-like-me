import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Options {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
  ASK = 'Ask someone if they like you',
  SEE = 'See the options page',
  WHO = 'Who made this thing anyway?',
  SECRET = 'A secret fourth thing',
}

export type OptionState = Options | null;

export type setOptionType = Dispatch<SetStateAction<Options | null>>;

export type PropsWithChildren = {
  children: ReactNode;
};
