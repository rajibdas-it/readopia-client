import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

export default function Main() {
  return (
    <div className="max-w-[1200px] mx-auto bg-[#fbf4e9]">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-secondary">
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
            <div className="flex-1 px-2 mx-2 text-2xl font-bold">Readopia</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <Navbar />
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <Navbar />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}