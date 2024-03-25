import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./booksSlice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  
  const handleDeleteBook = (id)=>{
    dispatch(deleteBook(id))
  }
  return (
    <div>
      <h2 className="text-center my-2 font-bold text-2xl">All Books</h2>
      <table className="w-2/3 mx-auto my-10 text-center">
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
                <td className="border-2 border-gray-400">{index+1}</td>
                {/* <td className="border-2 border-gray-400">{id}</td> */}
                <td className="border-2 border-gray-400">{name}</td>
                <td className="border-2 border-gray-400">{description}</td>
                <td className="border-2 border-gray-400">
                 <Link to="/edit-book" state={{id, name, description}}>
                 <button className="bg-green-400 hover:bg-green-500 text-white py-1 px-4 rounded-lg transition ease-in-out duration-300 hover:scale-105 my-1 font-bold mr-10">
                    Edit
                  </button>
                 </Link>
                  <button onClick={()=>handleDeleteBook(id)} className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded-lg transition ease-in-out duration-300 hover:scale-105 my-1 font-bold">
                    Delete
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
