import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clean architecture in front-end</title>
        <meta name="description" content="Clean architecture in front-end example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Counter
        </h1>
      </main>
    </div>
  )
}

export default Home
