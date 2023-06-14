"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const curr_path = usePathname(); // it use to find  current path ( url) of page
  // console.log(curr_path);
  return (
    <div>
      {curr_path !== "/login/loginteacher" ? (
        <div>
          <ul className="login_menu">
            <li className="login_list">
              <h4>Login Navbar</h4>
            </li>
            <li className="login_list">
              <Link href="/login ">Login Main</Link>
            </li>
            <li className="login_list">
              <Link href="/login/loginstudent ">Login Student</Link>
            </li>
            <li className="login_list">
              <Link href="/login/loginteacher">Login Teacher</Link>
            </li>
          </ul>
          <h1 className="heading"> Commom Layout For Login Screen</h1>
        </div>
      ) : null}

      {children}
    </div>
  );
}
