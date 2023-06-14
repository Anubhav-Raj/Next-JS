"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1> Login Page</h1>
      <h3> Routing By Link </h3>
      <br></br>
      <Link href="/"> Go Back</Link>
      <br></br>
      <br></br>
      <h3> Routing By Navigation </h3>
      <br></br>
      <br></br>
      <button onClick={() => router.push("/")}> Go Back </button>

      <br></br>
      <br></br>
      <button onClick={() => navigate("loginteacher")}>Login Teacher</button>
      <br></br>
      <br></br>
      <button onClick={() => navigate("loginstudent")}>Login Student</button>
    </div>
  );
};

export default Login;
