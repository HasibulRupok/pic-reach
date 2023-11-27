import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/users/${id}`)
      .then((response) => {
        setLoading(false);
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
        setAddress(response.data.data.address);
        setImage(response.data.data.image);
      })
      .catch((error) => {
        setLoading(false);
        alert(`"fetch error", message: ${error}`);
        console.log(error);
      });
  }, []);

  const handelPutRequest = () => {
    const newUser = {
      name,
      phone,
      address,
      image,
    };
    axios
      .put(`http://localhost:5555/users/${id}`, newUser)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error occurred:", error);
        alert(error);
      });
  };
  return (
    <section className="p-4">
      <h1 className="text-4xl">Edit an user</h1>

      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="w-full text-center ">
        <button
          className="w-fit px-6 py-2 rounded bg-sky-300 hover:bg-sky-400 inline-block"
          onClick={handelPutRequest}
        >
          Edit
        </button>
      </div>
    </section>
  );
};

export default Edit;
