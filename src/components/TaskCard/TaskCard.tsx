import { TodoStructure } from "../../types";
import "./TaskCard.css";
interface CardTaskProps {
  toDo: TodoStructure;
}

const TaskCard = ({
  toDo: { id, isDone, name },
}: CardTaskProps): JSX.Element => {
  return (
    <>
      <article className="card-task">
        <div className="card-task__task">
          <span className="">
            {id} {name}
          </span>
          <span>{isDone}✓</span>
        </div>

        <div className="card-task-buttons">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </article>
    </>
  );
};

export default TaskCard;
