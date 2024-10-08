import React from 'react'
import { useState } from 'react';

const TaskCardTitle = () => {
    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("Today");

    const handleClick = () => {
        setIsClick(true);
        console.log(isClick);
    }

    const handleChange = e =>{
        setInputCardTitle(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setIsClick(false);
    }

    const handleBlur = () => {
        setIsClick(false);
    }

    return (
        <div onClick={handleClick} className='taskCardTitleInputArea'>
            {isClick ? <form onSubmit={handleSubmit}><input className='taskCardTitleInput' type="text" onChange={handleChange} onBlur={handleBlur} value={inputCardTitle} autoFocus maxLength={10}/></form>:<h3>{inputCardTitle}</h3>}
        </div>
    )
}

export default TaskCardTitle
