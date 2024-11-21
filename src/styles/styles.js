import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cocktailContainer: {
    justifyContent: 'center',
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
  smallTitleText: {
    fontFamily: 'TOYZ',
    fontSize: 24,
    paddingVertical: 24,
    textAlign: 'center',
    flexShrink: 1,
  },
  cocktailCard: {
    backgroundColor: '#e4aa5f',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
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
  buttonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#956622',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'TOYZ',
    textAlign: 'center',
    flexShrink: 1,
  },
  deleteButton: {
    backgroundColor: '#ac4f3c',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'TOYZ',
    textAlign: 'center',
    flexShrink: 1,
  },
});

export default styles;
