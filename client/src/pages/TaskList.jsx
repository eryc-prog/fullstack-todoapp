import { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://fullstack-todoapp-ihut.onrender.com/api/v1/tasks/all"
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Update task
  const handleUpdateTask = async (taskId) => {
    try {
      await axios.patch(
        `https://fullstack-todoapp-ihut.onrender.com/api/v1/tasks/update/${taskId}`,
        {
          task: editValue,
        }
      );
      setEditTaskId(null);
      setEditValue("");
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(
        `https://fullstack-todoapp-ihut.onrender.com/api/v1/tasks/delete/${taskId}`
      );
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task._id} className="border rounded-lg p-4">
            {editTaskId === task._id ? (
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  className="text-sm text-green-600 hover:text-green-900 mr-2"
                  onClick={() => handleUpdateTask(task._id)}
                >
                  Save
                </button>
                <button
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setEditTaskId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <p className="font-semibold text-gray-900">{task.task}</p>
                <div className="space-x-2 mt-2">
                  <button
                    className="text-sm text-indigo-600 hover:text-indigo-900"
                    onClick={() => {
                      setEditTaskId(task._id);
                      setEditValue(task.task);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
