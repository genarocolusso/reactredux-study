import { createStore } from "redux";

 import reducers from './ducks';


const store = createStore(reducers);
//cria store

export default store;
