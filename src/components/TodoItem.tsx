import { ITodoItemProps } from "../utils/interfaces";
import "./styles/TodoItem.css";

const TodoItem = ({
	id,
	text,
	completed,
	toggleStatus,
	deleteTask,
}: ITodoItemProps): JSX.Element => {
	return (
		<li className={`todo-item ${completed ? "todo-completed" : undefined}`}>
			<span>
				<input
					type="checkbox"
					className="todo-checkbox"
					checked={completed}
					onChange={() => toggleStatus && toggleStatus(id)}
				/>{" "}
				{text}
			</span>
			{deleteTask && (
				<button
					type="button"
					className="todo-delete-btn"
					onClick={() => deleteTask && deleteTask(id)}
				>
					<i className="fa-regular fa-trash-can"></i>
				</button>
			)}
		</li>
	);
};

export default TodoItem;
