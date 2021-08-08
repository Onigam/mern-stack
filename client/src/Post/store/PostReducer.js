import { ADD_POST, ADD_POSTS, DELETE_POST, CLEAR_POST_ERROR } from './PostActions';

// Initial State
const initialState = {
  data: [],
  error: null
};

const PostReducer = (state = initialState, action) => {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case ADD_POST:
      newState.error = action.error;

      if (action.post) {
        newState.data.unshift(action.post);
      }

      break;
    case ADD_POSTS:
      newState.data = action.posts || [];
      break;
    case CLEAR_POST_ERROR:
      newState.error = null;
      break;
    case DELETE_POST:
      newState.error = action.error;

      if (!action.error) {
        newState.data = state.data.filter(post => post.cuid !== action.cuid);
      }

      break;
  }

  return newState;
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
