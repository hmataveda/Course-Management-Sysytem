import axios from "axios";

import {
  GET_ERRORS,
  GET_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY,
  UPDATE_CATEGORY,
  SEARCH_CATEGORY,
  SORT_CATEGORY,
} from "./types";

import { toast } from "react-toastify";

export const createCategory = (category, history) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3333/category",
      category
    );
    toast.success("Category Created Successfully..!!");
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getCategories = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3333/category");
  dispatch({
    type: GET_CATEGORY,
    payload: response.data,
  });
};

export const deleteCategory = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3333/category/${id}`);
  dispatch({
    type: DELETE_CATEGORY,
    payload: id,
  });
  toast.success("Category  Deleted Successfully..!!");
};

export const getCategory = (id, history) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3333/category/${id}`);
  dispatch({
    type: CATEGORY,
    payload: response.data,
  });
};

export const searchCategory = (category) => {
  return {
    type: SEARCH_CATEGORY,
    payload: category,
  };
};

export const updateCategory = (id, category, history) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3333/category/${id}`,
      category
    );
    dispatch({
      type: UPDATE_CATEGORY,
      payload: response.data,
    });
    toast.success("Category  Updated Successfully..!!");
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const sortCategory = (text) => {
  return {
    type: SORT_CATEGORY,
    payload: text,
  };
};
