import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <div>
      <p>You clicked {count()} times</p>
      <button onClick={() => setCount(count() + 1)}>Click me</button>
    </div>
  )
}
