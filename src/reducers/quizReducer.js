// Quiz Reducer

import {
  FETCH_ALLQUIZ,
  DELETE_QUIZ,
  FETCH_QUIZ,
  UPDATE_QUES,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALLQUIZ:
      return {
        ...state,
        items: action.payload,
      };

    case DELETE_QUIZ:
      return {
        ...state,
        items: state.items.filter((quiz) => quiz.quizId !== action.payload),
      };

    case FETCH_QUIZ:
      return {
        ...state,
        item: action.payload,
      };

    case UPDATE_QUES:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
