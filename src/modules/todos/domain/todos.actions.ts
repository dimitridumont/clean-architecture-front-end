import { Todo } from "@/modules/todos/domain/todo"
import { TodosOutput } from "@/modules/todos/domain/todos.output"

export const getTodos = async ({
	todosOutput,
}: {
	todosOutput: TodosOutput
}): Promise<Todo[]> => {
	try {
		return await todosOutput.getTodos()
	} catch (error: any) {
		throw new Error(error)
	}
}

export const addTodo = async ({
	todosOutput,
	todoTitle,
}: {
	todosOutput: TodosOutput
	todoTitle: string
}): Promise<Todo[]> => {
	try {
		return await todosOutput.addTodo({ todoTitle })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const toggleCompleteTodo = async ({
	todosOutput,
	todoTitle,
}: {
	todosOutput: TodosOutput
	todoTitle: string
}): Promise<Todo[]> => {
	try {
		return await todosOutput.toggleCompleteTodo({ todoTitle })
	} catch (error: any) {
		throw new Error(error)
	}
}

export const removeTodo = async ({
	todosOutput,
	todoTitle,
}: {
	todosOutput: TodosOutput
	todoTitle: string
}): Promise<Todo[]> => {
	try {
		return await todosOutput.removeTodo({ todoTitle })
	} catch (error: any) {
		throw new Error(error)
	}
}
