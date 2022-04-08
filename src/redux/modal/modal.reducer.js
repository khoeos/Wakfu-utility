const initialState = {
  open: false,
  filter: null,
  gotChild: false,
}

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@Modal/ToggleModal':
      return { ...state, open: !state.open, ...action.payload }
    default:
      return state
  }
}

export default ModalReducer
