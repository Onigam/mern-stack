import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import Style

const PostCreateWidget = ({ addPost }) => {

    const [state, setState] = useState({});

  const submit = () => {
    if (state.name && state.title && state.content) {
      addPost(state);
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
        ...state,
        [evt.target.name]: value
    });
    };

  return (
    <div className="d-flex flex-column my-4">
      <h3 className="my-3">Create new post</h3>
        <div className="form-group">
            <input placeholder="Author name" className="form-control" name="name" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input placeholder="Post title" className="form-control" name="title" onChange={handleChange} />
        </div>
        <div className="form-group">
            <textarea placeholder="Post content" className="form-control" name="content" onChange={handleChange} />
        </div>
      <a className="btn btn-primary" href="#" onClick={() => submit()}>Submit</a>
    </div>
  );
};

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PostCreateWidget;
