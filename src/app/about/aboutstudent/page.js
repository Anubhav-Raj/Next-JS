"use client";
import { useRouter } from "next/navigation";
const Aboutstudent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Student</h1>
      <button onClick={() => router.push("/about")}> Go Back</button>
    </div>
  );
};
export default Aboutstudent;
