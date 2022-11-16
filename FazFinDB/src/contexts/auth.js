import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [fazID, setFazID] = useState();
  function FazendaID(Fazid) {
    setFazID(Fazid);
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
  const [precoCF, SetPrecoCF] = useState();
  function PrecoCF(precoCF) {
    SetPrecoCF(precoCF);
  }
  const [listaAli, SetListaAli] = useState();
  function ListaAli(dataGas) {
    SetListaAli(dataGas);
  }
  return (
    <AuthContext.Provider
      value={{
        FazendaID,
        fazID,
        RebanhoID,
        rebID,
        FazendaProp,
        fazProp,
        PrecoCF,
        precoCF,
        listaAli,
        ListaAli,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
