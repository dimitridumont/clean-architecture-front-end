import { Todo } from "@/modules/todos/domain/todo"
import {
	addTodo,
	getTodos,
	toggleCompleteTodo,
} from "@/modules/todos/domain/todos.actions"
import { TodosInMemory } from "@/modules/todos/infrastructure/todos.in-memory"
import {
	todosDomainFakes,
	todosInfrastructureFakes,
} from "@/modules/todos/domain/todos.fakes"

describe("[todos] unit tests", () => {
	const todosOutput = new TodosInMemory()

	beforeEach(() => {
		todosOutput.setTodos([])
	})

	describe("when the user wants to get his todos", () => {
		it("should get them without error", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await getTodos({
				todosOutput,
			})

			expect(todos).toEqual(todosDomainFakes)
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

	describe("when the user wants to add a todo", () => {
		it("should add it to his empty todos", async () => {
			const todos: Todo[] = await addTodo({
				todosOutput,
				todoTitle: "Préparer la réunion",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Préparer la réunion",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("should add it to his existing todos", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await addTodo({
				todosOutput,
				todoTitle: "Préparer le cours",
			})

			const expectedTodos: Todo[] = [
				...todosOutput.mapToDomainModel(todosInfrastructureFakes),
				{
					title: "Préparer le cours",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't add it and should throw error", async () => {
			todosOutput.setTodos(undefined)

			await expect(
				addTodo({
					todosOutput,
					todoTitle: "Préparer le cours",
				})
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to complete one of his todo", () => {
		it("should complete it", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "Préparer la réunion",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Préparer la réunion",
					isDone: true,
				},
				{
					title: "Promener le chien",
					isDone: true,
				},
				{
					title: "Commencer le MVP",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("should not completed if the todo is already completed", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "Promener le chien",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Préparer la réunion",
					isDone: false,
				},
				{
					title: "Promener le chien",
					isDone: false,
				},
				{
					title: "Commencer le MVP",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't completed it if the todo doesn't exit", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "Une tâche qui n'existe pas",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Préparer la réunion",
					isDone: false,
				},
				{
					title: "Promener le chien",
					isDone: true,
				},
				{
					title: "Commencer le MVP",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't completed it and should throw error", async () => {
			todosOutput.setTodos(undefined)

			await expect(
				toggleCompleteTodo({
					todosOutput,
					todoTitle: "Préparer le cours",
				})
			).rejects.toThrowError()
		})
	})
})
