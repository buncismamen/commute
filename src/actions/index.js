import axios from 'axios';

export const fetchPosts = (dispatch, getState) => {
  
  return dispatch => {
    dispatch({
      type: 'FETCH_POSTS_REQUEST',
    });
  
    return axios.get('http://localhost:3000/posts.json').then(
      response => {
        dispatch({
          type: 'FETCH_POSTS_SUCCESS',
          response: response.data,
        });
      },
      error => {
        dispatch({
          type: 'FETCH_POSTS_FAILURE',
          message: error.message || 'Something went wrong.'
        });
      }
    );
  }
};
