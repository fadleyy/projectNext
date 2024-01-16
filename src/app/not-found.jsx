import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>This page does not exist.</p>
      <Link href={"/"}>Go Back</Link>
    </div>
  );
};
export default NotFound;
