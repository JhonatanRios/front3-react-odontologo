export const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'GET_LIST':
      return {...state, data: action.payload}
    case 'GET_DENTIST':
      return {...state, dentistSelected: action.payload}
    case 'ADD_FAV':
      return {
        ...state, 
        favs: [...state.favs, action.payload]
      }
    case 'DELETE_FAV':
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
      return {...state, favs: filteredFavs}
  }
}