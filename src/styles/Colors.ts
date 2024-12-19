import {ColorsKeys, IColorsValues} from '../modules/theme/types/ThemeTypes.ts';

export const Colors: Record<ColorsKeys, IColorsValues> = {
  overlay: {
    light: '#21212114',
    dark: '#FFFFFF14',
    yellow: '#21212114',
    green: '#21212114',
  },
  backgroundPrimary: {
    light: '#F7F7F7',
    dark: '#282235',
    yellow: '#e3d9ac',
    green: '#c0df9f',
  },
  accentDefault: {
    light: '#756995',
    dark: '#55466e',
    yellow: '#ba9a34',
    green: '#58882a',
  },
  textPrimary: {
    light: '#282235',
    dark: '#ae9bd1',
    yellow: '#50401a',
    green: '#263316',
  },
  textSecondary: {
    light: '#dfd2f4',
    dark: '#ae9bd1',
    yellow: '#ecdbb8',
    green: '#cfe3b7',
  },
};
