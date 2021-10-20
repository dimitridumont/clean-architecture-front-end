import React, { useEffect, useState } from "react"
import { Todo as TodoDomain } from "@/modules/todos/domain/todo"
import { TodoListView } from "@/modules/todos/application/todo-list/todo-list.view"
import { getTodos } from "@/modules/todos/domain/todos.actions"
import { outputs } from "@/config/outputs"
import { Todo } from "@/modules/todos/application/todo"

export const TodoListContainer = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [isErrorToGetTodos, setIsErrorToGetTodos] = useState<boolean>(false)

	useEffect(() => {
		_getTodos()
	}, [])

	const _getTodos = async () => {
		try {
			const todosDomain: TodoDomain[] = await getTodos({
				todosOutput: outputs.todosOutput,
			})

			const todos: Todo[] = mapToApplicationModel(todosDomain)

			setTodos(todos)
			setIsErrorToGetTodos(false)
		} catch (error) {
			setIsErrorToGetTodos(true)
		}
	}

	const mapToApplicationModel = (todosDomain: TodoDomain[]): Todo[] => {
		return todosDomain.map((todoDomain: TodoDomain) => ({
			...todoDomain,
			isCompleted: todoDomain.isDone,
		}))
	}

	return <TodoListView todos={todos} isErrorToGetTodos={isErrorToGetTodos} />
}
