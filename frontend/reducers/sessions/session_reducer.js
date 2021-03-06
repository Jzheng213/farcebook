import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_PAIR } from '../../actions/user_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let currentUser;

  switch(action.type) {
  case RECEIVE_CURRENT_USER:

    currentUser = action.currentUser;
    return merge({}, { currentUser });

  case RECEIVE_PAIR:
    currentUser = action.currentUser;
    return merge({}, { currentUser});
  default:
    return state;
  }
};

export default sessionReducer;

//REfactor later
// newFriendIds = currentUser.slice()
// push action.user.id
// newCurrentUser.friend_ids
// return merge({}, state, {currentuser:{friendId: newFriendIds} })
