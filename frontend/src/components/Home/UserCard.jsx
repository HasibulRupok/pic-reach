import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleUserCard from "./SingleUserCard";

const UserCard = ({ users }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => {
        return <SingleUserCard key={user._id} user={user} />;
      })}
    </div>
    // <h1>hello</h1>
  );
};

export default UserCard;
