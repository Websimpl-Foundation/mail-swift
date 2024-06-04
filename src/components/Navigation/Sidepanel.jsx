import { NavLink } from "react-router-dom";

function Sidepanel( ) {

  return (
    <>
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <NavLink
            to={"/"}
            className="text-3xl font-bold text-blue-600 font-sans"
          >
            Mail Swift
          </NavLink>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-auto">
          <nav className="flex flex-col space-y-1">
            <NavLink
              to={"/dashboard"} 
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/campaigns"}
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Campaigns
            </NavLink>
            <NavLink
              to={"/templates"}
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Templates
            </NavLink>
            <NavLink
              to={"/subscribers"} 
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Subscribers
            </NavLink>
            <NavLink
              to={"/messages"} 
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Messages
            </NavLink>
            <NavLink
              to={"/email-services"} 
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Email Services
            </NavLink>
            <NavLink
              to={"/manage-users"}
              className={({ isActive }) =>
                `px-4 py-3 justify-start rounded-none text-left text-sm font-medium ${
                  isActive
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Manage Users
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidepanel;
