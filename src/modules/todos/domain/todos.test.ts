import { Todo } from "@/modules/todos/domain/todo"
import { getTodos } from "@/modules/todos/domain/todos.actions"
import { TodosInMemory } from "@/modules/todos/infrastructure/todos.in-memory"
import { todosFakes } from "@/modules/todos/domain/todos.fakes"

describe("[todos] unit tests", () => {
	const todosOutput = new TodosInMemory()

	describe("when the user wants to get his todos", () => {
		it("should get them without error", async () => {
			todosOutput.setTodos(todosFakes)

			const todos: Todo[] = await getTodos({
				todosOutput,
			})

			expect(todos).toBe(todosFakes)
		})

		it("shouldn't get them and should throw error", async () => {
			todosOutput.setTodos(undefined)

			await expect(
				getTodos({
					todosOutput,
				})
			).rejects.toThrowError()
		})
	})
})
