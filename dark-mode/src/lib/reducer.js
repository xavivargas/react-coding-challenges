const actions = require("./actions-constants");

module.exports = (state, action) => {
  switch (action.type) {
    case actions.THEME_TOOGLE: {
      state.theme_mode = action.playload.mode; 
      break;
    }
    case actions.SAVE_FORM: { 
      break;
    }
    case actions.SUBMIT_FORM: { 
      break;
    } 
    default: {
      break;
    }
  }
  return { ...state };
};
