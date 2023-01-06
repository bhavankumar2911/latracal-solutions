import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import StudentList from "./StudentList";

const Students = ({ students, setStudents }) => {
  const checkoutStudent = async (id) => {
    const date = new Date();
    const studentDoc = doc(db, "students", id);
    const checkout = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const updateData = {
      checkout,
    };

    await updateDoc(studentDoc, updateData);

    setStudents([
      ...students.map((student) => {
        if (student.id === id) return { ...student, checkout };
        return { ...student };
      }),
    ]);
  };

  return (
    <section className="students">
      {/* left */}
      <div className="left">
        <h2>Students in school</h2>
        <center>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Check-in Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <StudentList
                students={[...students.filter((student) => !student.checkout)]}
                checkoutStudent={checkoutStudent}
                present
              />
            </tbody>
          </table>
        </center>
      </div>
      {/* right */}
      <div className="right">
        <h2>Students left the school</h2>
        <center>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Check-out Time</th>
              </tr>
            </thead>
            <tbody>
              <StudentList
                students={[...students.filter((student) => student.checkout)]}
                checkoutStudent={checkoutStudent}
                present={false}
              />
            </tbody>
          </table>
        </center>
      </div>
    </section>
  );
};

export default Students;
