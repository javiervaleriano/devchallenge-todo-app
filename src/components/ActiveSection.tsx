import { ISectionProps, ITodoItem } from "../utils/interfaces";
import Form from "./form/Form";
import "./styles/Section.css";
import TodoItem from "./TodoItem";

const ActiveSection = ({
	tasks,
	addTodo,
	toggleStatusTodo,
}: ISectionProps): JSX.Element => {
	return (
		<>
			<Form addTodo={addTodo} />
			<ul className="todo-list">
				{tasks
					.filter(({ completed }: ITodoItem) => !completed)
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

export default ActiveSection;
