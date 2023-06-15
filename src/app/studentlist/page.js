import Link from "next/link";

export default function Studentlist() {
  const Users = [
    {
      name: "Deepak",
      rollNo: "123",
    },
    {
      name: "Yash",
      rollNo: "124",
    },
    {
      name: "Raj",
      rollNo: "125",
    },
    {
      name: "Rohan",
      rollNo: "126",
    },
    {
      name: "Puneet",
      rollNo: "127",
    },
    {
      name: "Vivek",
      rollNo: "128",
    },
    {
      name: "Aman",
      rollNo: "129",
    },
  ];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {Users.map((e) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>
              <Link href={"/studentlist/" + e.name + e.rollNo}>
                {e.name} {e.rollNo}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
