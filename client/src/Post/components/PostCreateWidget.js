import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// Import Style

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  uploadFile: {
    width: "100%"
  }
}));

const PostCreateWidget = ({ addPost }) => {
  const [state, setState] = useState({});
  const classes = useStyles();

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

  const handleFileChange = (evt) => {
    setState({
      ...state,
      file: evt.target.files.length > 0 ? evt.target.files[0] : null
    });
  };

  return (
    <div className={`${classes.root} d-flex flex-column my-4 w-100`}>
      <h3>Create new post</h3>
      <TextField variant="filled" label="Author name" name="name" onChange={handleChange} />
      <TextField variant="filled" label="Post title" name="title" onChange={handleChange} />
      <TextField variant="filled" multiline rows="4" label="Post content" name="content" onChange={handleChange} />
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        name="file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          component="span"
          className={classes.uploadFile}
        >
          {state.file ? `Selected file: ${state.file.name}` : "Upload Image"}
        </Button>
      </label>
      <Button className="mt-4" variant="contained" color="primary" onClick={() => submit()} disabled={!state.name || !state.title || !state.content}>
        Submit
      </Button>
    </div>
  );
};

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PostCreateWidget;
