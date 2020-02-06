import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostListItem({ post, onDelete }) {
  return (
    <div className="card my-4">
        <div className="card-body">
          <h3 className="card-title">
            <Link to={`/posts/${post.cuid}/${post.slug}`} >
              {post.title}
            </Link>
          </h3>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small>{post.name}</small></p>
            <a href="#" onClick={onDelete}>Delete post</a>
        </div>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
