import React from 'react'


import { connect} from 'react-redux'

const Video = ({module}) => (
  <div>
  <strong> Módulo {module?.activeModule?.title ?? ""}</strong>
  <span>Aula {module?.activeLesson?.title  ?? ""}</span> 
</div>

)

const mapStateToProps = state => ({ module: state.lesson  })


export default connect( mapStateToProps)(Video)
//pega data do store