import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import TaskList from "/src/pages/TaskList.jsx";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Pending");

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/tasks/create", {
        title,
        task,
        priority: priority.toLowerCase(),
        status: status.toLowerCase(),
      });
      // Optionally, refresh the task list or clear the form
      setTitle("");
      setTask("");
      setPriority("Low");
      setStatus("Pending");
      // You may want to trigger a refresh in TaskList here
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* <h1 className="text-2xl font-bold text-gray-900">Welcome</h1> */}
          <NavLink to={"/"}>
            <span className="text-2xl font-bold text-gray-900">Welcome</span>
          </NavLink>
          <p className="text-gray-600">Here's an overview of your tasks</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Tasks</h3>
            <p className="text-3xl font-bold text-indigo-600">
              Data is not Available
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-600">Completed</h3>
            <p className="text-3xl font-bold text-green-600">
              Data is not Available
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-600">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">
              Data is not Available
            </p>
          </div>
        </div>

        {/* Task Management Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Task Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Create New Task
            </h2>
            <form className="space-y-4" onSubmit={handleCreateTask}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter task description"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create Task
              </button>
            </form>
          </div>

          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
