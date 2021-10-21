import React from "react"
import styles from "./add-todo-form.module.scss"
import { Error } from "@/components/error/error"

interface Props {
	onSubmit: (event: any) => void
	todoTitle: string
	onChangeTodoTitle: (event: any) => void
	errorToAddTodo: string
}

export const AddTodoFormView = ({
	onSubmit,
	todoTitle,
	onChangeTodoTitle,
	errorToAddTodo,
}: Props) => {
	return (
		<form className={styles.container} onSubmit={onSubmit}>
			<input
				name={"title"}
				placeholder={"Add todo"}
				value={todoTitle}
				onChange={onChangeTodoTitle}
				required={true}
			/>

			<Error error={errorToAddTodo} />
		</form>
	)
}
