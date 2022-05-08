import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducers from "./categoryReducers";
import courseReducers from "./courseReducers";
import topicReducer from './topicReducer'
import { authentication} from '../_reducers/authentication.reducer'
import { registration} from '../_reducers/registration.reducer'
import { alert} from '../_reducers/alert.reducer'
import { users} from '../_reducers/users.reducer'
import quizReducer from "./quizReducer";

export default combineReducers({
  errors: errorReducer,
  categories: categoryReducers,
  courses: courseReducers,
  topicReducer:topicReducer,
  authentication,
  registration,
  users,
  alert,
  combinedReducerQuiz:quizReducer,

});
