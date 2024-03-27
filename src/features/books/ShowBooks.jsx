import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./booksSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowBooks = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        dispatch(deleteBook(id));
      }
    });
  };
  return (
    <div>
      <h2 data-aos="fade-down" className="text-center my-2 font-bold text-2xl">
        All Books
      </h2>
      <table
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="w-2/3 mx-auto my-10 text-center"
      >
        <thead>
          <tr>
            <th className="border-2 border-black">SL</th>
            {/* <th className="border-2 border-black">Id</th> */}
            <th className="border-2 border-black">Name</th>
            <th className="border-2 border-black">Description</th>
            <th className="border-2 border-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, index) => {
            const { id, name, description } = book;
            return (
              <tr key={id}>
                <td className="border-2 border-gray-400">{index + 1}</td>
                {/* <td className="border-2 border-gray-400">{id}</td> */}
                <td className="border-2 border-gray-400">{name}</td>
                <td className="border-2 border-gray-400">{description}</td>
                <td className="border-2 border-gray-400">
                  <Link to="/edit-book" state={{ id, name, description }}>
                    <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-2 rounded-full transition ease-in-out duration-300 hover:scale-105 my-1 font-bold mr-10">
                      <FaRegEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteBook(id)}
                    className="bg-red-400 hover:bg-red-500 text-white py-2 px-2 rounded-full transition ease-in-out duration-300 hover:scale-105 my-1 font-bold"
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooks;
