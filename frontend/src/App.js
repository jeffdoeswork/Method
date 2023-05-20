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
import ProfilePage from './pages/ProfilePage';
import background from './background.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Methodmaker from './pages/Socialtific/MethodMaker';
import NewsFeed from './pages/NewsFeed';

function App() {
  const url = process.env.REACT_APP_URL
  console.log(`http://${ url }/api/token/`)
  return (
    <html>
      <div className="App">
        <Router>
          <AuthProvider>
            <Header/>
            <Routes>
              <Route element={<PrivateRoute />}> 
                <Route element={<ProfilePage />} path="/profile/:id" />  
              </Route>
              
              <Route path="/about" element={<HomePage />} /> 
              <Route path="/" element={<NewsFeed />} /> 

              <Route path="/socialtific" element={<Methodmaker />} /> 
              <Route path="/login" element={<LoginPage />} /> 
              <Route path="/register" element={<RegisterPage />} />  
              <Route path="/logout" element={<LogoutPage />} />  
            </Routes>
          </AuthProvider>
        </Router>

      </div>

    </html>
  );
}

export default App;
