import { Todo } from "@/modules/todos/domain/todo"

export interface TodosOutput {
	getTodos(): Promise<Todo[]>
	addTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]>
	toggleCompleteTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]>
	removeTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]>
}
