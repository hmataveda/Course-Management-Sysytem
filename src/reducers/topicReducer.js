import { FETCH_TOPICS, FETCH_TOPIC, DELETE_TOPIC, UPDATE_TOPIC, ADD_TOPIC } from '../actions/types'
import { topiclistdata } from '../Data/topiclist'

const initialState = {
    topics: [],
    topic: {}
}
export default function topicReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOPICS: {
            return {
                ...state,
                topics: action.payload
            }
        }
        case FETCH_TOPIC: {
            return {
                ...state,
                topic: action.payload
            }
        }
        case ADD_TOPIC: {
            return {
                ...state,
                topic: action.payload
            }
        }
        case DELETE_TOPIC: {
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id != action.payload)
            }
        }
        case UPDATE_TOPIC: {

            state.topics = state.topics.filter(topic => topic.id != action.payload.id)

            return {
                ...state,

                topics: [action.payload, ...state.topics]
            }
        }
        default: {
            return state;
        }
    }
}