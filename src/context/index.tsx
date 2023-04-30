import { createContext, useState } from 'react';
import {
  Options,
  OptionState,
  PropsWithChildren,
  setOptionType,
} from '@types';

export type AppContextType = {
  selectedOption: Options | null;
  setSelectedOption: setOptionType;
};

export const AppContext = createContext<AppContextType>({
  selectedOption: null,
  setSelectedOption: () => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionState>(null);

  return (
    <AppContext.Provider
      value={{ selectedOption, setSelectedOption }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
