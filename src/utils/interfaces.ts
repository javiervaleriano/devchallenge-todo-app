import { FormEvent } from "react";

// ELEMENTS
export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

// COMPONENTS PROPS
export interface IHeaderTabProps {
  currIndex: number;
  assignedIndex: number;
  text: string;
  className: string;
  setIndexTab(i: number): void;
}

export interface IFormProps {
  addTodo?(event: FormEvent, txt: string): void;
}

export interface ISectionProps extends IFormProps {
  tasks: ITodoItem[];
  toggleStatusTodo(id: number): void;
}

export interface ISectionCompleteProps extends ISectionProps {
  clearTasks(): void;
  deleteTask(id: number): void;
}

export interface ITodoItemProps extends ITodoItem {
  toggleStatus(id: number): void;
  deleteTask?(id: number): void;
}