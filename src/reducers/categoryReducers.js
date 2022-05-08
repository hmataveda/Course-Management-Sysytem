import {
  GET_CATEGORY,
  DELETE_CATEGORY,
  GET_ERRORS,
  CATEGORY,
  UPDATE_CATEGORY,
  SEARCH_CATEGORY,
  SORT_CATEGORY,
} from '../actions/types';

const initialstate = {
  categories: [],
  category: {},
  categoriescopy: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        categoriescopy: action.payload,
      };

    case DELETE_CATEGORY:
      return {
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SEARCH_CATEGORY: {
      return {
        ...state,

        categories: state.categoriescopy.filter((category) =>
          action.payload !== ' '
            ? category.categoryName
                .toLowerCase()
                .includes(action.payload.toLowerCase())
            : state.categories
        ),
      };
    }

    case SORT_CATEGORY:
      return {
        ...state,
        categories:
          action.payload === 'Ascending'
            ? state.categoriescopy.sort((a, b) => {
                return (
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime()
                );
              })
            : state.categoriescopy.sort((a, b) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              }),
      };
    default:
      return state;
  }
}
