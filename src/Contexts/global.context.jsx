import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import { reducer } from "../reducers/reducer"

export const ContextGlobal = createContext()

export const initialState = {
  theme: localStorage.getItem('theme') || "",
  data: [],
  dentistSelected: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [localTheme, setLocalTheme] = useState(initialState.theme)
  const url = 'https://jsonplaceholder.typicode.com/users'

  // Establecer tema
  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
    setLocalTheme(theme);
  };

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = state.theme === 'dark' ? '' : 'dark';
    setTheme(newTheme)
  }

  // Manejo de tema local
  useEffect(() => {
    localTheme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    localStorage.setItem('theme', localTheme);
  }, [localTheme])

  // Obtener valores de la API
  useEffect(() => {
    axios(url)
      .then(res => {
        dispatch({ type: 'GET_LIST', payload: res.data })
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const contextValue = {
    state,
    toggleTheme,
    dispatch
  }

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)