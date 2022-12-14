import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupUsers from './pages/auth/SignupUsers';
import SignupCompanies from './pages/auth/SignupCompanies';
import Login from './pages/auth/login/Login';
import CompanyHomepage from './pages/company_pages/CompanyHomepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<SignupUsers />} />
            <Route path="/signup/companies" element={<SignupCompanies />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/company">
              <Route index element={<CompanyHomepage />} />
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
