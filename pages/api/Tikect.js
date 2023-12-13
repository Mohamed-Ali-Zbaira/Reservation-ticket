// import { useState, useEffect } from 'react';

// export default function TicketList() {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     async function fetchTickets() {
//       const response = await fetch('/api/tickets');
//       const data = await response.json();
//       setTickets(data);
//     }
//     fetchTickets();
//   }, []);

//   return (
  
//     <div className="w-full ml-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5">
//           <a href="#">
//             <img
//               className="p-8 rounded-t-lg"
//               src="/image/Ticket/sports01.jpg"
//               alt="product image"
//             />
//             </a>
//           <div className="px-5 pb-5">
//             <a href="#">
//               <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                 FOOTBALL LEAGUE TOURNAMENT
//               </h5>
//               </a>

//             <div className="flex items-center justify-between">
//               <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                 20 D
//               </span>
//               <a
//                 href="#"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Add to cart
//                 </a>
//             </div>
//           </div>
//         </div>
//   );
// }