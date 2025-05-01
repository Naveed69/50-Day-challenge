export const Card = ({ task, dispatch, ACTION }) => {
  const handleDelete = () => {
    dispatch({ type: ACTION.DELETE_TODO, id: task.id });
  };
  const handleCompleted = () => {
    dispatch({ type: ACTION.COMPLETED, id: task.id });
  };
  return (
    <>
      <span
        style={
          task.completed
            ? {
                color: "rgb(161, 154, 154)",
              }
            : undefined
        }
      >
        {task.task}
      </span>
      <button onClick={handleCompleted}>
        {task.completed ? "mark Not-completed" : "mark as completed"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
