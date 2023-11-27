import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handelPost = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("image", image);
    // const newUser = {
    //   name,
    //   phone,
    //   address,
    //   image,
    // };
    axios
      .post("http://localhost:5555/users", formData)
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
      <h1 className="text-4xl">Create a new user</h1>

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
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="w-full text-center ">
        <button
          className="w-fit px-6 py-2 rounded bg-sky-300 hover:bg-sky-400 inline-block"
          onClick={handelPost}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default AddUser;
