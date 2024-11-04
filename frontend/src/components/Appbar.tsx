import { useState, useEffect } from 'react';
import { Avatar } from './BlogCard';
import { Link, useNavigate } from 'react-router-dom';

function Appbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('Anonymous');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
  }
}, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const signOut = () => {
    localStorage.removeItem('Authtoken');
    localStorage.removeItem('userName'); // Also remove the userName if stored
    toggleDropdown();
    navigate('/signin');
  };

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to="/" className="text-lg font-bold">
        Medium
      </Link>

      <div className="relative">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-4"
          >
            Publish
          </button>
        </Link>

        <div className="inline-flex items-center cursor-pointer" onClick={toggleDropdown}>
          <Avatar name={userName} />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-20">
            <button
              onClick={signOut}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Appbar;
