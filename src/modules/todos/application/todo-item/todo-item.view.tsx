import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import styles from "./todo-item.module.scss"

interface Props {
	todo: Todo
}

export const TodoItemView = ({ todo }: Props) => {
	return (
		<li key={todo.id} className={styles.container}>
			{todo.title}
		</li>
	)
}
