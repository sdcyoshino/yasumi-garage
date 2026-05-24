import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const CarsPage = () => {
    const cars = useQuery(api.cars.getAllCars);
    return (
        <div className="flex flex-col items-center p-7 rounded-2xl">
            <h1 color="red">Cars</h1>
            <ul>
                {cars?.map((car) => (
                    <li key={car._id}>{car.plateNumber}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarsPage;