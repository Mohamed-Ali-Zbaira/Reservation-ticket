const mongoose = require("mongoose");
import Link from "next/link";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dash() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [addUserFormVisible, setAddUserFormVisible] = useState(false);
  const handleAdd = () => {
    const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        Password: String,
        role: {
          type: String,
          enum: ["user", "admin"],
        },
      });
    setAddUserFormVisible(true);
  
    // Example: Navigate to a page for adding a user
    // You can use a routing library to navigate to the add user page
    window.location.href = "/Register";
   
  };
  if (addUserFormVisible) {
    window.location.href = "/Dash";
  }
  
  const handleDelete = useCallback(async (userId) => {
    try {
      // Logic to delete a user with the provided userId
     await axios.post("http://localhost:9999/api/users/delete", {
      id: userId
    });

    console.log('auser deleted!!');
    const updatedUsers = users.filter((user) => user._id !== userId);
    
    // Update the users array after deleting the user
    setUsers(updatedUsers);
    } catch (error) {
      console.log('error => ', error);
    }
  }, [users]);
  
  return (
    <div>
      <>
        {/* component */}
        {/* This is an example component */}
        <div>
          <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <a
                    href="/Dash"
                    className="text-xl font-bold flex items-center lg:ml-2.5"
                  >
                    <img
                      src="https://demo.themesberg.com/windster/images/logo.svg"
                      className="h-6 mr-2"
                      alt="Windster Logo"
                    />
                    <span className="self-center whitespace-nowrap">
                      Windster
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex overflow-hidden bg-white pt-16">
            <aside
              id="sidebar"
              className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
              aria-label="Sidebar"
            >
              <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex-1 px-3 bg-white divide-y space-y-1">
                    <ul className="space-y-2 pb-2">
                      <li>
                        <Link
                          href="/"
                          className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 5h10v10H5z" />
                            <path d="M12 2L2 12h10V2z" />
                          </svg>
                          <span className="ml-3">Seatify</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                          </svg>
                          <span className="ml-3">Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            Users
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Listecontact"
                          
                          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            Contact
                          </span>
                          
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/SportTicket"
                         
                          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            Sport Ticket
                          </span>
                        
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/MovieTicket"
                         
                          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                        >
                          <svg
                            className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            Movie Ticket
                          </span>
                        
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            />
            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
            >
              <main>
                <div className="pt-6 px-4">
                  {/* ################"" */}
                  <div className="pt-6 px-4">
  <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Liste des utilisateurs
      </h1>
      <div className="flex justify-between mb-4"> {/* Add a container for the buttons */}
        <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter
        </button>
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">
              Nom d'utilisateur
            </th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Rôle</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">
                {user.username}
              </td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-24 py-2">
  <div className="flex space-x-2">
    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleDelete(user._id)}>Supprimer</button>
    
    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => handleEdit(user._id)}>
      <a href="/UpdateUsers">Update</a>
    </button>
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

                  {/* ##################*/}
                </div>
              </main>

              <p className="text-center text-sm text-gray-500 my-10">
                © 2023{" "}
                <a href="#" className="hover:underline" target="_blank">
                  Seatify
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
