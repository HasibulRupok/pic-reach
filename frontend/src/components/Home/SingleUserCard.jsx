import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import UserModal from "./UserModal";

const SingleUserCard = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h4 className="my-2 text-gray-500">{user._id}</h4>
      <div className="flex flex-col justify-start items-center gap-x-2">
        <img src={user.image} className="userDP-card" alt="user image" />
        <h2 className="my-1 text-2xl font-bold px-3 py-1 bg-red-300 rounded-xl">
          {user.name}
        </h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-1">{user.address}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-1">{user.phone}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/users/edit/${user._id}`}>
          <FaUserEdit className="text-2xl text-cyan-400" />
        </Link>
        <Link to={`/users/delete/${user._id}`}>
          <MdDeleteForever className="text-2xl text-red-500" />
        </Link>
      </div>

      {showModal && (
        <UserModal user={user} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SingleUserCard;
{
  /* ; */
}
