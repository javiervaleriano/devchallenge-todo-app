import { ISectionCompleteProps, ITodoItem } from "../utils/interfaces";
import "./styles/Section.css";
import TodoItem from "./TodoItem";

const CompletedSection = ({
	tasks,
	deleteTask,
	clearTasks,
	toggleStatusTodo,
}: ISectionCompleteProps): JSX.Element => {
	return (
		<>
			<ul className="todo-list">
				{tasks
					.sort((first: ITodoItem, _: ITodoItem) => (first.completed ? 1 : -1))
					.map(({ id, text, completed }: ITodoItem) => (
						<TodoItem
							key={id}
							id={id}
							text={text}
							completed={completed}
							deleteTask={deleteTask}
							toggleStatus={toggleStatusTodo}
						/>
					))}
			</ul>
			{tasks?.length > 1 ? (
				<div className="wrapper-clear-tasks-btn">
					<button
						type="button"
						className="clear-tasks-btn"
						onClick={clearTasks}
					>
						<i className="fa-regular fa-trash-can"></i> Eliminar todas
					</button>
				</div>
			) : undefined}
		</>
	);
};

export default CompletedSection;
