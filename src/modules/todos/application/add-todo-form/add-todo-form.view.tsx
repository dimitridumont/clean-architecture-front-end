import React from "react"
import styles from "./add-todo-form.module.scss"

interface Props {
	onSubmit: (event: any) => void
	todoTitle: string
	onChangeTodoTitle: (event: any) => void
	isErrorToAddTodo: boolean
}

export const AddTodoFormView = ({
	onSubmit,
	todoTitle,
	onChangeTodoTitle,
	isErrorToAddTodo,
}: Props) => {
	return (
		<form className={styles.container} onSubmit={onSubmit}>
			<input
				name={"title"}
				placeholder={"Ajouter une tâche"}
				value={todoTitle}
				onChange={onChangeTodoTitle}
				required={true}
			/>

			{isErrorToAddTodo && (
				<div>Une erreur est survenu lors de l'ajout de la tâche</div>
			)}
		</form>
	)
}
