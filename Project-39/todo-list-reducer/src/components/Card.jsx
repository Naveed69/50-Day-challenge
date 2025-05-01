export const Card = ({ task, dispatch,ACTION }) => {
  const handleDelete = () => {
    dispatch({type:ACTION.DELETE_TODO,id:task.id})
  };
  return (
    <>
      <span>{task.task}</span>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
