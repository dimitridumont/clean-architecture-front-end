import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import styles from "./todo-item.module.scss"
import { Error } from "@/components/error/error"

interface Props {
	todo: Todo
	completeTodo: () => void
	removeTodo: (event: any) => void
	errorToCompleteTodo: string
	errorToRemoveTodo: string
}

export const TodoItemView = ({
	todo,
	completeTodo,
	removeTodo,
	errorToCompleteTodo,
	errorToRemoveTodo,
}: Props) => {
	return (
		<li
			key={todo.title}
			className={
				styles.container +
				(todo.isCompleted ? " " + styles.isCompleted : "")
			}
			onClick={completeTodo}
			onContextMenu={removeTodo}
		>
			{todo.title}

			<Error error={errorToCompleteTodo} />
			<Error error={errorToRemoveTodo} />
		</li>
	)
}
