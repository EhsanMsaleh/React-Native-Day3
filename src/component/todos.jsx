import { View, Text, FlatList } from "react-native";
import { styles } from "../../styles";
import Checkbox from 'expo-checkbox';
import { useState} from "react";

export default Todos = ({list}) => {
  const [isChecked, setChecked] = useState(false);
  
const complete = (index)=>{
let copytodolist=[...todos];
copytodolist.splice(index,1);
setTodos(copytodolist)
}
  return (
      <FlatList style={styles.container}
        data={list||[]}
        renderItem={({item:todo}) => (
          <View style={styles.itemContainer}>
            <Text style={{...styles.itemTitle,...(todo.done? styles.itemTitleDone:{} )}}>{todo.title}</Text>
            <Checkbox style={styles.itemCheckBox} 
           value={todo.done}
          
            />
          </View>
        )}
        keyExtractor={(item,index)=>`${index}`}
        ListHeaderComponent={()=><Text style={styles.listHeader}>My Todos</Text>}
        ListFooterComponent={()=><Text style={{...styles.header,fontSize:20}}>End of list</Text>}
      />
    
  );
};

