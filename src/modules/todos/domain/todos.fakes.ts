import { Todo as TodoModel, Todo } from "@/modules/todos/infrastructure/todo"

export const todosInfrastructureFakes: Todo[] = [
	{
		title: "Prepare for the meeting",
		isOk: false,
	},
	{
		title: "Walk the dog",
		isOk: true,
	},
	{
		title: "Start the project",
		isOk: false,
	},
]

export const todosDomainFakes = todosInfrastructureFakes.map(
	(infraModel: TodoModel) => ({
		title: infraModel.title,
		isDone: infraModel.isOk,
	})
)
