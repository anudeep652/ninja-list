import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h1>That page cannot be found</h1>
      <p>
        Go back to the <Link href={"/"}>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
