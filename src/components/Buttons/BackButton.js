import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <>
      <Link to="/dashboard" className="btn  btn-primary mt-2 text-center">
        Back
      </Link>
    </>
  );
}
