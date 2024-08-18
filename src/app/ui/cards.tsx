import { Image } from '@nextui-org/react'
import Link from 'next/link'
/* import ImageExample from '../../../public/0.jpg' */
import Image1 from '../../../public/absctract.jpg'
import SvgIconStar from './icon/StarIconSvg'
const CardsProducts = ({ id, title, tagline, image }: any) => {
    const numIcons = 5
    return (
        <div
            className='m-1 w-full max-w-sm rounded-lg border border-gray-200 
        bg-white shadow dark:border-gray-700 dark:bg-gray-800'
        >
            <Image
                src={image}
                className='rounded-t-lg p-8 opacity-100'
                alt={'Banner'}
            />

            <div className='px-5 pb-2'>
                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                    {tagline}
                </h5>

                <div className='flex items-center justify-between'>
                    <a
                        href='#'
                        className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Me interesa
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardsProducts
