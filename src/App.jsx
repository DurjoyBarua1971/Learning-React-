import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="max-w-6xl mx-auto p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes with Loader */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
              loader={async () => {
                // Mock API call
                await new Promise((resolve) => setTimeout(resolve, 500));
                return {
                  message: "Welcome to your dashboard!",
                  timestamp: new Date().toISOString(),
                };
              }}
              errorElement={<ErrorBoundary />}
            />
          </Route>

          {/* Nested Routes Example */}
          <Route path="/profile" element={<Outlet />}>
            <Route
              index
              element={<div className="p-4">Profile Overview</div>}
            />
            <Route
              path="settings"
              element={<div className="p-4">Profile Settings</div>}
            />
            <Route
              path="posts"
              element={<div className="p-4">Profile Posts</div>}
            />
          </Route>

          {/* Dynamic Route with Loader */}
          <Route
            path="/users/:id"
            element={<UserProfile />}
            loader={async ({ params }) => {
              // Mock fetching user data
              await new Promise((resolve) => setTimeout(resolve, 500));
              if (!["1", "2", "3"].includes(params.id)) {
                throw new Error("User not found");
              }
              return { id: params.id, name: `User ${params.id}` };
            }}
            errorElement={<ErrorBoundary />}
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
