
import { useState, useEffect } from "react";
import type { Task } from "../types/Task";

function useTasks() {
  // Load saved tasks when the application starts
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("taskflow_tasks");

    if (!savedTasks) {
      return [];
    }

    try {
      return JSON.parse(savedTasks) as Task[];
    } catch {
      return [];
    }
  });

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function toggleTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }
  function editTask(id: number, newTitle: string) {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
    )
  );
}

return {
  tasks,
  addTask,
  toggleTask,
  deleteTask,
  editTask,
};
}

export default useTasks;
