import { useState, useEffect, createContext } from "react";
import { api } from "./services/api";

export const InfoUserContext = createContext([]);

export const InfoUserProvider = ({ children }) => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('PhilipeAnderson')
      .then(response => setRepositories(response.data))
    },[])

  return (
    <InfoUserContext.Provider value={repositories}>
      { children }
    </InfoUserContext.Provider>
  ) 
}