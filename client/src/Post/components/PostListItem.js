import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});
const PostListItem = ({ post, onDelete, isAuth, userId }) => {
  const classes = useStyles();

  return (
    <Card className="w-100 my-4">
      {
        post.imageUrl ? <CardMedia
          className={classes.media}
          image={post.imageUrl}
        /> : null
     }
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link to={`/posts/${post.cuid}/${post.slug}`} >
            {post.title}
          </Link>
        </Typography>
        <Typography component="p" className="mt-3">
          {post.content}
        </Typography>
        <Typography color="textSecondary" component="p" className="mt-3 font-italic">
          From {post.name}
        </Typography>
      </CardContent>
      {isAuth && post.creator === userId ? (
        <CardActions>
          <Button size="small" color="secondary" onClick={onDelete}>
            Delete post
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired
  }).isRequired,
  isAuth: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
