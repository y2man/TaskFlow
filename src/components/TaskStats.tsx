
interface TaskStatsProps {
  total: number;
  completed: number;
  pending: number;
}

function TaskStats({ total, completed, pending }: TaskStatsProps) {
  return (
    <section className="task-stats">
      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
    </section>
  );
}

export default TaskStats;
