import { createStore } from "redux"; //an import from the redux library
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
