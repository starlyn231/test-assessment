import { fetchCarDealer, fetchVehicleModels } from '@/app/lib/data'
import { GetStaticPaths, NextPage } from 'next'
import { FunctionComponent } from 'react'
import absctractImage from 'public/ds-car.jpg'
import carImage from 'public/_dealer_image.jpg'
import Image, { StaticImageData } from 'next/image'
type VehicleResultPageProps = {
    vehicleModels: any[]; // Adjust the type according to the actual structure of the models
    makeId: string;
    year: string;
    params: { [key: string]: any }; // Make params a required property
};
type PropData = {
    title: string,
    image: string | StaticImageData
}
const Card = ({ title, image }: PropData) => (
    <div className='overflow-hidden rounded-lg bg-white shadow-md'>
        <Image
            src={image}
            className=' w-full'
            width={500}
            style={{ objectFit: 'cover' }}
            alt={'carCards'}
        />
        <div className='bg-slate-100 p-4'>
            <h3 className='text-lg font-bold text-gray-900'>{title}</h3>
        </div>
    </div>
)
const VehicleResultPage: FunctionComponent<VehicleResultPageProps> = async ({
    params
}) => {
    const { makeId, year } = params
    const vehicleModels = await fetchVehicleModels(makeId, year)
    return (
        <>
            {/* Renderiza los modelos obtenidos */}
            <div className='container mx-auto p-4'>
                <h1 className='mb-4 text-2xl font-bold'>
                    Modelos para {makeId} del año {year}
                </h1>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {vehicleModels.length === 0 ? (
                        <div className='col-span-full rounded-md bg-gray-100 p-4 text-center'>
                            <p className='text-lg font-medium'>
                                No models found for this year and brand.
                            </p>
                        </div>
                    ) : (
                        vehicleModels.map((model: any) => (
                            <Card
                                key={model.Model_ID}
                                title={model.Model_Name}
                                image={carImage} // Asegúrate de definir `carImage` o usa una URL de imagen predeterminada
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default VehicleResultPage
