import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import { observer } from 'mobx-react-lite';
import {useRootStore} from '../hooks/useRootState.ts';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {useStyles} from '../styles/styles.ts';
import {ThemeContext} from '../modules/theme/ThemeProvider.tsx';
import {ThemeTypes} from '../modules/theme/types/ThemeTypes.ts';
import RoundedButton from '../components/RoundedButton.tsx';
import TextCard from '../components/TextCard.tsx';

export const HomeScreen = observer(() => {
  const {homeStore} = useRootStore();
  const {Colors} = useTheme();
  const styles = useStyles(Colors);

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeContext is undefined. Please ensure ThemeProvider is used correctly.');
  }

  const { changeTheme } = themeContext;

  const handleThemeChange = (theme: ThemeTypes) => {
    homeStore.setTheme(theme);
    changeTheme(theme);
  };

  return (
    <View style={styles.content}>
      <TextCard text="Штирлиц долго смотрел в одну точку. Потом в другую. 'Двоеточие' - подумал Штирлиц. " styles={styles}/>
      <TextCard text="Штирлиц залез на телеграфный столб и, чтобы не привлекать внимания прохожих, развернул газету." styles={styles}/>
      <TextCard text="Что-то выдавало в Штирлице советского разведчика. Не то мужественный профиль, не то решительная походка, не то волочащийся за ним парашют." styles={styles}/>
      <RoundedButton title="Светлая тема" onPress={() => handleThemeChange(ThemeTypes.LIGHT)} styles={styles} />
      <RoundedButton title="Темная тема" onPress={() => handleThemeChange(ThemeTypes.DARK)} styles={styles} />
      <RoundedButton title="Желтая тема" onPress={() => handleThemeChange(ThemeTypes.YELLOW)} styles={styles} />
      <RoundedButton title="Зеленая тема" onPress={() => handleThemeChange(ThemeTypes.GREEN)} styles={styles} />
    </View>
  );
});
