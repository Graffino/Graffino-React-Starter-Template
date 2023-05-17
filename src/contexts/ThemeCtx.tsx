import { createContext, useCallback, useMemo, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContext {
  mode: ThemeMode;
  changeMode: (newMode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

interface Props {
  children: JSX.Element | JSX.Element;
}

function ThemeCtxProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeMode>('light');

  const changeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const value = useMemo(() => ({ mode, changeMode }), [mode, changeMode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeCtxProvider;
