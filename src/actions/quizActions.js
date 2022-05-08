// Quiz Actions

import axios from "axios";
import {
  FETCH_ALLQUIZ,
  DELETE_QUIZ,
  FETCH_QUIZ,
  CREATE_QUIZ,
  UPDATE_QUES,
} from "./types";
import baseUrl from "../quiz-http-common";

export const getAllQuiz = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/quiz`);
  dispatch({
    type: FETCH_ALLQUIZ,
    payload: response.data,
  });
};

export const deleteQuiz = (id) => async (dispatch) => {
  await axios.delete(`${baseUrl}/quiz/${id}`);
  dispatch({
    type: DELETE_QUIZ,
    payload: id,
  });
};

export const createQuiz = (quizData) => async (dispatch) => {
  console.log("action", quizData);

  const response = await axios.post(`${baseUrl}/quiz`, quizData);
  dispatch({
    type: CREATE_QUIZ,
    payload: response.data,
  });
};

export const getQuiz = (id) => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/quiz/${id}`);
  console.log(response);
  dispatch({
    type: FETCH_QUIZ,
    payload: response.data,
  });
};

export const updateQues = (id, updateQuestion, history) => async (dispatch) => {
  const response = await axios.put(`${baseUrl}/quiz/${id}`, updateQuestion);
  console.log(response, "updateaction");
  dispatch({
    type: UPDATE_QUES,
    payload: response.data,
  });
  history.push("/Viewquiz");
};
