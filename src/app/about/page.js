"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/about/" + page);
  };
  return (
    <div>
      <h1>About Page</h1>
      <h3> Routing By Link </h3>
      <br></br>
      <Link href="/"> Go Back</Link>
      <h3> Routing By Navigation </h3>
      <br></br>
      <button onClick={() => router.push("/")}> Go Back</button>
      <br></br>
      <br></br>
      <button onClick={() => navigate("aboutteacher")}>About Teacher</button>
      <br></br>
      <br></br>
      <button onClick={() => navigate("aboutstudent")}>About Student</button>
    </div>
  );
};

export default About;
