import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/tasks';

export default function App() {
const [task, setTask] = useState();
const [taskitems, setTaskItens] = useState([]);
const handleAddTask = () => {
  Keyboard.dismiss()
  setTaskItens([...taskitems, task])
  setTask(null);
}
const completetask = (index) => {
  let itemsCopy = [...taskitems];
  itemsCopy.splice(index, 1);
  setTaskItens(itemsCopy);
}
  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.sectiontitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskitems.map((items, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completetask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : 'height'}
        style={styles.writetaskwrapper}>
          <TextInput style={styles.input} placeholder={'New Task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addwrapper}>
              <Text style={styles.addtext}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskswrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  }, 
  sectiontitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writetaskwrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {
    
  },
});
