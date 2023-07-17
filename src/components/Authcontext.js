import React ,{useState} from "react";

export const AuthContext = React.createContext()

export default function AuthProvider(props) {
  return (
    <AuthContext.Provider  >
        {props.children}
    </AuthContext.Provider>
  )
}

