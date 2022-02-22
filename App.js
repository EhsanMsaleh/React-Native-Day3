import { StatusBar, Button, Image, Text, TextInput, View, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useRef, useState } from "react";
import Gallary from './src/component/Gallary';
import Home from "./src/component/Home";
import Addtodo from './src/component/add-todo';
import Todos from './src/component/todos';
import Test from './src/component/Day3_test';
import { Divider } from 'antd';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
//   const [todos,setTodos] = useState([
//     {
//       title: "task 1",
//       done: false,
//     },
//     {
//       title: "task 2",
//       done: true,
//     }
//   ])
// const countDone = ()=>{
//   return todos.filter(w => w.done === true).length;
// }

// const todoAddHandler = (todo)=>{
//   setTodos([...todos,todo]);
  
// }
  return (
    <NativeBaseProvider>
     <Test/>
    </NativeBaseProvider>
    // <View >
      
    //   {/* <Home />
    //   <br></br>

    //   <Gallary /> */}
    //   <View >
    //   <Addtodo onTodoAdd={todoAddHandler}/>
    //   <Text style={styles.listHeader}>{countDone()} Done of {todos.length}</Text>
    //   <Todos list={todos}/>
    //   {/* <Test/> */}
     
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
  );
}
