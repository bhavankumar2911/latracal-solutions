import React, { Fragment } from "react";

const StudentList = ({ students, checkoutStudent, present }) => {
  return (
    <Fragment>
      {students.map((student, index) => {
        return (
          <tr key={index}>
            <td>{student["name"]}</td>
            <td className="checkin-time">
              {student[present ? "checkin" : "checkout"]}
            </td>
            {present && (
              <td>
                <button onClick={() => checkoutStudent(student["id"])}>
                  Checkout
                </button>
              </td>
            )}
          </tr>
        );
      })}
    </Fragment>
  );
};

export default StudentList;
