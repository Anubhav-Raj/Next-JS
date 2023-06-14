"use client";
import { useRouter } from "next/navigation";
const Aboutteacher = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Teacher</h1>
      <button onClick={() => router.push("/about")}> Go Back</button>
    </div>
  );
};
export default Aboutteacher;
