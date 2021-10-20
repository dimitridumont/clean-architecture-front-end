import type { NextPage } from "next"
import Head from "next/head"
import { TodoListContainer } from "@/modules/todos/application/todo-list/todo-list.container"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Clean architecture in front-end</title>
				<meta
					name="description"
					content="Clean architecture in front-end example"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TodoListContainer />
		</>
	)
}

export default Home
