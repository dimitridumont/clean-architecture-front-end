import { Todo as TodoModel, Todo } from "@/modules/todos/infrastructure/todo"

export const todosInfrastructureFakes: Todo[] = [
	{
		title: "Préparer la réunion",
		isOk: false,
	},
	{
		title: "Promener le chien",
		isOk: true,
	},
	{
		title: "Commencer le MVP",
		isOk: false,
	},
]

export const todosDomainFakes = todosInfrastructureFakes.map(
	(infraModel: TodoModel) => ({
		title: infraModel.title,
		isDone: infraModel.isOk,
	})
)
