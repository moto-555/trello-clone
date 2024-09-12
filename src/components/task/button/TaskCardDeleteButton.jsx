import React from 'react'

const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {
  const TaskCardDeleteButton = (id) => (
    setTaskCardsList(taskCardsList.filter(e => e.id !== id))
    );


  return (
    <div>
      <button className="taskCardDeleteButton" onClick={()=>TaskCardDeleteButton(taskCard.id)} >❌</button>
    </div>
  )
}

export default TaskCardDeleteButton
