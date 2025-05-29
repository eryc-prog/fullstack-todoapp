import express from "express";
import {
  getAllTasks, // get all tasks
  createTask, // create a task
  getTask, // get a task by id
  updateTask, // update a task by id
  deleteTask, // delete a task by id
} from "../controllers/taskController.js";

const router = express.Router();

/**
 * Express router for task-related routes.
 *
 * Routes:
 * - GET /all: Retrieves all tasks.
 * - POST /create: Creates a new task.
 *
 * Note: Additional routes for getting, updating, and deleting tasks by ID
 * are commented out and not currently in use.
 *
 * @module routes/taskRouter
 */

// Public and Protected Routes
// Public routes are accessible to all users, while protected routes require authentication.

// Protected Routes
router.get("/all", getAllTasks);
router.post("/create", createTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.get("/:id", getTask);

export default router;
