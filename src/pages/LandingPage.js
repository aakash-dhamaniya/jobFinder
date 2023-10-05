import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlljobs } from "../store/jobsData";
import JobLIst from "../components/JobLIst";
import LoadingState from "../components/LoadingState";
function LandingPage() {
  const [isSerach, setIsSerach] = useState(false);
  const data = useSelector((state) => state.job.jobs);
  const loader = useSelector((state) => state.job.loading);
  // console.log(data);
  const inputRef = useRef();
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    setIsSerach(true);
    const value = inputRef.current.value;
    dispatch(getAlljobs(value));
  }
  const jobsResult = data.map((item) => {
    return <JobLIst job={item} key={item.id} />;
  });
  console.log(jobsResult);
  return (
    <div className="max-w-full flex-col  ">
      <form
        onSubmit={submitHandler}
        className="mb-1  flex  flex-col sm:flex-row justify-center p-2 items-center gap-1 "
      >
        <input
          ref={inputRef}
          className=" w-full sm:w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Type language to find job"
        />
        <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded">
          Find
        </button>
      </form>
      {isSerach && (
        <ul className="max-w-3xl m-auto space-y-1 text-gray-500 list-inside dark:text-gray-400 border-2 rounded-lg p-2 bg-fuchsia-50 ">
          {loader ? (
            <LoadingState />
          ) : jobsResult.length > 0 ? (
            jobsResult
          ) : (
            "no jobs found"
          )}
        </ul>
      )}
    </div>
  );
}

export default LandingPage;
