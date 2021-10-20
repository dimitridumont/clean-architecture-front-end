import React, { useState } from "react"
import { AddTodoFormView } from "@/modules/todos/application/add-todo-form/add-todo-form.view"
import { addTodo } from "@/modules/todos/domain/todos.actions"
import { outputs } from "@/config/outputs"
import { Todo } from "@/modules/todos/application/todo"
import { Todo as TodoDomain } from "@/modules/todos/domain/todo"
import { mapToApplicationModel } from "@/modules/todos/application/todos.mapper"

interface Props {
	setTodos: (todos: Todo[]) => void
}

export const AddTodoFormContainer = ({ setTodos }: Props) => {
	const [todoTitle, setTodoTitle] = useState<string>("")
	const [isErrorToAddTodo, setIsErrorToAddTodo] = useState<boolean>(false)

	const onChangeTodoTitle = (event: any) => {
		const title: string = event.target.value

		setTodoTitle(title)
	}

	const onSubmit = async (event: any) => {
		event.preventDefault()

		try {
			const todos: TodoDomain[] = await addTodo({
				todosOutput: outputs.todosOutput,
				todoTitle,
			})

			setTodos(mapToApplicationModel(todos))

			setTodoTitle("")
			setIsErrorToAddTodo(false)
		} catch (error) {
			setIsErrorToAddTodo(true)
		}
	}

	return (
		<AddTodoFormView
			onSubmit={onSubmit}
			todoTitle={todoTitle}
			onChangeTodoTitle={onChangeTodoTitle}
			isErrorToAddTodo={isErrorToAddTodo}
		/>
	)
}
