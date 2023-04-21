import { Title } from 'solid-start'
import Counter from '~/component/features/Counter'

export default function Home() {
  return (
    <main class="w-full">
      <Title>Hello World</Title>
      <h1 class="text-xl text-center">Hello world!</h1>
      <Counter />
    </main>
  )
}
