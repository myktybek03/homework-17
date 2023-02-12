import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import SideBar from "./components/sidebar/Sidebar"
import Courses from "./pages/Courses"
import Anouncements from "./pages/Anouncements"
import Notifications from "./pages/Notifications"
import Schedule from "./pages/Schedule"
import Materials from "./pages/materials/Materials"
import Students from "./pages/students/Students"
import Ratings from "./pages/ratings/Ratings"
import Detail from "./pages/materials/detail/Detail"
import Submitted from "./pages/materials/detail/Submitted"
import Waiting from "./pages/materials/detail/Waiting"
import Late from "./pages/materials/detail/Late"
import StudentsDetail from "./pages/students/StudentsDetail"
import "./App.css"

const App = () => {
  return (
    <HashRouter>
      <SideBar>
        <Routes>
          <Route path="/courses/" element={<Courses />}>
            <Route path="materials/" element={<Materials />} />
            <Route path="materials/:materialId/detail" element={<Detail />}>
              <Route path="submitted" element={<Submitted />} />
              <Route path="waiting" element={<Waiting />} />
              <Route path="late" element={<Late />} />
            </Route>
            <Route path="students" element={<Students />} />
            <Route
              path="students/:studentId/detail"
              element={<StudentsDetail />}
            />
            <Route path="ratings" element={<Ratings />} />
          </Route>
          <Route path="/anouncements" element={<Anouncements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </SideBar>
    </HashRouter>
  )
}

export default App
