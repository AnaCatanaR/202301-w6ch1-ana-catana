import TaskCard from "../TaskCard/TaskCard";
import toDos from "../../data/toDos";

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
