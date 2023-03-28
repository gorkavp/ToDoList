import "../App.css";
import { useState, useEffect } from "react";
import Task from "../components/Task/Task";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editId, setEditId] = useState("");

  // useEffect(() => {});

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: inputTask,
        done: "task-undone",
      },
    ]);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchTask === "") {
      setTasks(tasks2);
    } else {
      setTasks2(tasks);
      const newTasks = tasks.filter((task) => task.name === searchTask);
      setTasks(newTasks);
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    tasks.find((task) => task.id == editId).name = editTask;
    setTasks([...tasks]);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    newTasks.forEach((task, index) => (task.id = index + 1));
    setTasks(newTasks);
  };

  const handleUncheck = (id) => {
    tasks.find((task) => task.id === id).done = "task-undone";
    setTasks([...tasks]);
  };

  const handleCheck = (id) => {
    tasks.find((task) => task.id === id).done = "task-done";
    setTasks([...tasks]);
  };

  const onChangeInput = (e) => {
    setInputTask(e.target.value);
  };

  const onChangeSearch = (e) => {
    setSearchTask(e.target.value);
  };

  const onChangeEditTask = (e) => {
    setEditTask(e.target.value);
  };

  const onChangeEditId = (e) => {
    setEditId(e.target.value);
  };

  return (
    <div className="App">
      <section className="App-content">
        <h1>To Do List</h1>

        <form onSubmit={handleSubmitCreate}>
          <Input
            onChange={(e) => onChangeInput(e)}
            value={inputTask}
            type="text"
            placeholder="Type your new task here"
          ></Input>
          <Button type="submit">Create</Button>
        </form>

        <form onSubmit={handleSubmitSearch}>
          <Input
            onChange={(e) => onChangeSearch(e)}
            value={searchTask}
            type="text"
            placeholder="Search your task here"
          ></Input>
          <Button type="submit">Search</Button>
        </form>

        <form onSubmit={handleSubmitEdit}>
          <label htmlFor="tasks"></label>
          <select name="tasks" id="tasks">
            {tasks.map((task) => (
              <option value={task.id} key={task.id}>
                Task {task.id}: {task.name}
              </option>
            ))}
          </select>
          <Input
            onChange={(e) => onChangeEditId(e)}
            value={editId}
            type="text"
            placeholder="Task ID"
          ></Input>
          <Input
            onChange={(e) => onChangeEditTask(e)}
            value={editTask}
            type="text"
            placeholder="Edit your task here"
          ></Input>
          <Button type="submit">Edit</Button>
        </form>

        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleUncheck={handleUncheck}
            handleCheck={handleCheck}
          />
        ))}
      </section>
    </div>
  );
};

export default ToDoList;
