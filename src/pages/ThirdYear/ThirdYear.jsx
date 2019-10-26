import React from "react";
import { Link } from "react-router-dom";

function ThirdYear() {
  const courses = [
    "CS3100",
    "CS3200",
    "CS3201",
    "CS3202",
    "CS3300",
    "CS3301",
    "CS3401",
    "CS3550",
    "CS3700",
    "CS3710",
    "CS3718",
    "CS3719",
    "CS3731",
    "CS3753"
  ];
  const list = courses.map(item => (
    <li className="list-group-item">
      <Link to = {`/${item}`}>{item}</Link>
    </li>
  ));
  return (
    <div>
      <ul className="list-group">{list}</ul>
    </div>
  );
}

export default ThirdYear;
