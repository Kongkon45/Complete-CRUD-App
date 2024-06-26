import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./booksSlice";
import Swal from "sweetalert2";

const EditBook = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [name, setName] = useState(location.state.name);
  const [description, setDescription] = useState(location.state.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const book = { id, name, description };
        dispatch(updateBook(book));
        navigate("/show-books");
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div>
      <h2 className="my-2 font-bold text-2xl text-center">Update Book</h2>
      <form
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        onSubmit={handleSubmit}
        className="border-2 shadow-lg rounded-lg p-10 w-1/3 mx-auto"
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
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
