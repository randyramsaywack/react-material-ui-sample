import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton, CardMedia } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
      height: "150px",
      width: "auto",
      display: "block",
      resizeMode: 'repeat'
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { avatarSrc, title, price, description, imgSrc } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} aria-label="recipe" className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={price}
      />
        <CardMedia className={classes.img} image={imgSrc} />

        <Typography variant="body2" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Bid</Button>
      </CardActions>
    </Card>
  );
}