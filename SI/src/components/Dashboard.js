import React from "react";
import Card from "./Card.js";
import { DashboardContainer } from "../style.js"; // Add `.js` extension


const courses = [
  { title: "Total Hospitals", term: "10", color: "green" },
  { title: "List of Rooms", term: "20", color: "grey" },
  { title: "History", term: "...", color: "grey" },
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Hello Deepanshu.</h1>
      <div className="grid">
        {courses.map((course, index) => (
          <Card key={index} title={course.title} term={course.term} color={course.color} />
        ))}
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
