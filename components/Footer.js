import React from "react";

export default function Footer() {
  return (
    <div className="text-center py-0">
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023
              <a href="https://flowbite.com/" className="hover:underline">
                Seatify™
                </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
