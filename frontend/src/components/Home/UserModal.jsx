import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const UserModal = ({ user, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()} //do not close the modal if i click inside the modal
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex justify-start items-center gap-x-2">
          <h2 className="my-1 text-2xl font-bold px-3 py-1 bg-red-300 rounded-xl">
            {user.name}
          </h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <h2 className="my-1">Address: {user.address}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <h2 className="my-1">Phone: {user.phone}</h2>
        </div>
        <p className="mt-4">Anything You want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default UserModal;
