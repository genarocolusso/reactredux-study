import React from "react";

import { connect } from 'react-redux'; 
// ver depois mas só funciona com o mesmo name das functions e actions

 import { Creators as LessonActions } from '../../store/ducks/lesson'
 //dispatch dispara actions pro redux
const Sidebar = ({modules, toggleLesson}) => (

  <aside>
   
  {modules?.map(module=>(
    <div key={module.id}>
      <strong> {module.title}</strong>
      <ul>
        {module.lessons.map(lesson  => (
          <li key={lesson.id}>{lesson.title}
          <button onClick={() =>  toggleLesson(lesson,module)}  >Selecionar</button>

          </li>
        ))}
      </ul>
    </div>
  ))}
</aside>

)

const mapStateToProps = state => {
  console.log(state)

  return  {
    modules: state.lesson.modules
  } 
}

const mapDispatchToProps =  dispatch => ({
  toggleLesson: (lesson, module) => dispatch(LessonActions.toggleLesson(lesson, module))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
//connect recebe stado e retorna oq eu quero