import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget';
// Import Actions
import { addPostRequest, deletePostRequest, fetchPosts, clearPostError } from '../../store/PostActions';
import PageHeader from '../../../components/PageHeader';
import ErrorArea from '../../../components/ErrorArea';

const PostListPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.data);
  const postError = useSelector(state => state.posts.error);
  const isAuth = useSelector(state => state.user.isLoggedIn);

  const onErrorDismiss = () => {
    dispatch(clearPostError());
  };

  useEffect(() => {
    dispatch(fetchPosts());

    return () => {
      onErrorDismiss();
    }
  }, []);

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
        <PageHeader headerText='Alaya Blog' />
      </div>
      <hr />
      <div className="row">
        {
          isAuth ? (
            <div className="col-6">
              <PostCreateWidget addPost={handleAddPost} showAddPost={isAuth} />
            </div>
          ) : null
        }
        <div className={isAuth ? "col-6" : "col-12"}>
          <PostList handleDeletePost={handleDeletePost} posts={posts} isAuth={isAuth} />
        </div>
      </div>
      <ErrorArea error={postError} onErrorDismiss={onErrorDismiss} />
    </div>
  );
};

export default PostListPage;