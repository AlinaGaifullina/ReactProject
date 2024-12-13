import React, {useRef, useState} from 'react';
import {View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';
import { observer } from 'mobx-react-lite';
import styles from '../styles/styles';
import {useRootStore} from '../hooks/useRootState.ts';
import RoundedButton from '../components/RoundedButton';
import TaskItem from '../components/TaskItem';
import {Modalize} from 'react-native-modalize';

export const HomeScreen = observer(() => {
  const [text, setText] = useState('');
  const {todoStore} = useRootStore();
  const modalizeRef = useRef<Modalize>(null);

  const handleAddTodo = () => {
    if (text.trim()) {
      todoStore.addTodo(text);
      setText('');
    }
  };

  const openCompletedTasksModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleText}> ToDo List </Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Добавить новую задачу"
      />
      <RoundedButton title="Добавить" onPress={handleAddTodo} />

      <View style={styles.divider}></View>

      <FlatList style={styles.taskList}
        data={todoStore.taskList}
        renderItem={({item, index}) => (
          <TaskItem
            todo={item}
            onToggle={() => todoStore.toggleTodo(index)}
            onRemove={() => todoStore.removeTodo(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.divider}></View>

      <TouchableOpacity onPress={openCompletedTasksModal} style={styles.button}>
        <Text style={styles.buttonText}>Посмотреть завершенные задачи</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} modalHeight={400}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Завершенные задачи</Text>
          <FlatList
            data={todoStore.taskList.filter(task => task.completed)}
            renderItem={({ item }) => (
              <Text style={styles.completedTaskText}>{item.text}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modalize>
    </View>
  );
});
