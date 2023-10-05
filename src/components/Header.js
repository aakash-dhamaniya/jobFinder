import React from "react";
import { jobAction } from "../store/jobsData";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.job.auth);
  function logoutHandler() {
    dispatch(jobAction.authentication(false));
    localStorage.setItem("auth", false);
  }
  return (
    <header className="bg-white">
      <nav
        className="bg-blue-500
       mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8 border-2"
        aria-label="Global"
      >
        <div className="  lg:flex lg:gap-x-12 text-white">
          <h1>Find4U</h1>
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end ">
          {auth && (
            <button
              onClick={logoutHandler}
              className="text-sm font-semibold leading-6 text-white"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
