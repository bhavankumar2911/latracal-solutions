import "./App.css";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Students from "./components/Students";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const studentsReference = collection(db, "students");

  useEffect(() => {
    (async () => {
      const response = await getDocs(studentsReference);

      setStudents(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })();
  }, []);

  return (
    <main>
      <Container>
        <h1 className="page-title">Student Attendance System ✅</h1>
        {/* hero section */}
        <Hero students={students} setStudents={setStudents} />

        {/* current students list */}
        <Students students={students} setStudents={setStudents} />
      </Container>
    </main>
  );
}

export default App;
