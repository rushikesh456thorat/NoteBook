import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import ProfileButton from "../../lib/profilebutton";

const NavBar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <Link to="/" className=" font-semibold text-xl">
            Note<span className="text-blue-500">Book</span>
          </Link>
        </div>
        <div className=" navbar-center w-2/6">
          <SearchBar></SearchBar>
        </div>
        <div className="navbar-end">
          <ProfileButton></ProfileButton>
        </div>
      </div>
    </>
  );
};

export default NavBar;
