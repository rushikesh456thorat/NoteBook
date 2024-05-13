import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const ProfileButton = () => {
  const {authUser} = useAuthContext();

  // eslint-disable-next-line no-unused-vars
  const {loading,logout} = useLogout();

  return (
    <>
      <div className="dropdown">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="avatar btn btn-sm btn-circle m-1">
            <div className="w-10 rounded-full">
              <img src={authUser.profilePic} />
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu bg-base-100 rounded-box w-80  p-5  shadow-xl"
          >
            <div className="flex justify-between items-baseline ">
              <div className=" font-semibold">
                Note<span className="text-blue-500">Book</span>
              </div>
              <div className=" text-neutral-content">
                <button className="btn btn-sm btn-primary" onClick={logout}>Log Out</button>
              </div>
            </div>
            <div className=" flex ">
              <div className="avatar mt-6  ">
                <div className="w-16 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                  <img src={authUser.profilePic} />
                </div>
              </div>
              <div className="text-neutral-content items-center ml-4 mt-5">
                <h2 className=" text-neutral-content text-lg font-semibold">
                  {authUser.username}
                </h2>
                <div className="text-sm text-neutral-content">
                {authUser.email}
                </div>
                <Link to='/password/change' className="link  link-primary">Change Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileButton;
