import {FETCH_TOPIC, FETCH_TOPICS, DELETE_TOPIC, UPDATE_TOPIC, ADD_TOPIC, GET_ERRORS} from './types'
import axios from 'axios'


export const fetchTopics=()=> async (dispatch) =>{
   
    
    const response = await axios.get('http://localhost:3333/topics');
  dispatch({
    type: FETCH_TOPICS,
    payload: response.data,
  });
 
}
export const createTopic = (topic, history) => async (dispatch) => {
    
    let mm={
        id:topic.id,
        course:topic.course,
        topicTitle:topic.topicTitle,
        filename: '/files/'+topic.filename,
        description:topic.description,
        topicDuration:topic.topicDuration,
        date:topic.date
    }
  

    try {
        const response = await axios.post(
          'http://localhost:3333/topics',
          mm
        );
        history.push('/topiclist')
      } catch (error) {
        dispatch({
          type: GET_ERRORS,
          payload: error.response.data,
        });
        history.push('/dashboard');
      }

}
export const fetchTopic=(id)=>async dispatch => {
    const response = await axios.get(`http://localhost:3333/topics/${id}`);
        dispatch({
            type:FETCH_TOPIC,
            payload:response.data
        })
      
}

export const  deleteTopic=(id)=>async (dispatch) => {
        await axios.delete(`http://localhost:3333/topics/${id}`);
        dispatch({
          type: DELETE_TOPIC,
          payload: id,
        });
}

export const updateTopic=(newtopic, history)=>async (dispatch) =>{
         let nn={
            id:newtopic.id,
            course:newtopic.course,
            topicTitle:newtopic.topicTitle,
            filename: '/files/'+newtopic.filename,
            description:newtopic.description,
            topicDuration:newtopic.topicDuration,
            date:newtopic.date
        }
     

        try {
            const response = await axios.put(
              `http://localhost:3333/topics/${newtopic.id}`,
              nn
            );
            dispatch({
              type: UPDATE_TOPIC,
              payload: response.data,
            });
            history.push('/topiclist');
          } catch (error) {
            dispatch({
              type: GET_ERRORS,
              payload: error.response.data,
            });
            history.push("/topiclist")
          }
         
}