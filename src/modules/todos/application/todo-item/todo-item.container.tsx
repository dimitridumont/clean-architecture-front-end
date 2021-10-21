import React, { useState } from "react"
import { Todo } from "@/modules/todos/application/todo"
import { TodoItemView } from "@/modules/todos/application/todo-item/todo-item.view"
import {
	removeTodo,
	toggleCompleteTodo,
} from "@/modules/todos/domain/todos.actions"
import { outputs } from "@/config/outputs"
import { Todo as TodoDomain } from "@/modules/todos/domain/todo"
import { mapToApplicationModel } from "@/modules/todos/application/todos.mapper"

interface Props {
	todo: Todo
	setTodos: (todos: Todo[]) => void
}

export const TodoItemContainer = ({ todo, setTodos }: Props) => {
	const [errorToCompleteTodo, setErrorToCompleteTodo] = useState<string>("")
	const [errorToRemoveTodo, setErrorToRemoveTodo] = useState<string>("")

	const _completeTodo = async () => {
		try {
			const todos: TodoDomain[] = await toggleCompleteTodo({
				todosOutput: outputs.todosOutput,
				todoTitle: todo.title,
			})

			setTodos(mapToApplicationModel(todos))
			setErrorToCompleteTodo("")
		} catch (error: any) {
			setErrorToCompleteTodo(error.message)
		}
	}

	const _removeTodo = async (event: any) => {
		event.preventDefault()

		try {
			const todos: TodoDomain[] = await removeTodo({
				todosOutput: outputs.todosOutput,
				todoTitle: todo.title,
			})

			setTodos(mapToApplicationModel(todos))
			setErrorToRemoveTodo("")
		} catch (error: any) {
			setErrorToRemoveTodo(error.message)
		}
	}

	return (
		<TodoItemView
			todo={todo}
			completeTodo={_completeTodo}
			removeTodo={_removeTodo}
			errorToCompleteTodo={errorToCompleteTodo}
			errorToRemoveTodo={errorToRemoveTodo}
		/>
	)
}
