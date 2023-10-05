import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { jobAction } from "../store/jobsData";
import { useNavigate } from "react-router-dom";
function Form() {
  const dispatch = useDispatch();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const coverRef = useRef();
  const resumeRef = useRef();
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    console.log(resumeRef.current.value);
    dispatch(
      jobAction.StoreApplication({
        name: fnameRef.current.value,
        lastName: lnameRef.current.value,
        email: emailRef.current.value,
        cover: coverRef.current.value,
        resume: resumeRef.current.value,
      })
    );
    navigate("/submit");
  }
  return (
    <form className="w-full max-w-full p-1" onSubmit={submitHandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            ref={fnameRef}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            ref={lnameRef}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-email"
          >
            Email Id
          </label>
          <input
            ref={emailRef}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Cover"
          >
            Cover Letter Note
          </label>
          <textarea
            ref={coverRef}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Cover"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="file"
          >
            Upload your resume
          </label>
          <input
            ref={resumeRef}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="file"
            type="file"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <div className="w-full border-2 flex justify-center">
          <button
            className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3
      rounded flex justify-center"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
