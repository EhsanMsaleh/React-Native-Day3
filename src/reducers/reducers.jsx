export const reducer = (state=[],action)=>{
     console.log(action.type)
    switch(action.type){
        case 'COMMENTS_LIST':{
            return {...state,list:action.payload}
        }
        case 'COMMENTS_DETAILS':{
            return {...state,details:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return {...state,details:{}}
        }
        
        default :{
            return state;
        }
    }
}
