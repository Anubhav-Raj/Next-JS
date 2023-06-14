import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login_menu ">
        <li className="login_list">
          <h4>About Navbar</h4>
        </li>
        <li className="login_list">
          <Link href="/about ">About Main</Link>
        </li>
        <li className="login_list">
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
        <li className="login_list">
          <Link href="/about/aboutteacher">About Teacher</Link>
        </li>
      </ul>
      <h1 className="heading"> Commom Layout For About Screen</h1>
      {children}
    </div>
  );
}
