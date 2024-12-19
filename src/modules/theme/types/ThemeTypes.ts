export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  YELLOW = 'yellow',
  GREEN = 'green',
}
export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK | ThemeTypes.YELLOW | ThemeTypes.GREEN;
export interface IColorsValues {
  light: string;
  dark: string;
  yellow: string;
  green: string;
}
export interface IColors {
  overlay: string;
  backgroundPrimary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
}
export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  accentDefault = 'accentDefault',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
}
export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}
