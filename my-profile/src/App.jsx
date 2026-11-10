
import StudentCard from "./components/StudentCard";

function App() {
  const student = {
    name: "Ala'a Jamal",
    university: "Islamic University Of Gaza",
    degree: "Master Of Multimedia",
    course: "React JS",
    skills: ["JavaScript", "React", "Node.js"]
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <StudentCard student={student}>
         Passionate about technology and creative digital experiences.
      </StudentCard>
    </div>
  );
}

export default App;
