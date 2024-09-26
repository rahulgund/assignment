import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // take tasks from localStorage or API 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      fetchTasks();
    }
  }, []);

  // Save whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



// Fetch tasks from the given api
const fetchTasks = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
  

      const tasksFromApi = data.todos.map(task => ({
        id: task.id,
        todo: task.todo, 
        completed: task.completed,
      }));
  
      setTasks(tasksFromApi);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  

  // Add a new task
  const addTask = (title) => {
    if (title.trim() === "") return;
    const newTask = {
      id: tasks.length + 1,
      todo: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Shift task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on the filter value
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

        <AddTodo addTask={addTask} />
        <Filter filter={filter} setFilter={setFilter} />
        <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TodoApp;
