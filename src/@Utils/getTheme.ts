import { useAtom } from 'jotai';
import { themeAtom } from '../Context/ThemeContext';

export const getTheme = () => {
  const [theme] = useAtom(themeAtom);
  return theme;
}
