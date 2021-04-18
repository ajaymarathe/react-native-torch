const initialState = {
  switchState: false,
  ButtonState: false,
  flashStatus: 'OFF',
  PowerButtonBgColor: '#fff',
  Button2Bg: '#FD7F02',
  Button3Bg: '#826E5A',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ON':
      return {
        ...state,
        switchState: true,
        ButtonState: true,
        flashStatus: 'ON',
        PowerButtonBgColor: '#fff',
      };
    case 'OFF':
      return {
        ...state,
        switchState: false,
        ButtonState: false,
        flashStatus: 'OFF',
        PowerButtonBgColor: '#FD7F02',
      };
    default:
      return state;
  }
}

export default reducer;
