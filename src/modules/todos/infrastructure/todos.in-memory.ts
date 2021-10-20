import { TodosOutput } from "@/modules/todos/domain/todos.output"
import { Todo } from "@/modules/todos/domain/todo"
import { Todo as TodoModel } from "@/modules/todos/infrastructure/todo"

export class TodosInMemory implements TodosOutput {
	private todos: TodoModel[] | undefined = []

	setTodos(todos: TodoModel[] | undefined): void {
		this.todos = todos
	}

	getTodos(): Promise<Todo[]> {
		if (!this.todos) {
			throw new Error("Veuillez créer une tâche")
		}

		const todos: Todo[] = this.mapToDomainModel(this.todos)

		return Promise.resolve(todos)
	}

	mapToDomainModel(infraModel: TodoModel[]): Todo[] {
		return infraModel.map((infraModel: TodoModel) => ({
			...infraModel,
			isDone: infraModel.isOk,
		}))
	}
}
