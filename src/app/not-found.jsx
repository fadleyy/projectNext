import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This page does not exist.</p>
      <Link href={"/"}>Go Back</Link>
    </div>
  );
};
export default NotFound;
