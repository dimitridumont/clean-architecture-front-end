import React from "react"
import { Todo } from "@/modules/todos/application/todo"
import { TodoItemView } from "@/modules/todos/application/todo-item/todo-item.view"
import { toggleCompleteTodo } from "@/modules/todos/domain/todos.actions"
import { outputs } from "@/config/outputs"
import { Todo as TodoDomain } from "@/modules/todos/domain/todo"
import { mapToApplicationModel } from "@/modules/todos/application/todos.mapper"

interface Props {
	todo: Todo
	setTodos: (todos: Todo[]) => void
}

export const TodoItemContainer = ({ todo, setTodos }: Props) => {
	const _completeTodo = async () => {
		try {
			const todos: TodoDomain[] = await toggleCompleteTodo({
				todosOutput: outputs.todosOutput,
				todoTitle: todo.title,
			})

			setTodos(mapToApplicationModel(todos))
		} catch (error) {
			console.warn(error)
		}
	}

	return <TodoItemView todo={todo} completeTodo={_completeTodo} />
}
