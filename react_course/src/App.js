import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="react" />
      <Todo title="flutter" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
