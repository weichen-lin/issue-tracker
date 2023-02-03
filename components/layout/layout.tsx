import RoadCar from '@/components/roadCar'

export default function Layout() {
  return (
    <div className='relative h-screen w-full mx-auto overflow-hidden flex flex-col max-w-[1280px] lg:border-x-2'>
      <div className='w-1/2 h-24 mx-auto my-2'>
        <img
          src='static/logo.png'
          draggable={false}
          className='h-full mx-auto'
        ></img>
      </div>
      <RoadCar />
    </div>
  )
}
