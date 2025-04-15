import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();
  const loaderData = useLoaderData(); // Access loader data
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700">Welcome to your protected dashboard, {user.username}!</p>
      <p className="text-gray-700 mt-2">Loader Message: {loaderData.message}</p>
      <p className="text-gray-500 text-sm">Loaded at: {loaderData.timestamp}</p>
    </div>
  );
}

export default Dashboard;