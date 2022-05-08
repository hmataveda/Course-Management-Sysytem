import { BULK_DELETE, CREATE_COURSE, DELETE_COURSE, GET_COURSE, GET_COURSES, UPDATE_COURSE } from "../actions/types";


// Initial state of Course Module
const initialState = {
  courses: [
    {
      id: 1,
      courseCreationDate: new Date("2021-09-14"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "React JS",
      selected: false,
    },
    {
      id: 2,
      courseCreationDate: new Date("2021-09-15"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "Angular Js",
      selected: false,
    },
    {
      id: 3,
      courseCreationDate: new Date("2021-09-16"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "Vue JS",
      selected: false,
    },
    {
      id: 3,
      courseCreationDate: new Date("2021-09-16"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "Redux-react",
      selected: false,
    },
    {
      id: 3,
      courseCreationDate: new Date("2021-09-16"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "Javascript",
      selected: false,
    },
    {
      id: 3,
      courseCreationDate: new Date("2021-09-16"),
      courseDescription:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      courseTitle: "Node js",
      selected: false,
    },
  ],
  course: {},
};

// Reducers of Course Module
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES: {
      return {
        ...state,
        courses: [...state.courses],
      };
    }
    case GET_COURSE:
      return {
        ...state,
        course: state.courses.find((ele) => ele.id === Number(action.payload)),
      };
    case CREATE_COURSE:
      return {
        ...state,
        courses: [
          ...state.courses,
          { ...action.payload, id: state.courses.length + 1 },
        ],
      };
    case UPDATE_COURSE: {
      const searchIndex = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      const temp = [...state.courses];
      temp[searchIndex] = action.payload;
      return {
        ...state,
        courses: temp,
      };
    }
    case DELETE_COURSE: {
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    }
    case BULK_DELETE:
      return {
        ...state,
        courses: state.courses.filter(
          (course) => action.payload.indexOf(course.id) < 0
        ),
      };
    default:
      return state;
  }
}
