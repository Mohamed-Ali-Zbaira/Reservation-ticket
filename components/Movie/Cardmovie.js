import { useState, useEffect } from 'react';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch("http://localhost:9999/api/tickets");
      const data = await response.json();
      setTickets(data.tickets);
      setTotalPages(data.totalPages);
    }
    fetchTickets();
  }, [currentPage]);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {tickets.map((ticket) => (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src="https://th.bing.com/th/id/R.2cbbc64de1e28885e48be81c74780529?rik=rREcpuSlttaKlw&riu=http%3a%2f%2f2.bp.blogspot.com%2f_BzYHClvuKF8%2fTLUPobjBmJI%2fAAAAAAAAAo4%2f4eYVZOzHZt0%2fs1600%2f2.jpg&ehk=NgGccIz25F6f%2fFAj8HKAVUFf4UoTkpuqz%2fgww7vJc78%3d&risl=&pid=ImgRaw&r=0"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {ticket.name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            <p>{ticket.price} Dt</p>
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

     
      <nav>
        <ul>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button disabled={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}