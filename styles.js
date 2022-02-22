import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#FFF",
    paddingHorizontal:20,
   
  },
  title: {
    fontSize: 20,
    color: "red",
    backgroundColor: "black",
    color: "white",

    textAlign: "center",
  },

  img: {
    width: 300,
    height: 300,
  },
  header: {
    backgroundColor: "#FFBED8",
    color: "gray",
    padding: 10,
    textAlign: "center",
    fontSize: 23,
  },
  addtodoContaner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    fontSize: 15,
    borderBottomColor: "gray",
    padding: 0,
    borderBottomWidth: 2,
    margin:5,
    
  },
  inputFoucsed: {
    flexGrow: 1,
    marginRight: 5,
   
  },
  btncontaner: {
    backgroundColor: "#FFBED8",
    borderRadius:20,
    color:"gray",
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    color: "gray",
    textAlign: "center",
    fontSize: 18,
    alignSelf: "center",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:10,
    padding: 5,
    
   
    
  },
  itemTitle: {
    fontSize: 18,
  },
  itemTitleDone: {
    fontSize: 18,
    textDecorationLine:"line-through"
  },
  itemCheckBox: {
    marginRight: 10,
  },
  listHeader: {
    textAlign: "center",
    fontSize: 22, 
    fontWeight:'bold'
  },
  details:{
    fontSize: 15, 
    textAlign:"center",
    color:"white",
    fontWeight:'bold'
  }
});
