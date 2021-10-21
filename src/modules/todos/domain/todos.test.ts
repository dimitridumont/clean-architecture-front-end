import { Todo } from "@/modules/todos/domain/todo"
import {
	addTodo,
	getTodos,
	removeTodo,
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
				todoTitle: "Prepare for the meeting",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Prepare for the meeting",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("should add it to his existing todos", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await addTodo({
				todosOutput,
				todoTitle: "Prepare the course",
			})

			const expectedTodos: Todo[] = [
				...todosOutput.mapToDomainModel(todosInfrastructureFakes),
				{
					title: "Prepare the course",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't add it to his existing todos if the todo is already existed", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await addTodo({
				todosOutput,
				todoTitle: "Prepare for the meeting",
			})

			const expectedTodos: Todo[] = [
				...todosOutput.mapToDomainModel(todosInfrastructureFakes),
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't add it and should throw error", async () => {
			todosOutput.setTodos(undefined)

			await expect(
				addTodo({
					todosOutput,
					todoTitle: "Prepare the course",
				})
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to complete one of his todo", () => {
		it("should complete it", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "Prepare for the meeting",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Prepare for the meeting",
					isDone: true,
				},
				{
					title: "Walk the dog",
					isDone: true,
				},
				{
					title: "Start the project",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("should not completed if the todo is already completed", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "Walk the dog",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Prepare for the meeting",
					isDone: false,
				},
				{
					title: "Walk the dog",
					isDone: false,
				},
				{
					title: "Start the project",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't completed it if the todo doesn't exit", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await toggleCompleteTodo({
				todosOutput,
				todoTitle: "A todo that does not exist",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Prepare for the meeting",
					isDone: false,
				},
				{
					title: "Walk the dog",
					isDone: true,
				},
				{
					title: "Start the project",
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
					todoTitle: "Prepare the course",
				})
			).rejects.toThrowError()
		})
	})

	describe("when the user wants to remove one of his todo", () => {
		it("should remove it", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await removeTodo({
				todosOutput,
				todoTitle: "Prepare for the meeting",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Walk the dog",
					isDone: true,
				},
				{
					title: "Start the project",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't remove it if the todo doesn't exist", async () => {
			todosOutput.setTodos(todosInfrastructureFakes)

			const todos: Todo[] = await removeTodo({
				todosOutput,
				todoTitle: "A todo that does not exist",
			})

			const expectedTodos: Todo[] = [
				{
					title: "Prepare for the meeting",
					isDone: false,
				},
				{
					title: "Walk the dog",
					isDone: true,
				},
				{
					title: "Start the project",
					isDone: false,
				},
			]

			expect(todos).toEqual(expectedTodos)
		})

		it("shouldn't remove it and should throw error", async () => {
			todosOutput.setTodos(undefined)

			await expect(
				removeTodo({
					todosOutput,
					todoTitle: "Prepare the course",
				})
			).rejects.toThrowError()
		})
	})
})
