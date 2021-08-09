import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Import Actions
import { fetchPost, clearPostError } from '../../store/PostActions';
import PageHeader from '../../../components/PageHeader';

const useStyles = makeStyles({
  media: {
    width: "100%",
  },
});

const PostDetailPage = () => {
  const { cuid } = useParams();
  const post = useSelector(state => state.posts.data.find(currentPost => (currentPost.cuid === cuid)));
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (!post) dispatch(fetchPost(cuid));

    return () => {
      dispatch(clearPostError())
    }
  }, []);

  return (post
    ?
    (<div className="container">
      <div className="row">
        <PageHeader headerText={post.title} />
      </div>
      <div className="row my-4">
        {post.imageUrl ? (
          <div className="col-6">
            <img src={post.imageUrl} className={classes.media} />
          </div>
        ) : null}
        <div className={post.imageUrl ? "col-6" : "col-12"}>
          <Typography component="p" className="mt-3">
            {post.content}
          </Typography>
          <Typography color="textSecondary" component="p" className="mt-3 font-italic">
            From {post.name}
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <Link to="/">
            <Button variant="contained">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>)
    : error ? <Redirect to="/" /> : (<div>Loading</div>)
  );
}
export default PostDetailPage;
