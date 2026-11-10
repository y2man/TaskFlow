import { useState } from "react";
import "./App.css"
import TaskFilters from "./components/TaskFilters";
import type { TaskFilter } from "./types/Task";
import useTasks from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";


function App() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesFilter =
    filter === "all" ||
    (filter === "completed" && task.completed) ||
    (filter === "pending" && !task.completed);

  return matchesSearch && matchesFilter;
});

  return (
    <div className="app">
      <header>
        <h1>TaskFlow</h1>
        <p>Organize your work. Get things done.</p>
      </header>

      <main>
        <TaskForm onAddTask={addTask} />
        <TaskFilters
        filter={filter}
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

        <section className="task-list">
          <h2>My Tasks ({tasks.length})</h2>

          {filteredTasks.length === 0 ? (
              <p>
                {tasks.length === 0
                  ? "No tasks yet. Add your first task!"
                  : "No matching tasks found."}
              </p>
            ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
