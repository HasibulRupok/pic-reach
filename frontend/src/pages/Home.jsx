import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import UserTable from "../components/Home/UserTable";
import UserCard from "../components/Home/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/users")
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
        // console.log(response.data.data);
        // console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center px-4">
        <h2 className="text-4xl font-bold">User Info</h2>
        <Link to="/users/create" className="text-2xl">
          <IoMdPersonAdd />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType == "table" ? (
        <UserTable users={users} />
      ) : (
        <UserCard users={users} />
      )}
    </section>
  );
};

export default Home;
