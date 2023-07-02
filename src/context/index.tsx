import { createContext, useState } from 'react';
import {
  AnswerState,
  AppContextType,
  PropsWithChildren,
} from '@types';

export const AppContext = createContext<AppContextType>({
  responding: false,
  setResponding: () => {},
  selectedAnswer: null,
  setSelectedAnswer: () => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [responding, setResponding] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] =
    useState<AnswerState>(null);

  return (
    <AppContext.Provider
      value={{
        responding,
        setResponding,
        selectedAnswer,
        setSelectedAnswer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
