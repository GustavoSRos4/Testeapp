import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [fazID, setFazID] = useState();
  function FazendaID(Fazid) {
    setFazID(Fazid);
  }
  const [rebID, setRebID] = useState();
  function RebanhoID(Rebid) {
    setRebID(Rebid);
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
  const [listaLeite, SetListaLeite] = useState();
  function ListaLeite(dataLeite) {
    SetListaLeite(dataLeite);
  }
  const [precoLeite, SetPrecoLeite] = useState();
  function PrecoLeite(precoLeite) {
    SetPrecoLeite(precoLeite);
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
        ListaLeite,
        listaLeite,
        PrecoLeite,
        precoLeite
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
