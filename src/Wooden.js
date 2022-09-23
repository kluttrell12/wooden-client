import { useState } from "react"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"


export const Wooden = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
  const [userId, setUserIdState] = useState(localStorage.getItem('user_id'))
  const [staffBool, setStaffBool] = useState(localStorage.getItem('is_staff'))

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  const setUserId = (userId) => {
    localStorage.setItem('user_id', userId)
    setUserIdState(userId)
  }

  const setIsStaff = (isStaffBoolean) => {
    localStorage.setItem('is_staff', isStaffBoolean)
    setStaffBool(isStaffBoolean)
  }

  return <>
    <NavBar token={token} setToken={setToken} />
    <ApplicationViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} staffBool={staffBool} setStaffBool={setIsStaff}/>
  </>
}
