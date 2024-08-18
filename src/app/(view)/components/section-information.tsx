import { CalendarIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const SectionInfo = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='-mx-2 flex flex-wrap'>
                <div className='mb-4 w-full px-2 sm:w-1/3'>
                    <div className='p-4 '>
                        <div className='mb-4 flex items-center'>
                            <div className='mr-3 rounded-full bg-gray-100 p-2'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='40'
                                    height='35'
                                >
                                    <path
                                        fill='#FFFFED'
                                        d='M12 12c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-14.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-3.5 9c2.33-1.47 5.67-1.47 8 0 .5-.83.5-1.67 0-2.5-2.33-1.47-5.67-1.47-8 0-.5.83-.5 1.67 0 2.5zm7-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <a
                                    href='/360-garantia'
                                    className='text-lg font-semibold text-blue-600'
                                >
                                    100% satisfaction guaranteed
                                </a>
                                <p>
                                    If not, we will <strong>credit you or repeat</strong> the
                                    order your gifts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-4 w-full px-2 sm:w-1/3'>
                    <div className='p-4 '>
                        <div className='mb-4 flex items-center'>
                            <div className='mr-3 rounded-full bg-gray-100 p-2'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='40'
                                    height='35'
                                >
                                    <path fill='none' d='M0 0h24v24H0z' />
                                    <path
                                        fill='#FFFFED'
                                        d='M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <a
                                    href='/360-garantia'
                                    className='text-lg font-semibold text-blue-600'
                                >
                                    Always on-time delivery
                                </a>
                                <p>
                                    Firm commitment then{' '}
                                    <strong>We will put the date in writing</strong>on your
                                    request for gifts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-4 w-full px-2 sm:w-1/3'>
                    <div className='p-4 '>
                        <div className='mb-4 flex items-center'>
                            <div className='mr-3 rounded-full bg-gray-100 p-2'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='40'
                                    height='35'
                                >
                                    <path fill='none' d='M0 0h24v24H0z' />
                                    <path
                                        fill='#FFFFED'
                                        d='M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM6 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 16h10v2H1z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <a
                                    href='/360-garantia'
                                    className='text-lg font-semibold text-blue-600'
                                >
                                    Portes Gratis
                                </a>
                                <p>
                                    Shipping your gifts <strong>will be free</strong> if it
                                    exceeds the €99 purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInfo
