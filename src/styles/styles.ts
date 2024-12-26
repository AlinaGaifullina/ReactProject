import {StyleSheet} from 'react-native';
import {IColors} from '../modules/theme/types/ThemeTypes.ts';

export const useStyles = (colors: IColors) =>
  StyleSheet.create({
    content: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.backgroundPrimary,
    },
    buttonContainer: {
      paddingVertical: 4,
      width: '100%',
      marginTop: 10,
    },
    button: {
      backgroundColor: colors.accentDefault,
      borderRadius: 20,
      justifyContent: 'center',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    buttonContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    buttonText: {
      color: colors.textSecondary,
      fontSize: 22,
      textAlign: 'left',
      fontFamily: 'Arturo-LightItalic',
      flexShrink: 1,
    },
    icon: {
      marginLeft: 10,
    },
    textCard: {
      backgroundColor: colors.backgroundPrimary,
      marginVertical: 8,
      borderRadius: 10,
      borderColor: colors.textPrimary,
      borderWidth: 2,
      padding: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
    },
    textCardTitle: {
      fontSize: 20,
      color: colors.textPrimary,
      textAlign: 'center',
      fontFamily: 'Arturo-Regular',
      flexShrink: 1,
    },
    titleText: {
      color: colors.textPrimary,
      fontFamily: 'pershotravneva55-regular',
      fontSize: 40,
      paddingVertical: 24,
      textAlign: 'center',
      flexShrink: 1,
    },
  });

