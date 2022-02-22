import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  NativeModules,
  Button,
  Keyboard
} from "react-native";
import { styles } from "../../styles";
import { useState,useRef} from "react";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
export default function Addtodo({onTodoAdd}) {
 

  const [focused, setFocused] = useState(false);
  const [todotitle, settodotitle] = useState("");
  const FocusHandler = () => {
    LayoutAnimation.linear();
    setFocused(true);
  };
  const BlurHandler = () => {
    LayoutAnimation.spring();
    setFocused(false);
  };
  const textChangeHandler = (todotitle) => {
    settodotitle(todotitle)
  };
 
  const addtodoHandler = () => {
    Keyboard.dismiss();
    let todo = {
      title:todotitle,
      done:false
  }
    
    if(todotitle!=="")
   {console.log(todo)
      onTodoAdd(todo)}
      else
      {alert("plz make sure to write something")}
    settodotitle("")
    
  };
  

  return (
    <View>
      <Text style={styles.header}>TODO APP </Text>
      <View style={styles.addtodoContaner}>
        
        <TextInput
         
          onFocus={FocusHandler}
          onBlur={BlurHandler}
          onChangeText={textChangeHandler}
          style={{ ...styles.input, ...(focused ? styles.inputFoucsed : {}) }}
          placeholder="enter task title"
          value={todotitle}
         
        ></TextInput>
        <TouchableOpacity
          style={styles.btncontaner}
          onPress={addtodoHandler}
        >
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
