import { ChangeEvent, FormEvent, useState } from "react";
import { IFormProps } from "../../utils/interfaces";
import "../styles/form/Form.css";

const Form = ({ addTodo }: IFormProps): JSX.Element => {
	const [textTodo, setTextTodo] = useState<string>("");

	const handleFormSubmit = (e: FormEvent) => {
		addTodo && addTodo(e, textTodo);
		setTextTodo("");
	};

	return (
		<form className="form" onSubmit={handleFormSubmit}>
			<input
				type="text"
				name="task"
				placeholder="Agregar detalles"
				className="form__input"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTextTodo(e.target.value)
				}
				value={textTodo}
				autoFocus
			/>
			<button type="submit" className="form__btn__submit" disabled={!textTodo}>
				Agregar
			</button>
		</form>
	);
};

export default Form;
