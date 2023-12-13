import { useRouter } from "next/router";

import Seatify from "../public/Seatify.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Navbar() {
    //   const router = useRouter();
    const [cookies, removeCookie] = useCookies(["cookie-name"]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if (cookies.username !== "undefined") {
            setLoggedIn(true);
        }
        if (cookies.admin !== "undefined" && cookies.admin) {
            setAdmin(true);
        }
    });
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center">
                    {/* <img src="Seatify.png" className="h-8 mr-2" alt="Flowbite Logo" /> */}
                    <span className="mr-5 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Seatify
                    </span>
                  </a>

                <div className="flex md:order-2">
                    {loggedIn ? (
                        <>
                            <button
                                type="button"
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                <a href="">{cookies.username}  </a>
                            </button>

                            <button
                                type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a
                                    href=""
                                    onClick={() => {
                                        removeCookie("username");
                                        removeCookie("admin");
                                        window.location.reload();
                                    }}
                                >
                                    Logout
                                  </a>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a href="/login">Login</a>
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <a href="/Register">Register</a>
                            </button>
                        </>
                    )}
                </div>
                <div
                    className="flex flex-col items-center justify-between w-full md:flex-row md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                              </a>
                        </li>
                        <li>
                            <a
                                href="/Sport"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Sport
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Movie"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Movie
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Contact"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/About"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About Us
                            </a>
                        </li>
                        {admin ? (
                            <li>
                                <a
                                    href="/Dash"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Dashboard
                                </a>
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
