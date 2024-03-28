export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      localStorage.setItem('theme', action.payload)
      return { ...state, theme: action.payload }
    case 'GET_LIST':
      return { ...state, data: action.payload }
    case 'GET_DENTIST':
      return { ...state, dentistSelected: action.payload }
    case 'ADD_FAV':
      const newFavsAdd = [...state.favs, action.payload]
      localStorage.setItem('favs', JSON.stringify(newFavsAdd))
      return { ...state, favs: newFavsAdd }
    case 'DELETE_FAV':
      const filteredFavsDelete = state.favs.filter(fav => fav.id !== action.payload)
      localStorage.setItem('favs', JSON.stringify(filteredFavsDelete))
      return { ...state, favs: filteredFavsDelete }
    default:
      return state
  }
}