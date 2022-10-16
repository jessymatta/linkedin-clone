import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupUsers from './pages/auth/SignupUsers';
import SignupCompanies from './pages/auth/SignupCompanies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<SignupUsers />} />
            <Route path="companies" element={<SignupCompanies />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
