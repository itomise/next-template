import { Hello } from 'components/ui/Hello/Hello'
import { useGlobalCount } from 'store/hello'

export const Index = () => {
  const { count, increment, decrement } = useGlobalCount()
  return (
    <div>
      <Hello
        title="Next.js Template"
        count={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  )
}
