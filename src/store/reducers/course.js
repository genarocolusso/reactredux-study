import { createStore } from "redux";

const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: "iniciando com react",
      lessons: [
        { id: 1, title: "primeira aula" },
        { id: 2, title: "segunda aula" },
      ],
    },
    {
      id: 2,
      title: "aprendendo Redux",
      lessons: [
        { id: 1, title: "primeira aula" },
        { id: 2, title: "segunda aula" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  console.log(action);
 if(action.type === 'TOGGLE_LESSON'){
  return { ...state,activeLesson: action.lesson, activeModule: action.module}
  // se foi um toggle, mudar o activeLesson e module para o da action referente
 }

  return state;
}

 