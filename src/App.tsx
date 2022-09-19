import { FormEvent, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "./App.css";
import ActiveSection from "./components/ActiveSection";
import AllSection from "./components/AllSection";
import CompletedSection from "./components/CompletedSection";
import HeaderTab from "./components/HeaderTab";
import { ITodoItem } from "./utils/interfaces";

// Auxiliary variable to avoid conflicts with data retrieval from localStorage
let firstRender: boolean = true;

function App(): JSX.Element {
	// STATES
	const [indexTab, setIndexTab] = useState<number>(0),
		[todoItems, setTodoItems] = useState<ITodoItem[]>([]);
	const [completedTodos, setCompletedTodos] = useState<ITodoItem[]>([]);

	// EFFECTS
	useEffect(() => {
		if (!todoItems.length)
			setTodoItems(JSON.parse(localStorage.getItem("todos") || "[]"));

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		let completedItems: ITodoItem[] = todoItems.filter(
			(todo: ITodoItem) => todo.completed
		);

		setCompletedTodos(completedItems);

		if (todoItems.length || (!todoItems.length && !firstRender)) {
			firstRender = false;
			localStorage.setItem("todos", JSON.stringify(todoItems));
		}
	}, [todoItems]);

	// HANDLERS
	const handleChangeIndexTab = (index: number): void => setIndexTab(index);

	const handleAddTodo = (e: FormEvent, txt: string): void => {
		e.preventDefault();

		const formattedTxt: string = txt.trim();

		formattedTxt &&
			setTodoItems([
				...todoItems,
				{ id: Date.now(), text: formattedTxt, completed: false },
			]);
	};

	const handleToggleComplete = (id: number): void => {
		let copyToggleComplete: ITodoItem[] = todoItems.map((todo: ITodoItem) => {
			if (todo.id === id) todo.completed = !todo.completed;

			return todo;
		});

		setTodoItems(copyToggleComplete);
	};

	const handleDeleteTodo = (id: number): void => {
		let copyDeleteTodo: ITodoItem[] = todoItems.filter(
			(todo: ITodoItem) => todo.id !== id
		);

		setTodoItems(copyDeleteTodo);
	};

	const handleClearTodos = (): void => {
		let copyClearTodos: ITodoItem[] = todoItems.filter(
			(todo: ITodoItem) => !todo.completed
		);

		setTodoItems(copyClearTodos);
	};

	return (
		<main>
			<header>
				<h1>#todo</h1>
				<nav className="nav-tabs">
					<ul className="tabs">
						<HeaderTab
							currIndex={indexTab}
							assignedIndex={0}
							text="Todas"
							className="task-all"
							setIndexTab={setIndexTab}
						/>
						<HeaderTab
							currIndex={indexTab}
							assignedIndex={1}
							text="Activas"
							className="task-active"
							setIndexTab={setIndexTab}
						/>
						<HeaderTab
							currIndex={indexTab}
							assignedIndex={2}
							text="Completadas"
							className="task-complete"
							setIndexTab={setIndexTab}
						/>
					</ul>
				</nav>
			</header>
			<SwipeableViews index={indexTab} onChangeIndex={handleChangeIndexTab}>
				<AllSection
					tasks={todoItems}
					addTodo={handleAddTodo}
					toggleStatusTodo={handleToggleComplete}
				/>
				<ActiveSection
					tasks={todoItems}
					addTodo={handleAddTodo}
					toggleStatusTodo={handleToggleComplete}
				/>
				<CompletedSection
					tasks={completedTodos}
					toggleStatusTodo={handleToggleComplete}
					deleteTask={handleDeleteTodo}
					clearTasks={handleClearTodos}
				/>
			</SwipeableViews>
		</main>
	);
}

export default App;
