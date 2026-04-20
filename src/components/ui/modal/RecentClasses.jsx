import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import classDataBaseUrl from "../../../mocked DataBase/classDataBase.json?url";
import { Link } from "react-router-dom";

function RecentClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(classDataBaseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch class records");
        }

        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching class records:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <>
      {classes.map((classItem, index) => (
        <div
          className="recent-classes-div"
          key={`${classItem.code}-${classItem.title}-${index}`}
        >
          <div className="recent-class-info-div">
            <div className="class-info-top-content">
              <div className="class-title">{classItem.title}</div>
              <div className="class-code">{classItem.code}</div>
            </div>
            <div className="class-info-bottom-content">
              <div className="class-instructor">
                <IoMdPerson className="class-info-icon" />
                <p>Instructor: {classItem.instructor}</p>
              </div>
              <div className="class-schedule">
                <FiClock className="class-info-icon" />
                <p>Schedule: {classItem.schedule}</p>
              </div>
              <div className="class-students">
                <BsPeople className="class-info-icon" />
                <p>Students: {classItem.students} Students</p>
              </div>
            </div>
          </div>
          <div className="recent-class-btn">
            <Link to={`/admin/classes/view-class-details`}>
              View Class <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecentClasses;
