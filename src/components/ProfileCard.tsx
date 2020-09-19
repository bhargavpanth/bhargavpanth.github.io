import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 445
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
        padding: theme.spacing(2)
    }
  }),
);

export function ProfileCard() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image='../static/images/profile.jpeg'
                title='Profile picture'
            />
            {/* <CardContent> If there is stuff to put </CardContent> */}
            <CardActions disableSpacing>
                <IconButton aria-label='Twitter'>
                    <TwitterIcon />
                </IconButton>
                <IconButton aria-label='LinkedIn'>
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label='GitHub'>
                    <GitHubIcon />
                </IconButton>
            </CardActions>
        </Card>
      </div>
  )
}