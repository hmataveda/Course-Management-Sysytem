import {
  CREATE_COURSE,
  GET_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
  DELETE_COURSE,
  BULK_DELETE,
} from "./types";
import { toast } from "react-toastify";

// This action is used to get Course in Course Module
export const getCourse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COURSE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// This action is used to get Courses in Course Module
export const getCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_COURSES,
    });
  } catch (error) {
    console.log(error);
  }
};

// This action is used to update Course in Course Module
export const updateCourse =
  (updatedCourse, id, history) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_COURSE,
        payload: { ...updatedCourse, id },
      });
      toast.success("Courses Updated Successfully..!!");
      history.push("/courses");
    } catch (error) {
      console.log(error);
    }
  };

// This action is used to delete Course in Course Module
export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COURSE,
      payload: id,
    });
    toast.success("Course Deleted Successfully..!!");
  } catch (error) {
    console.log(error);
  }
};

// This action is used to delete All Course in Course Module
export const bulkDelete = (idArray) => async (dispatch) => {
  try {
    dispatch({
      type: BULK_DELETE,
      payload: idArray,
    });
    toast.success("Course Deleted Successfully..!!");
  } catch (error) {
    console.log(error);
  }
};

// This action is used to create Course in Course Module
export const createCourse = (course, history) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_COURSE,
      payload: course,
    });
    toast.success("Course Created Successfully..!!");
    history.push("/courses");
  } catch (error) {
    console.log(error);
  }
};
