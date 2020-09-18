import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        maxWidth: 445,
        fontSize: 20
      },
      paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        fontSize: 30
      }
  })
)

export function ProfilePaper() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}></Paper> */}
      <Typography variant='h5'>
      👋 I am Bhargav. <br/>
        🇬🇧 based 🇮🇳 software engineer with a
        interest in 💻 software architecture,
        🛠️ systems architecture,
        DIY electronics 🔌🔋 and ⚽🔴 Arsenal FC
      </Typography>
      <Typography variant='h5'>
        In my free time, I usually <s>blog</s> spout platitude
        about software engineering practices, existentialism and much more.
      </Typography>
      {/* <Paper variant='outlined' square> Stuff in here </Paper> */}
    </div>
  )
}