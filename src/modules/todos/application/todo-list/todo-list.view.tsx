import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import { TodoItemView } from "@/modules/todos/application/todo-item/todo-item.view"
import styles from "./todo-list.module.scss"

interface Props {
	todos: Todo[]
	isErrorToGetTodos: boolean
}

export const TodoListView = ({ todos, isErrorToGetTodos }: Props) => {
	return (
		<>
			<h1 className={styles.title}>Todos</h1>

			{isErrorToGetTodos && (
				<div>
					Une erreur est survenue lors de la récupération des tâches à
					effectuer
				</div>
			)}

			<ul className={styles.container}>
				{todos.map((todo: Todo) => (
					<TodoItemView key={todo.id} todo={todo} />
				))}
			</ul>
		</>
	)
}
