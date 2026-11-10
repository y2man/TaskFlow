
import { useState } from "react";
import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

function TaskCard({ task, onToggle, onDelete, onEdit }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  function handleSave() {
    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) return;

    onEdit(task.id, trimmedTitle);
    setIsEditing(false);
  }

  function handleCancel() {
    setNewTitle(task.title);
    setIsEditing(false);
  }

  return (
    <div className="task-card">
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        ) : (
          <span className={task.completed ? "completed" : ""}>
            {task.title}
          </span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
              className="delete-button"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
