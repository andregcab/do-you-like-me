import { createContext, useState } from 'react';
import {
  Answers,
  AnswerState,
  PropsWithChildren,
  SetAnswerType,
} from '@types';

export type AppContextType = {
  answer: Answers | null;
  setAnswer: SetAnswerType;
};

export const AppContext = createContext<AppContextType>({
  answer: null,
  setAnswer: () => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [answer, setAnswer] = useState<AnswerState>(null);

  return (
    <AppContext.Provider value={{ answer, setAnswer }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
