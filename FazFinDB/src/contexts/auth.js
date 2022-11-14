import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [fazID, setFazID] = useState({});
  function FazendaID(Fazid) {
    setFazID({
      Fazid: Fazid,
    });
  }
  const [rebID, setRebID] = useState({});
  function RebanhoID(Rebid) {
    setRebID({
      Rebid: Rebid,
    });
  }
  const [fazProp, setFazProp] = useState({});
  function FazendaProp(FazProp) {
    setFazProp({
      FazProp: FazProp,
    });
  }
  return (
    <AuthContext.Provider value={{FazendaID,fazID,RebanhoID,rebID,FazendaProp,fazProp}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
