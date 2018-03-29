import {
  TOGGLE_PROF_PIC_MODAL,
  TOGGLE_POST_MODAL,
  TOGGLE_ERROR_MODAL

} from '../actions/modal_actions';

import merge from 'lodash/merge';

const defaultState = {
  profPicModal: false,
  postModalFocused: false,
  errorModal: false
};

const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type){
  case TOGGLE_PROF_PIC_MODAL:
    return merge({}, state, { profPicModal: !state.profPicModal});
  case TOGGLE_POST_MODAL:
    return merge({}, state, { postModalFocused: !state.postModalFocused});
  case TOGGLE_ERROR_MODAL:
    return merge({}, state, { errorModal: !state.errorModal});
  default:
    return state;
  }
};

export default modalReducer;
