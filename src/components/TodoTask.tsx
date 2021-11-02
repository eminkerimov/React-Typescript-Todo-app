import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task,completeTask}:Props) => {
    return (
    <div className="task">
        <div className="content">
            <div className="content_item"><span>{task.taskName}</span></div>
            <div className="content_item"><span>{task.deadline}</span></div>
        </div>
        <button onClick={()=>{
            completeTask(task.taskName);
        }}>X</button>
    </div>
    );
};

export default TodoTask;