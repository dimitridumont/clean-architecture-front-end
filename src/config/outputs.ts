import { TodosLocalStorage } from "@/modules/todos/infrastructure/todos.local-storage"

export const outputs = {
	todosOutput: new TodosLocalStorage(),
}
