import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
