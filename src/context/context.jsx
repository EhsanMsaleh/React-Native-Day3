import { createContext, useReducer, useState } from "react";
import {reducer} from '../reducers/reducers';
export const CommetContext = createContext();
export default CommetProvider = ({ children }) => {
 

  const [ state, dispatch ] = useReducer(reducer, {
     list:[],
     details:{}
  });

  return (
    <CommetContext.Provider value={{state,dispatch}}>{children}</CommetContext.Provider>
  );
};

