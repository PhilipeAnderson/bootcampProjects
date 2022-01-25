import { useState, useEffect, createContext } from "react";
import { api } from "./services/api";

export const InfoUserContext = createContext([]);

export const InfoUserProvider = ({ children, isNewUser }) => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get(isNewUser)
      .then(response => setRepositories(response.data))
    },[repositories])

  return (
    <InfoUserContext.Provider value={repositories}>
      { children }
    </InfoUserContext.Provider>
  ) 
}