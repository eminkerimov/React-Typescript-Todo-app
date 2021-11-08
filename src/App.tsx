import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from "./interfaces";
import TodoTask from './components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number | "">();
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (task && deadline) {
      const newTask = { taskName: task, deadline: deadline };
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline("");
    }
    if (task === "") {
      document.getElementsByName("task")[0].classList.add("red");
      console.log(document.getElementsByName("task")[0]); 
    }
    // if (deadline === "") {
    //   document.getElementsByName("deadline")[0].classList.add("red");
    //   console.log(document.getElementsByName("deadline")[0]); 
    // }

  };

  const completeTask = (taskNameToDelete:string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  };



  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
          <input type="number" placeholder="Deadline (in Days)..." name="deadline" value={deadline} onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
