import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

function JobDetails() {
  const [form, setForm] = useState();
  const jobDetails = useSelector((state) => state.job.jobs);
  console.log(jobDetails);

  const params = useParams();
  const id = params.jobId;
  console.log(id);
  const job = jobDetails.find((item) => item.id === id);
  console.log(job);
  return (
    <>
      <div className="border-2  m-10 mx-1">
        <h1 className="flex justify-center font-bold underline text-2xl">
          JobDetails
        </h1>
        <div className="m-1 p-1">
          <div className="font-bold">{job.title}</div>
          <div className="font-thin text-zinc-400">
            {job.company.display_name}
          </div>
          <div>{job.location.area[0]}</div>
        </div>
        <br />
        <div className="p-2">
          About the job:
          <p>{job.description}</p>
        </div>
        <div className="flex justify-center m-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3
      rounded "
            onClick={() => {
              setForm(true);
            }}
          >
            Apply
          </button>
        </div>
      </div>
      {form && <Form />}
    </>
  );
}

export default JobDetails;
