import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ver depois mas só funciona com o mesmo name das functions e actions

 import * as CourseActions from '../../store/actions/course'
 //dispatch dispara actions pro redux
const Sidebar = ({modules, toggleLesson}) => (

  <aside>
  {modules.map(module=>(
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

const mapStateToProps = state => ({
  modules: state.course.modules
})

const mapDispatchToProps =  dispatch => ({
  toggleLesson: (lesson, module) => dispatch(CourseActions.toggleLesson(lesson, module))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
//connect recebe stado e retorna oq eu quero