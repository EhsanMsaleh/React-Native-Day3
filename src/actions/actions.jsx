const baseURL = 'https://jsonplaceholder.typicode.com/comments';
import axios from "axios";

export const  getComments = async ()=>{
    let comments = []
    try {
        const response = await axios.get(baseURL)
        comments = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'COMMENTS_LIST',
        payload:comments 
    }

}

export const getCommentDetails = async (id)=>{
    let comment = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        comment = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'COMMENTS_DETAILS',
        payload:comment 
    }
}

export const clearComments = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}

