import {Box,HStack,Text, VStack} from 'native-base';
import { useContext, useEffect } from 'react';
import { getCommentDetails,clearComments } from '../actions/actions';
import { CommetContext } from '../context/context'
import { styles } from "../../styles";

export default Details = ({route})=>{
    const {state,dispatch} = useContext(CommetContext)
    console.log(state)
    useEffect(()=>{
        const resolveAction = async () => {
            dispatch(await getCommentDetails(route.params.id));
          };
          resolveAction();
        return ()=>{
            dispatch(clearComments())
        }
    },[])
    if(state.details.id)
    return <Box width="100%"  bg="primary.700" p="3" shadow={2} _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white"
      }} >
        <Text  style={styles.details}>name: {state.details.name}</Text> 
        <Text  style={styles.details}>email: {state.details.email }</Text>
        <Text  style={styles.details}>comment: {state.details.body }</Text>
        <Text  style={styles.details}>post id:   {state.details.postId }</Text>
        </Box>
        
        
    return <Box>
    <Box width="100%" alignSelf="center" bg="primary.700" _text={{
    fontSize: "md",
    fontWeight: "medium",
    color: "warmGray.50",
    letterSpacing: "lg"
  }}>
      Loading...
    </Box>
  </Box>
    
    
   
}

