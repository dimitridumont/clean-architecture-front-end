import type { NextPage } from "next"
import Head from "next/head"
import { TodoListContainer } from "@/modules/todo/todo/todo-list.container"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Clean architecture in front-end</title>
				<meta
					name="description"
					content="Clean architecture in front-end example"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Todo list</h1>

				<TodoListContainer />
			</main>
		</div>
	)
}

export default Home
