import TaskCard from "../TaskCard/TaskCard";
import toDos from "../../data/toDos";
import "./TaskList.css";

const TaskList = (): JSX.Element => {
  return (
    <>
      <main>
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo.id}>
              <TaskCard toDo={toDo} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default TaskList;
