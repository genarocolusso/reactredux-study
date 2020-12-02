import { createStore } from "redux";

 import rootReducer from './reducers';


const store = createStore(rootReducer);
//cria store

export default store;
