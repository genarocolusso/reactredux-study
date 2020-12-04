import { createActions, createReducer } from "reduxsauce";

//cria action types e creators
export const { Types, Creators } = createActions({
  toggleLesson: ["lesson", "module"],
  //TOGGLE MODULE
}); //substitui o const Types e o export creators

console.log(Types, Creators);
// export const Types = {
//   TOGGLE: "modules/TOGGLE",
//   ADD: "modules/ADD",
//   REMOVE: "modules/REMOVE",
// };

// export const Creators = {
//   toggleLesson: (lesson, module) => ({
//     type: Types.TOGGLE, //necessario
//     lesson,
//     module,
//   }),
// };

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

// reducer handlers
export const toggle = (state = INITIAL_STATE, action) => {
  console.log(action)
  return { ...state, activeLesson: action.lesson, activeModule: action.module };
};

export const HANDLERS = {
  [Types.TOGGLE_LESSON]: toggle,
};
// criando reducer
export default createReducer(INITIAL_STATE, { [Types.TOGGLE_LESSON]: toggle });
