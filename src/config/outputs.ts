import { TodosInMemory } from "@/modules/todos/infrastructure/todos.in-memory"

export const outputs = {
	todosOutput: new TodosInMemory(),
}
