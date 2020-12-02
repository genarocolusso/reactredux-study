
export function toggleLesson(lesson,module){
  return {
    type: 'TOGGLE_LESSON', //necessario
    lesson,
    module,
    
  }
}