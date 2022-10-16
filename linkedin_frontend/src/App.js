import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Routes>

          <Route path="/">

            <Route index element={<Login />} />

            <Route path="admin">
              <Route index element={<AdminDashboardInstructors />} />
              <Route path="students" element={<AdminDashboardStudents />} />
              <Route path="courses" element={<AdminDashboardCourses />} />
              <Route path="add_instructor" element={<AdminAddInstructor/>} />
              <Route path="add_student" element={<AdminAddStudent/>} />
              <Route path="add_course" element={<AdminAddCourse/>} />
            </Route>

            <Route path="instructor">
              <Route index element={<InstructorDashboardStudents />} />
              <Route path="add_student" element={<InstructorAddStudent/>} />
              <Route path="all_assignments" element={<InstructorAllAssign/>} />
              <Route path="add_assignment" element={<InstructorAddAssign/>} />

              <Route path="all_announcements" element={<InstructorAllAnnoun/>} />

              <Route path="add_announcements" element={<InstructorAddAnnouncement/>} />
            </Route>

            <Route path="student">
              <Route index element={<StudentDashboard />} />
            </Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
