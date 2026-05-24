import { ConvexReactClient, ConvexProvider } from "convex/react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { ClerkProvider, useAuth } from "@clerk/clerk-react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts & Pages
import CarsPage from "./pages/carsPage";

// 1. Initialize the Convex Client using your environment variable
const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl);

// 2. Grab your Auth publishable key
// const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      // <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      //   <BrowserRouter>
          // <Routes>
            // {/* Public Routes */}
            // <Route path="/login" element={<LoginPage />} />

            // {/* Protected Admin Routes */}
            // {/* The AdminLayout wraps these routes to handle structural layout & auth guards */}
            // <Route element={<AdminLayout />}>
            //   <Route path="/admin" element={<DashboardPage />} />
            //   <Route path="/admin/users" element={<UsersPage />} />
            //   <Route path="/admin/products" element={<ProductsPage />} />
            // </Route>

            // {/* Fallback / Redirects */}
            // <Route path="*" element={<Navigate to="/admin" replace />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </ConvexProviderWithClerk>
    // </ClerkProvider>

    <ConvexProvider client={convex}>
      <CarsPage />
    </ConvexProvider>
  );
}