import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Questions {
  YES = 'yes',
  NO = 'no',
  MAYBE = 'maybe',
  ASK = 'Ask someone if they like you',
  SEE = 'See the note page',
  WHO = 'Who made this thing anyway?',
  SECRET = 'A secret fourth thing',
}

export type Option = {
  label: Questions;
  action: () => void;
};

export type Options = Array<Option>;

export type OptionState = Option | null;

export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export type SetOption = StateSetter<Option | null>;

export type SetEditing = StateSetter<boolean>;

export type PropsWithChildren = {
  children: ReactNode;
};
