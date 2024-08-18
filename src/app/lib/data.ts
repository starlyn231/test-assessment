import Image1 from "../../../public/0.jpg"
import Image2 from "../../../public/canImage.jpeg"
const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';
export async function fetchCarDealer() {
    // Add noStore() here prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).

    //  noStore();
    try {
        // Artificially delay a reponse for demo purposes.
        // Don't do this in real life :)

        // console.log('Fetching revenue data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        await new Promise(resolve => setTimeout(resolve, 3000))
        const response = await fetch(baseUrl, { cache: 'no-store' })

        const data = await response.json()

        return data
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch revenue data.')
    }
}

export const fetchVehicleModels = async (makeId: string, year: string) => {
    const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch vehicle models');
    }
    console.log('Vehicle models: ' + JSON.stringify(response))
    const data = await response.json();
    return data.Results || [];
};


type VehicleModel = {
    Model_ID: number;
    Model_Name: string;
};

type ResultPageProps = {
    models: VehicleModel[];
};
// Función para obtener los modelos de vehículos basado en makeId y year


export async function generateStaticParams() {
    // Fetch the vehicle data
    const data = await fetchCarDealer(); // Define this function or use static data
    const currentYear = new Date().getFullYear();
    const modelYears = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => (2015 + i).toString());

    // Generate paths dynamically
    const paths = data.Results.flatMap((vehicleType) =>
        modelYears.map((year) => ({
            params: {
                makeId: vehicleType.MakeId.toString(),
                year: year
            }
        }))
    ) || []; // Ensure paths is an array, fallback to empty array if undefined

    return {
        paths,
        fallback: false // Adjust as needed ('blocking' or 'true' can be used for other fallback strategies)
    };
}

export const mockData = [
    {
        id: 1,
        title: 'Primer Slide',
        tagline: 'Este es el tagline del primer slide',
        image: '/_dealer_image.jpg',
    },
    {
        id: 2,
        title: 'Segundo Slide',
        tagline: 'Este es el tagline del segundo slide',
        image: '/downloadd.jpeg',
    },
    {
        id: 3,
        title: 'Tercer Slide',
        tagline: 'The Dealer API provides Dealer search functions.',
        image: '/Dealership-Image.avif',
    },

];
