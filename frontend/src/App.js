import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/UserAuth/LoginPage'
import Header from './components/Header'
import RegisterPage from './pages/UserAuth/RegisterPage';
import 'bootstrap/dist/css/bootstrap.css';
import LogoutPage from './pages/UserAuth/LogoutPage'
import ProfilePage from './pages/ProfilePage';
import background from './background.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Methodmaker from './pages/Socialtific/MethodMaker';
import NewsFeed from './pages/NewsFeed';
import Explore from './pages/Explore';

import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 576px)' })
  
  const contentStyle = isSmallScreen ? { width: '100%' } : { width: '100%', marginLeft: '200px' }

  return (
    <html>
      <div className="App">
        <Router>
          <AuthProvider>
            <div style={{ display: 'flex' }}>
              <Header/>
              <div style={contentStyle}> 
                <Routes>
                  <Route element={<PrivateRoute />}> 
                    <Route element={<ProfilePage />} path="/profile/:id" />  
                  </Route>

                  <Route path="/about" element={<HomePage />} /> 
                  <Route path="/" element={<NewsFeed />} /> 
                  <Route path="/explore" element={<Explore />} /> 
                  <Route path="/method-maker" element={<Methodmaker />} /> 
                  <Route path="/login" element={<LoginPage />} /> 
                  <Route path="/register" element={<RegisterPage />} />  
                  <Route path="/logout" element={<LogoutPage />} />  
                </Routes>
              </div>
            </div>
          </AuthProvider>
        </Router>
      </div>
    </html>
  );
}

export default App;
