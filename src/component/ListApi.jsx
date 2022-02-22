import {
  Box,
  Text,
  Button,
  Input,
  FlatList,
  VStack,
  Heading,
  ArrowForwardIcon
} from "native-base";
import { useContext, useEffect } from "react";
import { CommetContext } from "../context/context";
import { getComments } from "../actions/actions";
import { Comment } from "./comments";
export default HomeL = ({navigation,route}) => {
  const { state, dispatch } = useContext(CommetContext);
  // console.log(state.list);

  useEffect(() => { 
    const resolveAction = async () => {
      dispatch(await getComments());
    };
    resolveAction();
  }, []);
  return (
    <VStack>
      <Heading fontSize="xl" p="4" pb="3">
        Comments
      </Heading>

      <FlatList
        data={state.list}
        renderItem={({ item: comment }) => (
          <Box>
            <Box
              width="100%"
              bg="primary.700"
              p="4"
              shadow={5}
              _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              {comment.id}

              {comment.name}
              <ArrowForwardIcon color="white" onPress={()=>{
                  
                    navigation.navigate({name:'Details',params:{
                        id:comment.id
                    }})
                }}/> 
            </Box>
          </Box>
        )}
        ItemSeparatorComponent={() => <Box style={{ margin: 5 }}></Box>}
      />
    </VStack>
  );
};
