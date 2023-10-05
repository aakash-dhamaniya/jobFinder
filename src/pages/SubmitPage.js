import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SubmitPage() {
  const usersData = useSelector((state) => state.job.application);
  console.log(usersData);
  return (
    <div className="p-2">
      <div className="max-w-3xl m-auto border-2">
        <div className="p-2 flex justify-center underline font-bold text-2xl">
          Application Preview{" "}
        </div>
        <div className="p-2">
          <label>Name: {usersData.name}</label>
        </div>
        <div className="p-2">
          <label>Email id: {usersData.email}</label>
        </div>
        <div className="p-2">
          <label>Cover Letter Note: {usersData.cover}</label>
        </div>
        <div className="p-1 text-2xl flex justify-center text-green-500 ">
          <p>Your application has been submitted</p>
        </div>
        <div className="p-2 underline text-blue-600">
          <a href="/landingPage">click here to apply more</a>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
