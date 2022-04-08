const initialState = {
  infoBanner: true,
}

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@Data/ToggleInfoBanner':
      return { ...state, infoBanner: !state.infoBanner }

    default:
      return state
  }
}

export default DataReducer
