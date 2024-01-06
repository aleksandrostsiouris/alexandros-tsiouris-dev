import { Index } from '@/components/pages'

export default function Home() {
  console.log(process.env.TEST)
  return (
    <div className='w-full h-full my-20 flex justify-center items-center'>
      <Index mapToken={process.env.MAPTOKEN!} />
    </div>
  )
}
