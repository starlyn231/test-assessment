"use client";

import Link from 'next/link';
import { useState } from 'react';

type VehicleType = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

type VehicleDropdownsProps = {
  vehicleTypes: VehicleType[];
};

const VehicleDropdowns = ({ vehicleTypes }: VehicleDropdownsProps) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | number>('');
  const [selectedModelYear, setSelectedModelYear] = useState('');

  const currentYear = new Date().getFullYear();
  const modelYears = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg  max-w-md mx-auto">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
            Vehicule Type:
          </label>
          <select
            id="vehicleType"
            value={selectedVehicleType}
            onChange={(e) => setSelectedVehicleType(e.target.value)}
            className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecciona un tipo de vehículo</option>
            {vehicleTypes.map((type) => (
              <option className="text-black" key={type.MakeId} value={type.MakeId}>
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="modelYear" className="block text-sm font-medium text-gray-700">
            Model Year:
          </label>
          <select
            id="modelYear"
            value={selectedModelYear}
            onChange={(e) => setSelectedModelYear(e.target.value)}
            className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option className="text-black" value="">Selecciona un año</option>
            {modelYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Link href={`/result/${selectedVehicleType}/${selectedModelYear}`}>
        <button
          disabled={!selectedVehicleType || !selectedModelYear}
          className={`my-2 w-full font-bold py-2 px-4 rounded ${selectedVehicleType && selectedModelYear
            ? "bg-blue-500 hover:bg-blue-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default VehicleDropdowns;
