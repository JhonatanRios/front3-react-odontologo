import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "../reducers/reducer"
import axios from "axios"

export const ContextGlobal = createContext()

export const initialState = {
  theme: localStorage.getItem('theme') || "",
  data: [],
  dataSelect: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [localTheme, setLocalTheme] = useState(initialState.theme)

  const url = 'https://jsonplaceholder.typicode.com/users'

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
    setLocalTheme(theme);
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    axios(url)
    .then(res => {
      // console.log(res.data)
      dispatch({type: 'GET_LIST', payload: res.data})
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
  }, [])

  useEffect(() => {
    localTheme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [localTheme])

  const toggleTheme = () => {
    const newTheme = state.theme === 'dark' ? '' : 'dark';
    setTheme(newTheme)
  }

  const contextValue = {
    state,
    toggleTheme
  }

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)