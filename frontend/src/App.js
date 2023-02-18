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
import background from './background.png'
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Socialtific from './pages/Socialtific/Socialtific';

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
              <Route element={<HomePage url={url}/>} path="/" exact/>
              <Route element={<PrivateRoute />}> 
                <Route element={<Freedomistan />} path="/pledge/:id" />  
              </Route>
              <Route path="/socialtific" element={<Socialtific />} /> 
              <Route path="/login" element={<LoginPage />} /> 
              <Route path="/register" element={<RegisterPage />} />  
              <Route path="/logout" element={<LogoutPage />} />  
            </Routes>
          </AuthProvider>
        </Router>

      </div>

      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col sm={5}></Col>
          <Col sm={1}>
            <SocialIcon style={{verticalAlign: 'middle'}} url="https://twitter.com/Socialtific" fgColor='white' />
          </Col>
          <Col sm={1}>
            <SocialIcon style={{verticalAlign: 'middle'}} url="https://www.youtube.com/@socialmethod" fgColor='white' />
          </Col>
          <Col sm={5}></Col>
        </Row>
        </Container>
    </html>
  );
}

export default App;
