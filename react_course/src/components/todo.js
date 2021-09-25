function Todo(props) {
  const onDeleteHandler = () => {};
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={onDeleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
