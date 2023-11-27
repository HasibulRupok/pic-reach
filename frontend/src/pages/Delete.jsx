import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const handleDeleteRequest = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/users/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Error, please check the console");
      });
  };
  const returnHome = () => {
    navigate("/");
  };
  return (
    <section className="flex justify-center h-screen items-center">
      <div className="flex flex-col px-6 py-4 items-center shadow-lg w-fit">
        <h1 className="text-3xl">Delete User</h1>

        {loading ? <Spinner /> : ""}

        <h3 className="text-2xl">
          Are you sure you want to delete this user ?
        </h3>
        <div className="flex justify-between mt-1">
          <button
            className="text-white rounded px-4 py-2 bg-red-600 me-1 hover:bg-red-700"
            onClick={handleDeleteRequest}
          >
            Yes, Delete this
          </button>
          <button
            className="text-white rounded px-4 py-2 bg-green-600 hover:bg-green-700"
            onClick={returnHome}
          >
            Cancle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delete;
