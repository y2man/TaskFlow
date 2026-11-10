
import type { TaskFilter } from "../types/Task";

interface TaskFiltersProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function TaskFilters({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
}: TaskFiltersProps) {
  const filters: TaskFilter[] = ["all", "pending", "completed"];

  return (
    <section className="task-filters">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => onFilterChange(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TaskFilters;
