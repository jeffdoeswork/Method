import React, {useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'

const LogoutPage = () => {
let {logoutUser} = useContext(AuthContext)

useEffect(()=> {
    logoutUser()
}, [])

  return (
    <div>

    </div>
  )
}

export default LogoutPage
