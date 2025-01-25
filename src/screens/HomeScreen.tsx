import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import { observer } from 'mobx-react-lite';
import styles from '../styles/styles';
import {useRootStore} from '../hooks/useRootState.ts';
import RoundedButton from '../components/RoundedButton';
import TaskItem from '../components/TaskItem';


export const HomeScreen = observer(() => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const {todoStore} = useRootStore();

  const handleAddTodo = () => {
    if (text.trim() && title.trim()) {
      todoStore.addTask(title, text);
      setText('');
      setTitle('');
    }
  };

  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleText}> ToDo List </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Заголовок"
      />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Текст"
      />
      <RoundedButton title="Добавить" onPress={handleAddTodo} />

      <View style={styles.divider}></View>

      <FlatList style={styles.taskList}
        data={todoStore.taskList}
        renderItem={({item, index}) => (
          <TaskItem
            todo={item}
            onToggle={() => todoStore.toggleTask(index)}
            onRemove={() => todoStore.removeTask(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.divider}></View>
    </View>
  );
});
