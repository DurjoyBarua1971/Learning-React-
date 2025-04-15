import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-100 p-4 mb-6 rounded-lg flex items-center justify-between">
      <div className="space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/users/1"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          User Profile
        </NavLink>
        {!user && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
            }
          >
            Login
          </NavLink>
        )}
      </div>
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Hello, {user.username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;