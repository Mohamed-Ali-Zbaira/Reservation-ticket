import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
Footer
export default function AddCart() {
  return (
    <div>
      <>
 <Navbar/>
  <div>
    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
      <div className="flex flex-col justify-start items-start w-full space-y-9">
        <div className="flex justify-start flex-col items-start space-y-2">
          <button className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
            <svg
              className="fill-stroke"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91681 7H11.0835"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7L5.25014 9.33333"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7.00002L5.25014 4.66669"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none">Back</p>
          </button>
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
            Checkout
          </p>
          <p className="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">
            Home &gt; Sport  &gt; Cart &gt; Checkout
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                Your Tikect
              </p>
              <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                20 D
              </p>
            </div>
            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
              <img
                src="/image/Movie/Movie10.jpg"
                alt="headphones"
              />
            </div>
          </div>
          <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
            <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
              <div>
                
              </div>
            
            </button>
            <div className="flex flex-row justify-center items-center mt-6">
              <hr className="border w-full" />
              <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                 pay with card
              </p>
              <hr className="border w-full" />
            </div>
            <div className="mt-8">
              <input
                className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Card details
            </label>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="0000 1234 6549 15151"
                />
              </div>
              <div className="flex-row flex">
                <input
                  className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="MM/YY"
                />
                <input
                  className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="CVC"
                />
              </div>
            </div>
            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Name on card
            </label>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="Name on card"
                />
              </div>
            </div>
            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Country or region
            </label>
            <div className="mt-2 flex-col">
              <div className="relative">
                <button
                  id="changetext"
                  className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                  type="email"
                  name=""
                >
                  Tunis
                </button>
                <svg
                  onclick="showMenu(true)"
                  id="closeIcon"
                  className="cursor-pointer absolute top-4 right-4"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#27272A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onclick="showMenu(true)"
                  id="openIcon"
                  className="cursor-pointer hidden transform rotate-180 absolute top-4 right-4"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#27272A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  id="dropdown"
                  className="mt-1 hidden absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
                >
                  <div
                    onclick="changeText('China')"
                    className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    China
                  </div>
                  <div
                    onclick="changeText('Russia')"
                    className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    Russia
                  </div>
                  <div
                    onclick="changeText('UK')"
                    className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                  >
                    UK
                  </div>
                </div>
              </div>
              <input
                className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                name=""
                id=""
                placeholder="ZIP"
              />
            </div>
            <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
              <div>
                <p className="text-base leading-4">Pay </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</>

    </div>
  )
}
