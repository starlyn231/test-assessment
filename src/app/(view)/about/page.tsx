"use client";
export default function page() {
    const handleLike = () => {
        console.log('entreeeeee')
    }
    return (
        <div className="w-[100%] bg-gray-100 pt-20 ">
            <h1 className="mb-10 text-center text-2xl font-bold">Shopping Cart</h1>
            <div className="border-r-light-blue-500 mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-5">
                <div className="rounded-lg  md:w-full">
                    eeee
                    <button onClick={handleLike}
                        className='rounded bg-blue-500 px-4 py-2 text-lg text-white transition duration-300 hover:bg-blue-700'> Darle click</button>
                </div>
            </div>
        </div>
    )
}
