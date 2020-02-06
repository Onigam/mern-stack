import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget';
// Import Actions
import { addPostRequest, deletePostRequest, fetchPosts } from '../../PostActions';

const PostListPage = ({ showAddPost }) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.data);

  useEffect(() => {
    dispatch(fetchPosts());
  },[]);

  const handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      dispatch(deletePostRequest(post));
    }
  };

  const handleAddPost = (post) => {
    dispatch(addPostRequest(post));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-4"> MERN Blog </h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <PostCreateWidget addPost={handleAddPost} showAddPost={showAddPost} />
        </div>
        <div className="col-6">
          <PostList handleDeletePost={handleDeletePost} posts={posts} />
        </div>
      </div>
    </div>
  );
};

PostListPage.propTypes = {
  showAddPost: PropTypes.bool.isRequired
};


export default PostListPage;
