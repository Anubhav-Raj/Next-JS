"use client";
import { useRouter } from "next/navigation";
const Loginstudent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Student</h1>
      <button onClick={() => router.push("/login")}> Go Back</button>
    </div>
  );
};
export default Loginstudent;
