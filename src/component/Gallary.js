//import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, TextInput, View } from "react-native";
import { styles } from "../../styles";
import { useRef, useState } from "react";

export default function Gallary() {
  //Gallary
  const IMAGES = [
    "https://i.pinimg.com/236x/af/9d/f6/af9df6165de3f76bf2c9addd530b3258.jpg",
    "https://i.pinimg.com/236x/79/7c/fb/797cfb76a50627861c6c47cf7a76d60c.jpg",
    "https://i.pinimg.com/236x/a9/40/97/a94097280a31831c7c29c6d05286da24.jpg",
    "https://i.pinimg.com/236x/04/6a/03/046a03a24671cd19db306db42d5e4658.jpg",
    "https://i.pinimg.com/236x/43/d4/0b/43d40b77d852def61357bd718c764a7e.jpg",
  ];

  const [index, setindex] = useState(0);

  const handelNext = () => {
    if (index < IMAGES.length - 1) {
      setindex(index + 1);
    }
    if (index == IMAGES.length) {
      index = 0;
      setindex(index);
    }
    console.log(index);
  };
  const handelPrev = () => {
    if (index > 0) {
      setindex(index - 1);
    }
    if (index < 0) {
      index = IMAGES.length - 1;
      setindex(index);
    }
    console.log(index);
  };
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri: IMAGES[index],
        }}
      />
      <view>
        <Button onPress={handelNext} title="next" color="black" />
        <Button onPress={handelPrev} title="prev" color="black" />
      </view>
    </View>
  );
}
