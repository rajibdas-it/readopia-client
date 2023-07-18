import Footer from "../shared/Footer";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../Redux/app/hook";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { setUser } from "../Redux/features/user/userSlice";
import { useState, FormEvent } from "react";
import { setSearchValue } from "../Redux/features/filter/filterSlice";

export default function Main() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchVlaue] = useState("");
  //console.log("before submit", searchValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue(searchValue));
  };
  //console.log("after submit", searchValue);

  const handleLogout = () => {
    signOut(auth);
    dispatch(setUser(null));
    // dispatch(setIsLoading(false));
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="bg-primary">
          <div className="max-w-[1400px] mx-auto navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 uppercase font-extrabold text-2xl">
              <Link to="/">Readopia</Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-lg">
                {/* Navbar menu content here */}
                <Navbar />
              </ul>
            </div>
            <div className="flex-none gap-2">
              <form className="form-control w-60" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchVlaue(e.target.value)}
                    className="input input-bordered w-24 md:w-auto"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary absolute top-0 right-0 rounded-l-none"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
              {/* <form className="form-control" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchVlaue(e.target.value)}
                  className="input input-bordered w-24 md:w-auto"
                />
              </form> */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {user.email ? (
                    <>
                      <li>
                        <Link to="/add-new-book">Add New Book</Link>
                      </li>
                      <li onClick={handleLogout}>
                        <a>Logout</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Signup</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <Navbar />
        </ul>
      </div>
    </div>
  );
}
