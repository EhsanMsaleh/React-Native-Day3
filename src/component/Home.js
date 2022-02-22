import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from '../../styles';
import { useRef, useState } from "react";
export default function Home() {
  const inputRef = useRef();
  const clear = () => {
    // Clears the text
    let todo = {
      title:text,
      done:false
  }
    console.log(todo)
    inputRef.current.setNativeProps({ text: "" });
  };
  const [text, onChangeText] = useState("");
  const handleTextChange = (text) => {
    onChangeText(text);
  };

  return (
    <View>
      <Text style={styles.header}>Hello {text}!</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="enter your name"
      ></TextInput>
      <Button onPress={clear} title="Clear" color="gray" />
    </View>
  );
}
