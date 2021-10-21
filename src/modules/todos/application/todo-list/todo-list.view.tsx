import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import styles from "./todo-list.module.scss"
import { AddTodoFormContainer } from "@/modules/todos/application/add-todo-form/add-todo-form.container"
import { TodoItemContainer } from "@/modules/todos/application/todo-item/todo-item.container"

interface Props {
	todos: Todo[]
	isErrorToGetTodos: boolean
	setTodos: (todos: Todo[]) => void
}

export const TodoListView = ({ todos, isErrorToGetTodos, setTodos }: Props) => {
	return (
		<>
			<h1 className={styles.title}>Todos</h1>

			<AddTodoFormContainer setTodos={setTodos} />

			{isErrorToGetTodos && (
				<div>An error occurred while retrieving todos</div>
			)}

			<ul className={styles.container}>
				{todos.map((todo: Todo) => (
					<TodoItemContainer
						key={todo.title}
						todo={todo}
						setTodos={setTodos}
					/>
				))}
			</ul>

			<div className={styles.information}>
				Left click to complete todo
				<br />
				Right click to remove todo
			</div>
		</>
	)
}
