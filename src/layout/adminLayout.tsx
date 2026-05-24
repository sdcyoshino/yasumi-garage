import CarsPage from "../pages/carsPage";

interface AdminLayoutProps {
    userButtonComponent: React.ReactNode;
}

const AdminLayout = ({userButtonComponent} : AdminLayoutProps) => {
    return (
        <div className="bg-orange-100 h-screen">
            {userButtonComponent}
            <CarsPage />
        </div>
    );
}

export default AdminLayout;