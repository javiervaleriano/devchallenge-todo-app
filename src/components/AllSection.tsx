import { ISectionProps, ITodoItem } from "../utils/interfaces";
import Form from "./form/Form";
import TodoItem from "./TodoItem";

const AllSection = ({
	tasks,
	addTodo,
	toggleStatusTodo,
}: ISectionProps): JSX.Element => {
	return (
		<>
			<Form addTodo={addTodo} />
			<ul className="todo-list">
				{tasks
					.sort((first: ITodoItem, _: ITodoItem) => (first.completed ? 1 : -1))
					.map(({ id, text, completed }: ITodoItem) => (
						<TodoItem
							key={id}
							id={id}
							text={text}
							completed={completed}
							toggleStatus={toggleStatusTodo}
						/>
					))}
			</ul>
		</>
	);
};

export default AllSection;
