import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  const [modalisOpen, setModalisOpen] = useState(false);
  const onDeleteHandler = () => {
    setModalisOpen(true);
  };
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={onDeleteHandler}>
          Delete
        </button>
        {modalisOpen && <Modal />}
        {modalisOpen && <Backdrop />}
      </div>
    </div>
  );
}

export default Todo;
