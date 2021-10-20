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
