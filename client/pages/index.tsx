import { FC } from 'react'
import Layout from '../components/Layout'

const Home: FC = () => {
  return (
    <Layout
      title={'Home page'}
      description={'Description'}
      keywords={'shop, react, redux, nextjs, docker, graghql, laravel'}
    >
      <main>
        <h1>Home page</h1>
      </main>
    </Layout>
  )
}

export default Home;
