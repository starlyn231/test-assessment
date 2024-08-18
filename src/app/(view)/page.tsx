import Image from 'next/image'
import absctractImage from 'public/_dealer_image.jpg'
import { fetchCarDealer } from '../lib/data'
import SectionInfo from './components/section-information'
import VehicleDropdowns from './components/VehicleDropdown'

type VehicleType = {
  id: string
  name: string
}

export default async function Home() {
  const { Results } = await fetchCarDealer()
  console.log(Results)

  return (
    <div className='flex w-full flex-col items-center '>
      <div className='border-r-light-blue-500 mb-5  w-5/6 justify-center px-3 md:flex'></div>
      <div className='relative w-full'>
        <Image
          src={absctractImage}
          className=' w-full'
          /* width={500} */
          style={{ objectFit: 'cover' }}
          alt={'Banner'}
        />
      </div>

      {/* start other section */}
      <section className='bg-white p-4'>
        <SectionInfo />
      </section>

      <div className='bg-blue-white w-full mt-10 flex  flex-col items-center justify-center'>
        <h2
          className='pb-3 text-[18px] font-bold uppercase tracking-tight 
                text-[#222] md:text-[24px] lg:text-[28px] xl:text-[32px] '
        >
          We also serve the following areas:
        </h2>

        <div className='mx-auto flex w-full flex-wrap items-center justify-center text-center'>
          <div className='w-full border-gray-700'>
            <VehicleDropdowns vehicleTypes={Results} />
          </div>
        </div>

        <h2
          className='pb-3 text-[18px] font-bold uppercase tracking-tight 
                text-[#222] md:text-[24px] lg:text-[28px] xl:text-[32px] '
        >
          Our featured Aroma Range
        </h2>

        <div className='my-7 flex w-full max-w-[700px] flex-wrap items-center justify-center text-center'>
          <p className='mt-[7]ext-base mb-[15px] pb-[25px] leading-6 tracking-tighter text-gray-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
        </div>
      </div>
    </div>
  )
}
