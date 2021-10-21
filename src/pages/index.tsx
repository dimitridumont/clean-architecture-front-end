import type { NextPage } from "next"
import Head from "next/head"
import { TodoListContainer } from "@/modules/todos/application/todo-list/todo-list.container"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Clean architecture in front-end</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="Clean architecture in front-end example"
				/>
				<meta name="author" content="Dimitri Dumont" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TodoListContainer />
		</>
	)
}

export default Home
