import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
