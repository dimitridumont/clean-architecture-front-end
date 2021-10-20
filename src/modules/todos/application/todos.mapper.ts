import { Todo as TodoDomain } from "@/modules/todos/domain/todo"
import { Todo } from "@/modules/todos/application/todo"

export const mapToApplicationModel = (todosDomain: TodoDomain[]): Todo[] => {
	return todosDomain.map((todoDomain: TodoDomain) => ({
		title: todoDomain.title,
		isCompleted: todoDomain.isDone,
	}))
}
