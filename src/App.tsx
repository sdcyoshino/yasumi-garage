import { SignInButton, UserButton } from "@clerk/react";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading
} from "convex/react";

// Layouts & Pages
import AdminLayout from "./layout/adminLayout";

export default function App() {
  return (
    //     <BrowserRouter>
    //       <Routes>
    //         {/* Public Routes */}
    //         <Route path="/login" element={<LoginPage />} />

    //         {/* Protected Admin Routes */}
    //         {/* The AdminLayout wraps these routes to handle structural layout & auth guards */}
    //         <Route element={<AdminLayout />}>
    //         <Route path="/admin" element={<DashboardPage />} />
    //         <Route path="/admin/users" element={<UsersPage />} />
    //         <Route path="/admin/products" element={<ProductsPage />} />
    //         </Route>

    //          {/* Fallback / Redirects */}
    //         <Route path="*" element={<Navigate to="/admin" replace />} />
    //  </Routes>
    //  </BrowserRouter>
    <>
      <Unauthenticated>
        <SignInButton mode="modal"/>
      </Unauthenticated>
      <Authenticated>
          <AdminLayout 
            userButtonComponent={<UserButton />}
          />
      </Authenticated>
      <AuthLoading>
        <p>Still loading</p>
      </AuthLoading>
    </>
  );
}