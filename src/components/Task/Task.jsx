import "./Task.css";

export default function Task({
  task,
  handleDelete,
  handleCheck,
  handleUncheck,
}) {
  return (
    <div className="task">
      <p className={task.done}>
        {" "}
        Task {task.id}: {task.name}
      </p>
      <button className="default-btn2" onClick={() => handleDelete(task.id)}>
        Delete
      </button>
      <button className="default-btn2" onClick={() => handleCheck(task.id)}>
        Check
      </button>
      <button className="default-btn2" onClick={() => handleUncheck(task.id)}>
        Uncheck
      </button>
    </div>
  );
}
