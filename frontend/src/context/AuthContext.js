import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    const url = process.env.REACT_APP_URL

    const navigate = useNavigate();

    let loginUser = async (e )=> {
        e.preventDefault();
        try {
            let response = await fetch(`http://${url}/api/token/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
            });
            let data = await response.json();
            
            if(response.status === 200){
                setAuthTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem('authTokens', JSON.stringify(data));
                navigate('/');
            }else{
                // Handle different types of errors
                if (data.detail) {
                    alert(`Error: ${data.detail}`);
                } else {
                    alert('Something went wrong!');
                }
            }
        } catch (error) {
            // Handle fetch errors
            alert('An error occurred while communicating with the API');
        }
    };


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }


    let updateToken = async ()=> {
        const url = process.env.REACT_APP_URL
        let response = await fetch(`http://${url}/api/token/refresh/` , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
