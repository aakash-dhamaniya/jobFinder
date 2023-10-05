import React from "react";
import { useNavigate } from "react-router-dom";

function JobLIst(props) {
  // console.log("jobList", props.job.title);
  const navigate = useNavigate();
  function VeiwHandlert(id) {
    // console.log(id);
    navigate(`/jobsDetails/${id}`);
  }
  return (
    <>
      {
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {props.job.company.display_name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {props.job.title}
              </p>
            </div>
          </div>
          <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded"
              onClick={() => {
                VeiwHandlert(props.job.id);
              }}
            >
              View
            </button>
          </div>
        </li>
      }
    </>
  );
}

export default JobLIst;
