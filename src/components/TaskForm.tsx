
import { useState, type FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
