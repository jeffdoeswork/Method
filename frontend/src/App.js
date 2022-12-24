import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.css';
import LogoutPage from './pages/LogoutPage'
import Freedomistan from './pages/Freedomistan'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          <Routes>
              <Route element={<PrivateRoute />}> 
                  <Route element={<HomePage />} path="/" exact/>
                  <Route element={<Freedomistan />} path="/pledge" exact/>  
              </Route>
              <Route path="/login" element={<LoginPage />} /> 
              <Route path="/register" element={<RegisterPage />} />  
              <Route path="/logout" element={<LogoutPage />} />  
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
