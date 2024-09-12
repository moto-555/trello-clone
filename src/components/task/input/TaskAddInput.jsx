import React from 'react';
import {v4 as uuid} from "uuid";

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {

    const handleChange = e =>{
        setInputText(e.target.value);
        
    }

    const handleSubmit = e => {
        const taskId = uuid();
        e.preventDefault();
        if(inputText === ""){
            return;
        }
        setTaskList([
            ...taskList,
            {
                id: `${taskId}`,
                draggableId: `task-${taskId}`,
                text: inputText
            }
        ]);
        setInputText("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add a task' onChange={handleChange} value={inputText} className='taskAddInput' />
            </form>
        </div>
    )
}

export default TaskAddInput
