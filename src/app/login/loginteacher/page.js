"use client";
import { useRouter } from "next/navigation";
const Loginteacher = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Teacher</h1>
      <button onClick={() => router.push("/login")}> Go Back</button>
    </div>
  );
};
export default Loginteacher;
