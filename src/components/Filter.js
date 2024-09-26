import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-around mt-4">
      <button
        onClick={() => setFilter("all")}
        className={`p-2 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`p-2 rounded ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`p-2 rounded ${
          filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
