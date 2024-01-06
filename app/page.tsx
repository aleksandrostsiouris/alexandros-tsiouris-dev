import { Index } from '@/components/pages'

export default function Home() {
  return (
    <div className='w-full h-full my-20 flex justify-center items-center'>
      <Index mapToken={process.env.MAPTOKEN!} />
    </div>
  )
}
