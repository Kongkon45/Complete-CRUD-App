import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./booksSlice";
import Swal from "sweetalert2";

const AddBook = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const numberOfLength = useSelector((state) => state?.books?.books?.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfLength + 1, name, description };
    dispatch(addBook(book));
    navigate("/show-books");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <div>
      <h2 className="my-2 font-bold text-2xl text-center">Add Book</h2>
      <form
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        onSubmit={handleSubmit}
        className="border-2 shadow-lg rounded-lg p-10 w-1/3 mx-auto my-12"
      >
        <div>
          <label className="text-md font-bold" htmlFor="name">
            Name :{" "}
          </label>{" "}
          <br />
          <input
            className="border-2 rounded-lg py-1 px-2 my-2 w-full"
            placeholder="Enter your Name ..."
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-md font-bold" htmlFor="description">
            Description :{" "}
          </label>{" "}
          <br />
          <input
            className="border-2 rounded-lg py-1 px-2 my-2 w-full"
            placeholder="Enter your Description ..."
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-white py-1 px-4 rounded-lg transition ease-in-out duration-300 hover:scale-105 font-bold"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
