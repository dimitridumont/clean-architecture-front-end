import { TodosOutput } from "@/modules/todos/domain/todos.output"
import { Todo } from "@/modules/todos/domain/todo"
import { Todo as TodoInfra } from "@/modules/todos/infrastructure/todo"

export class TodosInMemory implements TodosOutput {
	private todos: TodoInfra[] | undefined = []

	setTodos(todos: TodoInfra[] | undefined): void {
		this.todos = todos ? [...todos] : undefined
	}

	mapToDomainModel(infraModel: TodoInfra[]): Todo[] {
		return infraModel.map((infraModel: TodoInfra) => ({
			title: infraModel.title,
			isDone: infraModel.isOk,
		}))
	}

	getTodos(): Promise<Todo[]> {
		if (!this.todos) {
			throw new Error("Please create a todo")
		}

		const todos: Todo[] = this.mapToDomainModel(this.todos)

		return Promise.resolve(todos)
	}

	addTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		if (!this.todos)
			throw new Error("An error occurred while adding the todo")

		const isTodoExists: boolean =
			this.todos.find((todo: TodoInfra) => todo.title === todoTitle) !==
			undefined

		if (!isTodoExists) {
			const todo: TodoInfra = {
				title: todoTitle,
				isOk: false,
			}

			this.todos.push(todo)
		}

		const todos: Todo[] = this.mapToDomainModel(this.todos)

		return Promise.resolve(todos)
	}

	toggleCompleteTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		if (!this.todos)
			throw new Error("An error occurred while modifying the todo")

		this.todos = [
			...this.todos.map((todo: TodoInfra) => {
				return todo.title === todoTitle
					? {
							...todo,
							isOk: !todo.isOk,
					  }
					: todo
			}),
		]

		const todos: Todo[] = this.mapToDomainModel(this.todos)

		return Promise.resolve(todos)
	}

	removeTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		if (!this.todos)
			throw new Error("n error occurred while deleting the task")

		this.todos = [
			...this.todos.filter((todo: TodoInfra) => todo.title !== todoTitle),
		]

		const todos: Todo[] = this.mapToDomainModel(this.todos)

		return Promise.resolve(todos)
	}
}
