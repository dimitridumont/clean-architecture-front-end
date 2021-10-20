import { Todo } from "@/modules/todos/domain/todo"

export interface TodosOutput {
	getTodos(): Promise<Todo[]>
}
