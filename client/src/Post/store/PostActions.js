import callApi, { extractErrorMessage } from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POST_ERROR = 'CLEAR_POST_ERROR';

// Export Actions
export function clearPostError() {
  return {
    type: CLEAR_POST_ERROR
  };
}

export function addPost(error, post) {
  return {
    type: ADD_POST,
    post,
    error
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(extractErrorMessage(res), res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(extractErrorMessage(res), res.post)));
  };
}

export function deletePost(error, cuid) {
  return {
    type: DELETE_POST,
    cuid,
    error
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(res => dispatch(deletePost(extractErrorMessage(res), cuid)));
  };
}
