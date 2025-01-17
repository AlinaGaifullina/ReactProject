import React, {useContext} from 'react';
import {Animated, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../hooks/useRootState.ts';
import {useTheme} from '../modules/theme/hooks/useTheme.ts';
import {useStyles} from '../styles/styles.ts';
import {ThemeContext} from '../modules/theme/ThemeProvider.tsx';
import {ThemeTypes} from '../modules/theme/types/ThemeTypes.ts';
import RoundedButton from '../components/RoundedButton.tsx';
import TextCard from '../components/TextCard.tsx';
import {useTranslation} from 'react-i18next';
import {LangType} from '../modules/lang/LangType.ts';
import LangStore from '../modules/lang/LangStore.ts';
import ScrollView = Animated.ScrollView;
import LangButton from '../components/LangButton.tsx';

export const HomeScreen = observer(() => {
  const {homeStore} = useRootStore();
  const {Colors} = useTheme();
  const styles = useStyles(Colors);
  const langStore = new LangStore();
  const {t} = useTranslation(['home']);

  const handleChangeLang = async (lang: LangType) => {
    console.log(`Changing language from: ${await langStore.getLang()} to: ${lang}`);
    homeStore.setLang(lang);
    await langStore.changeLang(lang);
  };

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      'ThemeContext is undefined. Please ensure ThemeProvider is used correctly.',
    );
  }

  const {changeTheme} = themeContext;

  const handleThemeChange = (theme: ThemeTypes) => {
    homeStore.setTheme(theme);
    changeTheme(theme);
  };

  return (
    <ScrollView style={styles.content}>
      <Text style={styles.titleText}> {t('header')} </Text>
      <LangButton
        title={t('english')}
        onPress={() => handleChangeLang(LangType.EN)}
        styles={styles}
      />
      <LangButton
        title={t('russian')}
        onPress={() => handleChangeLang(LangType.RU)}
        styles={styles}
      />
      <TextCard text={t('anecdote1')} styles={styles} />
      <TextCard text={t('anecdote2')} styles={styles} />
      <TextCard text={t('anecdote3')} styles={styles} />
      <RoundedButton
        title={t('lightTheme')}
        iconName="sun"
        onPress={() => handleThemeChange(ThemeTypes.LIGHT)}
        styles={styles}
      />
      <RoundedButton
        title={t('darkTheme')}
        iconName="moon"
        onPress={() => handleThemeChange(ThemeTypes.DARK)}
        styles={styles}
      />
      <RoundedButton
        title={t('yellowTheme')}
        iconName="star"
        onPress={() => handleThemeChange(ThemeTypes.YELLOW)}
        styles={styles}
      />
      <RoundedButton
        title={t('greenTheme')}
        iconName="bug"
        onPress={() => handleThemeChange(ThemeTypes.GREEN)}
        styles={styles}
      />
    </ScrollView>
  );
});
