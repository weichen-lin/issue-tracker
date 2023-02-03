import { PoliceCar, IssueCar } from '@/components/roadCar/car'

export default function RoadCar() {
  return (
    <div className='flex flex-col flex-1 bg-green-900/40 w-full items-center justify-center road relative'>
      <div className='absolute top-[40%] left-[10%] w-full h-full'>
        <PoliceCar />
      </div>
      <div className='absolute top-[60%] left-[15%] w-full h-full'>
        <PoliceCar />
      </div>
      <div className='absolute top-[50%] left-[60%] w-full h-full'>
        <IssueCar />
      </div>
    </div>
  )
}
