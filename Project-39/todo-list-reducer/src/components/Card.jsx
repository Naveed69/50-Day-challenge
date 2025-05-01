export const Card = ({ task, dispatch, ACTIONS }) => {
  //handle-complete
  const handleComplete = () => {
    dispatch({ type: ACTIONS.COMPLETED, id: task.id });
  };

  //handle-Delete
  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETETODO, id: task.id });
  };
  return (
    <>
      <p style={task.completed ? { color: "rgb(190, 186, 186)" } : undefined}>
        {task.task}
      </p>
      <button onClick={handleComplete}>
        {task.completed ? "mark as not completed " : "mark as Complete"}
      </button>
      <button type="button" onClick={handleDelete}>
        DELETE
      </button>
    </>
  );
};
