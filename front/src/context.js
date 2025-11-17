import { createContext, useState } from "react";
// "https://anychat-back-end-production.up.railway.app"
const b = "http://localhost:8000";
export const MyContext = createContext()


export const MyContextProvider = ({ children }) => {
  const [token ,setToken]= useState(localStorage.getItem('token'));


  return (
    <MyContext.Provider value={{ BASE_URL:b,token:token,setToken }}>
      {children}
    </MyContext.Provider>
  );
};