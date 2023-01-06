import { addDoc, collection } from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import { db } from "../firebase";

const Form = ({ students, setStudents }) => {
  const studentsCollection = collection(db, "students");

  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  const [form, setForm] = useState({ name: "", roll_no: "" });

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      });
    }, 1000);
  }, []);

  const checkinStudent = async (e) => {
    e.preventDefault();

    if (!form.name || !form.roll_no) return;

    // save
    const data = {
      ...form,
      checkin: `${time.hour}:${time.minute}:${time.second}`,
      checkout: "",
    };
    const res = await addDoc(studentsCollection, data);

    setStudents([{ ...data, id: res.id }, ...students]);

    setForm({ name: "", roll_no: "" });
  };

  return (
    <Fragment>
      <h2 className="form-title">Mark Attendence</h2>
      <form className="checkin-form" onSubmit={checkinStudent}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <input
          type="number"
          name="roll-number"
          id="roll-number"
          placeholder="Roll number"
          value={form.roll_no}
          onChange={(e) => setForm({ ...form, roll_no: e.target.value })}
        />

        <input type="submit" value="Check In" />
        <br />
        <br />
        <center>
          <small>
            Check in time is {time.hour}:{time.minute}:{time.second}
          </small>
        </center>
      </form>
    </Fragment>
  );
};

export default Form;
