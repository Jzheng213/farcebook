import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const fetchPosts = (wallOwnerId) => dispatch => {
  return APIUtil.fetchPosts(wallOwnerId).then((postsFromServer) => {
    return dispatch(receivePosts(postsFromServer));
  });
};

export const fetchFriendsPosts = (currentUserId) => dispatch => {
  return APIUtil.fetchFriendsPosts(currentUserId).then((postsFromServer) => {
    return dispatch(receivePosts(postsFromServer));
  });
};

export const fetchPost = (id) => dispatch => {
  return APIUtil.fetchPost(id).then((postFromServer) => {
    return dispatch(receivePost(postFromServer));
  });
};

export const createPost = (post) => dispatch => {
  return APIUtil.createPost(post).then((postFromServer) => {
    return dispatch(receivePost(postFromServer));
  });
};
