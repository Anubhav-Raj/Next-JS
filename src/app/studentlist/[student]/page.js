"use client";
export default function Studentdetails({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h3>name:{params.student}</h3>
    </div>
  );
}
