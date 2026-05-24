import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const CarsPage = () => {
    const cars = useQuery(api.cars.getAllCars);
    return (
        <div>
            <h1>Cars</h1>
            <ul>
                {cars?.map((car) => (
                    <li key={car._id}>{car.plateNumber}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarsPage;