import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cocktailContainer: {
        justifyContent: 'center',
        //alignItems: 'center',
        direction: 'column',
        backgroundColor: '#FFFFFF',
    },
    titleText: {
        fontFamily: 'TOYZ',
        fontSize: 40,
        paddingVertical: 24,
        textAlign: 'center',
        flexShrink: 1,
    },
    cocktailCard: {
        backgroundColor: '#e4aa5f', // Цвет фона карточки
        borderRadius: 10, // Закругленные углы
        padding: 15, // Отступы внутри карточки
        shadowColor: '#000', // Цвет тени
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1, // Прозрачность тени
        shadowRadius: 2, // Радиус размытия тени
        elevation: 3, // Для Android
        margin: 10,
        flex: 1,
        alignItems: 'stretch'
    },
    cocktailCardTitle: {
        fontFamily: 'Flame-Bold',
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        flexShrink: 1,
    },
    cocktailCardTextReg: {
        fontFamily: 'Flame-Regular',
        fontSize: 15,
        color: '#333',
        textAlign: 'start',
        flexShrink: 1,
    },
    cocktailCardTextBold: {
        fontFamily: 'Flame-Bold',
        fontSize: 15,
        color: '#333',
        textAlign: 'start',
        flexShrink: 1,
    },
    cocktailCardImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10
    },
    rootView: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default styles;
