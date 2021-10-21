import { TodosOutput } from "@/modules/todos/domain/todos.output"
import { Todo } from "@/modules/todos/domain/todo"

export class TodosLocalStorage implements TodosOutput {
	getLocalTodos(): Todo[] {
		const localTodos: string | null = localStorage.getItem("todos")

		return localTodos ? JSON.parse(localTodos) : []
	}

	setLocalTodos(todos: Todo[]): void {
		localStorage.setItem("todos", JSON.stringify(todos))
	}

	getTodos(): Promise<Todo[]> {
		const todos: Todo[] = this.getLocalTodos()

		return Promise.resolve(todos)
	}

	addTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		return this.getTodos().then((todos: Todo[]) => {
			const isTodoExists: boolean =
				todos.find((todo: Todo) => todo.title === todoTitle) !==
				undefined

			if (!isTodoExists) {
				const todo: Todo = {
					title: todoTitle,
					isDone: false,
				}

				todos.push(todo)

				this.setLocalTodos(todos)
			}

			return Promise.resolve(todos)
		})
	}

	toggleCompleteTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		return this.getTodos().then((todos: Todo[]) => {
			todos = [
				...todos.map((todo: Todo) => {
					return todo.title === todoTitle
						? {
								...todo,
								isDone: !todo.isDone,
						  }
						: todo
				}),
			]

			this.setLocalTodos(todos)

			return Promise.resolve(todos)
		})
	}

	removeTodo({ todoTitle }: { todoTitle: string }): Promise<Todo[]> {
		return this.getTodos().then((todos: Todo[]) => {
			todos = [...todos.filter((todo: Todo) => todo.title !== todoTitle)]

			this.setLocalTodos(todos)

			return Promise.resolve(todos)
		})
	}
}
