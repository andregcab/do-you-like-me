import { createContext, useState } from 'react';
import {
  Options,
  OptionState,
  PropsWithChildren,
  SetEditing,
  SetOption,
} from '@types';

export type AppContextType = {
  editing: boolean;
  setEditing: SetEditing;
  selectedOption: Options | null;
  setSelectedOption: SetOption;
};

export const AppContext = createContext<AppContextType>({
  editing: false,
  setEditing: () => {},
  selectedOption: null,
  setSelectedOption: () => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionState>(null);
  const [editing, setEditing] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        editing,
        setEditing,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
