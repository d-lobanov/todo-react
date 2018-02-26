import {combineReducers} from "redux";
import todos from "./todos";
import categories from "./categories";
import modals from "./modals";
import undoable from "redux-undo";

const data = undoable(combineReducers({
  todos,
  categories
}));

const todoApp = combineReducers({
  data,
  modals
});

export default todoApp;
