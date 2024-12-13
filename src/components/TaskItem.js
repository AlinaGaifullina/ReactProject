import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/styles';


const TaskItem = ({ todo, onToggle, onRemove }) => {
  const handleRemove = () => {
    Alert.alert(
      "Подтверждение",
      "Точно удалить?",
      [
        {
          text: "Нет",
          onPress: () => console.log("Удаление отменено"),
          style: "cancel"
        },
        { text: "Да", onPress: onRemove }
      ]
    );
  };

  return (
    <View style={styles.taskContainerBorder}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText]}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={handleRemove}>
          <Text style={styles.remove}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={todo.completed ? styles.buttonCompleted : styles.button}
          onPress={onToggle}
        >
          <Text style={styles.buttonText}>{todo.completed ? 'Завершено' : 'Завершить'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

