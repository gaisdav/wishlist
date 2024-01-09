import { useColorScheme } from '@mui/joy';

export const useThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  const handleSwitchTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return { changeTheme: handleSwitchTheme };
};
