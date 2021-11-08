import React, { FC, useState } from 'react';
import './App.css';
import { IEventType, ITask } from "./interfaces";
import TodoTask from './components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    if (task && deadline) {
      const newTask = { taskName: task, deadline: deadline };
      setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  };



  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <input
            type="text"
            placeholder="Task..."
            className={`${!task ? 'red' : ''}`}
            name="task" value={task}
            onChange={(e: IEventType) => setTask(e.target.value)}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            className={`${!deadline ? 'red' : ''}`}
            name="deadline" value={deadline}
            onChange={(e: any) => setDeadline(e.target.value)
            }
          />
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
