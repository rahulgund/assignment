import React from "react";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 mb-2 ${
        task.completed ? "bg-gray-200" : "bg-white"
      } rounded shadow-md`}
    >
      <div>
        <input
          type="checkbox"
          className="mr-2"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        {/* Use task.todo */}
        <span className={task.completed ? "line-through" : ""}>{task.todo}</span>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
