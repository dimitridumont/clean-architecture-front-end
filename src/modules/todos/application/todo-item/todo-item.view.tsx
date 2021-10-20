import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import styles from "./todo-item.module.scss"

interface Props {
	todo: Todo
	completeTodo: () => void
}

export const TodoItemView = ({ todo, completeTodo }: Props) => {
	return (
		<li
			key={todo.title}
			className={
				styles.container +
				(todo.isCompleted ? " " + styles.isCompleted : "")
			}
			onClick={completeTodo}
		>
			{todo.title}
		</li>
	)
}
