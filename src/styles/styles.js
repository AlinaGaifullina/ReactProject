import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskContainerBorder: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#392668',
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskText: {
    color: '#000000',
    fontSize: 22,
    fontFamily: 'Domino Italic',
    flexShrink: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  remove: {
    color: 'red',
    fontSize: 18,
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingVertical: 4,
    width: '100%',
    marginTop: 10
  },
  button: {
    backgroundColor: '#c1a546',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
  },
  buttonNotCompleted: {
    backgroundColor: '#c1a546',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
  },
  buttonCompleted: {
    backgroundColor: '#675e7c',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Domino Regular',
    textAlign: 'center',
    flexShrink: 1,
  },
  titleText: {
    fontFamily: 'Domino Bold',
    fontSize: 40,
    paddingVertical: 24,
    textAlign: 'center',
    flexShrink: 1,
  },
  checkbox: {
    flex: 1,
  },
  completedButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  completedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 28,
    fontFamily: 'Domino Bold',
    marginBottom: 10,
  },
  completedTaskText: {
    fontSize: 20,
    marginVertical: 5,
    fontFamily: 'Domino Italic',
  },
  taskList: {
    marginTop: 16,
    flex: 1
  },
  divider:{
    height: 2,
    backgroundColor: '#55466e',
    marginVertical: 10,
    width: '100%',
  }
});

export default styles;
