import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ loggedInUserName, greeting,instance }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(instance)
  
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    navigate("/login", { replace: true });
  };

  return (
    
    <nav className="w-full h-24 flex justify-between items-center">
      <div className="p-10">
        <h1 className="text-xl text-gray-400 font-normal">{greeting}</h1>
        <h1 className="text-xl text-gray-300 font-bold">{loggedInUserName}</h1>
      </div>

      <div className="p-10">
        <div className="">
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-300">
                <img
                  className="h-10 w-10 rounded-full flex justify-end"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link
                  to="/account"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Account
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to="/setting"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                >
                  Sign out
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
